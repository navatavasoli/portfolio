---
title: "check out my latest app!"
date: "2026-08-07"
excerpt: "Formula 1 fans, get ready to race through my newest release!"
image: "/blog/f1-app/kimi.jpg"
---

Can you call yourself a Formula 1 fan if you haven't tried to get into the data analysis side of everything? 

I'm genuinely beyond excited to share my first [real web page application](https://navatavasoli.com/blog/f1-app): it's (you guessed it) a Formula 1 Telemetry App! I built it using [FastF1](https://github.com/theOehrly/Fast-F1), which is a Python package that lets you access F1 results and related data like schedules down to the grittier details like all the throttle telemetry and podium standings.  

As a pretty recent fan, I feel like the timing of me discovering this couldn't have been better. It was a great challenge for me to build an application partially using Claude Code to help me learn how to do it correctly. I deployed it using Vercel and I incorporated some assets from 21st.dev, which is slowly becoming one of my favourite websites out there.

# The Build

## Backend
My backend uses FastAPI over the fastf1 package like I mentioned before. Not much work here, since all the hard work was already done for me by the scraping the package already does! 

## Frontend

For the frontend, I'm using vanilla JS. I incorporated the **globe** feature you see on the website through a 21st.dev asset which uses WebGL. The rest of the design uses Google Fonts CDN (namely Orbitron/Titillium/Chakra Petch fonts).

## Deployment

I'm hosting on Vercel, but the whole thing is shipped like a serverless function thanks to the vercel.json wrapper. 

All of the code is available on my GitHub publically. 

[Check out my app where it's live now!](https://f1-telemetry-tracker-iubb72pq1-navatavasolis-projects.vercel.app/)

## Aside - My F1 Stats

How can I talk about my app if I don't share a little bit more about my OWN stats and telemetry?

| Category | Favourite |
|---|---|
| Team | Ferrari, Mercedes-Benz |
| Driver | Kimi Antonelli |
| Car | [Aston Martin's AMR26](https://www.astonmartin.com/en/models/amr26) |
| Track | SPA, Las Vegas Strip Circuit |


[Cover image link](https://www.sbnation.com/formula-one)