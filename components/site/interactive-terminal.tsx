"use client";

import { useState, useRef, useEffect } from "react";

const WELCOME_OUTPUT = `
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     ██╗  ██╗   ██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     ██║  ╚██╗ ██╔╝
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     ██║   ╚████╔╝
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     ██║    ╚██╔╝
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗███████╗██║
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝

[SYSTEM INITIALIZED] - Nava Tavasoli's Terminal Portfolio v1.0

Type help to see available commands.`;

const commands = {
  help: () => `
[AVAILABLE_COMMANDS]

about       Display personal information
projects    View project portfolio
skills      Show technical skills
experience  Display work history
education   View educational background
contact     Show contact information
clear       Clear terminal screen
help        Display this help message
  `,
  about: () => `
Name: Nava Tavasoli
Role: Developer · Engineer · Speaker · Researcher
Based: Toronto · Ottawa
Status: Open to internship opportunities for Summer 2027

Bio: Third-year student at the University of Ottawa doing a double degree
in Computing Technology (BSc) and Electrical Engineering (BASc). Keen on
working in the layer where software meets silicon. Interested in AI,
military defence, and cybersecurity.

Specializations: GPU Acceleration · AI/ML · Agentic AI
  `,
  projects: () => `
[PROJECT PORTFOLIO]

1. Cryptography Research Project
   • Independent research on Diophantine equations applied to cryptography
   • Accepted into the CMS Mathematical Research Showcase
   • Supervised by Dr. Nazanin Zaker, University of Ottawa

2. Formula 1 Telemetry App
   • Tech Stack: Python, FastAPI, FastF1, Data Visualization
   • Race results, standings, schedules, and lap telemetry for 2026 season

3. rag-agent-lite
   • Tech Stack: LangChain, LangGraph, Qdrant, Ollama
   • Five-stage agentic RAG build: retrieval, hybrid search, tool calling,
     self-correction, multi-agent orchestration — all on local models
   • GitHub: https://github.com/navatavasoli

4. Nerd Bot
   • Tech Stack: LLMs, Python, Java, Swift
   • Line-by-line code explainer for beginners
   • GitHub: https://github.com/navatavasoli/nerdbot

5. The Legend of Zelda: Zelda's Awakening
   • Tech Stack: Python, Pygame
   • Independent game build with 150+ gameplay assets

Type projects in the PROJECTS section above for full details.
  `,
  skills: () => `
[TECHNICAL SKILLS]

Languages:
  Python, TypeScript, Java, Go, SQL, MATLAB, PowerShell, Scheme, Prolog,
  HTML, Jupyter Notebook

Frameworks & Libraries:
  React, Next.js, Node.js, Flask, Spline, vanilla JS

Hardware & Signals:
  Simulink, Arduino, Raspberry Pi, ROS, Altera Quartus, NVIDIA NIMs,
  NVIDIA GPUs

AI/ML & Data:
  LangChain, LangGraph, CUDA, MongoDB, Pydantic

Cloud & Tools:
  Docker, AWS, Google Cloud Platform, Firebase, Git, Azure DevOps,
  Apache Maven

Featured Skills:
  Public Speaking, Technical Writing, Creative Problem Solving,
  Project Management and Coordination
  `,
  experience: () => `
[WORK EXPERIENCE]

JUNE 2026 - AUGUST 2026 | AI/ML Engineer (Data Science Support)
Department of National Defence - Warfighter Support Division
• Developed agentic models for military applications using LangChain,
  LangGraph, and RAG
• Built an autonomous LLM assessment application to query and grade models

MARCH 2025 - PRESENT | Co-Principal Cybersecurity Researcher
uOttawa Faculty of Electrical Engineering and Computer Science
• Leading an RCMP-funded study on LLMs for cybersecurity education
• Preparing an academic paper for peer-review and publication

JUNE 2024 - MAY 2026 | VP of Outreach · UI/UX Web Developer
SEDS Canada
• Assisted in coordinating NASA Space Apps
• Led web design for the Women of SEDS Conference in Canada

JANUARY 2025 - JANUARY 2026 | Teaching Assistant
University of Ottawa School of Engineering Design and Innovation
• Managed student projects for GNG1103: Introduction to Engineering Design

SEPTEMBER 2024 - DECEMBER 2024 | Software Developer
Shabodi Inc.
• Built an AWS Bedrock app to detect SIM swap/duplication on 5G networks

Type experience in the EXPERIENCE section above for the full history.
  `,
  education: () => `
[EDUCATION & CERTIFICATIONS]

University of Ottawa (2023 - Present)
• Double degree: BSc in Computing Technology + BASc in Electrical Engineering
• Year: 3rd
• Specializations: GPU Acceleration, AI/ML, Agentic AI

Certifications:
• Accelerated Computing with CUDA Python — NVIDIA (2026)
• Building LLMs with Prompt Engineering — NVIDIA (2026)
• Certified Cloud Practitioner — AWS (2026)
• North Builders Track — Cohere (2026)
• Soldering — uOttawa Richard L'Abbe Makerspace (2025)
• Machining Level I - Manual Milling Skills I — uOttawa Makerspace (2025)
• Laser Cutting — uOttawa Richard L'Abbe Makerspace (2024)
  `,
  contact: () => `
[CONTACT INFORMATION]

Email: nava.tavasoli@gmail.com
GitHub: https://github.com/navatavasoli
LinkedIn: https://www.linkedin.com/in/nava-tavasoli/

Currently open to internship opportunities for Summer 2027.
  `,
  clear: () => "__CLEAR__",
};

