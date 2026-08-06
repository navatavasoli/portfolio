"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { useReducedMotion } from "framer-motion"

interface Pixel {
  id: number
  x: number
  y: number
  opacity: number
  age: number
}

const PIXEL_SIZE = 12
const TRAIL_LENGTH = 40
const FADE_SPEED = 0.04

export function PixelCursorTrail() {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [pixels, setPixels] = useState<Pixel[]>([])
  const pixelIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  const createPixel = useCallback((x: number, y: number) => {
    return {
      id: pixelIdRef.current++,
      x,
      y,
      opacity: 1,
      age: 0,
    }
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Only trail while the cursor is actually over this section — this
      // listens on window (rather than the div itself) so it still fires
      // when the topmost element under the cursor is hero content sitting
      // above the trail layer (text, buttons, the portrait frame).
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return

      const dx = x - lastPositionRef.current.x
      const dy = y - lastPositionRef.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > PIXEL_SIZE) {
        const newPixel = createPixel(x, y)
        setPixels((prev) => [...prev.slice(-TRAIL_LENGTH), newPixel])
        lastPositionRef.current = { x, y }
      }
    },
    [createPixel],
  )

  useEffect(() => {
    if (reduce) return
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [reduce, handleMouseMove])

  useEffect(() => {
    if (reduce) return

    const animate = () => {
      setPixels((prev) =>
        prev
          .map((pixel) => ({
            ...pixel,
            opacity: pixel.opacity - FADE_SPEED,
            age: pixel.age + 1,
          }))
          .filter((pixel) => pixel.opacity > 0),
      )
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [reduce])

  if (reduce) return null

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen select-none overflow-hidden"
    >
      {pixels.map((pixel) => {
        // Calculate size based on age - older pixels are smaller
        const sizeMultiplier = Math.max(0.3, 1 - pixel.age / 100)
        const currentSize = PIXEL_SIZE * sizeMultiplier

        return (
          <div
            key={pixel.id}
            className="absolute pointer-events-none bg-primary"
            style={{
              left: pixel.x - currentSize / 2,
              top: pixel.y - currentSize / 2,
              width: currentSize,
              height: currentSize,
              opacity: pixel.opacity,
              transition: "width 0.1s ease-out, height 0.1s ease-out",
            }}
          />
        )
      })}
    </div>
  )
}