export function Terminal() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    { command: "/welcome", output: WELCOME_OUTPUT },
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase();
    const commandFn = commands[cmd as keyof typeof commands];
    const output = commandFn
      ? commandFn()
      : `Command not found: ${cmd}\nType help to see available commands.`;

    if (output === "__CLEAR__") {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, { command: currentCommand, output }]);
    }

    setCurrentCommand("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIndex = Math.min(prev + 1, history.length - 1);
        if (history.length > 0) {
          setCurrentCommand(history[history.length - 1 - newIndex]?.command || "");
        }
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIndex = Math.max(prev - 1, -1);
        setCurrentCommand(newIndex === -1 ? "" : history[history.length - 1 - newIndex]?.command || "");
        return newIndex;
      });
    }
  };

  useEffect(() => {
    const el = terminalRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    const el = terminalRef.current;
    el?.addEventListener("click", handleClick);
    return () => el?.removeEventListener("click", handleClick);
  }, []);

  const renderOutput = (output: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    let parts = output.split(urlRegex);
    parts = parts.flatMap((part) => (urlRegex.test(part) ? [part] : part.split(emailRegex)));

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
          >
            {part}
          </a>
        );
      } else if (emailRegex.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className="text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-md border border-green-400/60 bg-black font-mono shadow-lg">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 bg-gray-800 p-3 text-xs text-gray-400">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500 transition-colors hover:bg-green-400" />
        </div>
        <div className="flex-1 text-center font-semibold">
          nava@portfolio-terminal:~$ | Interactive Portfolio v1.0
        </div>
        <div className="text-xs">
          <span className="text-green-400">●</span> ONLINE
        </div>
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="h-[60vh] max-h-[600px] cursor-text space-y-3 overflow-y-auto bg-black p-4 text-green-400"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#10b981 #1f2937" }}
      >
        {history.map((entry, i) => (
          <div key={i} className="space-y-2">
            <div className="flex gap-2">
              <span className="font-semibold text-cyan-400">nava@portfolio:~$</span>
              <span className="text-white">{entry.command}</span>
            </div>
            <div className="whitespace-pre-wrap pl-6 leading-relaxed text-gray-300">
              {renderOutput(entry.output)}
            </div>
          </div>
        ))}

        {/* Current Command Input */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-cyan-400">nava@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white caret-green-400 outline-none"
            spellCheck="false"
          />
          <span className="animate-pulse text-green-400">█</span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="border-t border-gray-700 bg-gray-800 px-4 py-2 text-xs text-gray-500">
        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
          <span>Type help for available commands · Use ↑/↓ for command history</span>
          <span>Click clear to reset terminal</span>
        </div>
      </div>
    </div>
  );
}
