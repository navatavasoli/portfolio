---
title: "what AI is spiderman using?"
date: "2026-08-01"
excerpt: "is it Fable? Sol? Kimi?"
image: "/blog/spiderman/spiderman.jpg"
---

> This blog post might contain spoilers for *Spiderman: Brand New Day*

The biggest question I had from watching Brand New Day (other than why they nerfed Jean's character) was what AI Peter was subscribed to. We can see in countless times of the film that he has some sort of voice-to-text interface that he uses to communicate with EV.

Obviously he's not using Stark Technologies-powered AI anymore because his old techno suit can't recognize him anymore. We know he's gone completely independent, which leaves us with a few options. I don't buy that he has had all the time and money in the world to make his own LLM and data center, so for the sake of this thought experiment, let's just say that he got himself a nice little [NVIDIA GeForce](https://www.nvidia.com/en-us/geforce-now/) to power his workstation and serve as his own private "mini" workstation. 

There are a couple different options for AI powerful enough that he could have used. Given that he's in the US, it's possible that he would be using a [Chinese AI](https://hai.stanford.edu/news/open-weight-models-arent-enough-we-need-truly-open-source-ai-models-for-science-and-society) like Moonshot AI's Kimi K3 which has a lot less room for concern when it comes to bypassing restrictions. If you tell Fable you want to build a bomb, it won't tell you. But Kimi... probably will.

So let's say Peter turns on his VPN, he gets his GPU, he invests in a nice Razer keyboard and gets himself an ergo mouse too. The next question becomes what exactly is he subscribed to?

## The Base Model

Whatever AI Peter needs to use, he's restricted to this local GPU and no corporate backing. So, he needs something realistic - [full frontier models](https://benchlm.ai/frontier-ai-models) like OpenAI, Anthropic, and Google are eliminated. 

One genuinely feasible option is [Llama 3.3 70B (quantixed)](https://huggingface.co/models?other=base_model:quantized:meta-llama/Llama-3.3-70B-Instruct) or some kind of MoE model like Mixtral. It fits the agenda for consumer VRAM with 4-bit quantization. Assuming he has some familiarity with building LLMs, he could definitely get away with these.

Kimi K3 *does* have [really good reasoning and open weights](https://artificialanalysis.ai/), but with 1T parameters it might actually be too large for his GeForce. So, unless he's literally just calling a hosted API over his VPN, he just can't be calling it locally. It leaves too much room for security compromise, so we might just need to elimiate it. Bye, Kimi.

The best option for the model, most realistically, might just be [DeepSeek-R1 (7B-32B)](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B) because of the fact that it can genuinely run well on a single private card. More than that, it's open-source, and the fact that it's Chinese doesn't hurt when it comes to the types of queries Peter has to make. 

## The Voice Interface

There are really only 2 options I can think of here for [STT and TTS].(https://www.hume.ai/blog/speech-to-text-and-text-to-speech-stt-tts). For STT, the only option I think of is STT: Whisper. It is from OpenAI, but it is offline-capable and it's also open weight, so it's genuinely a reasonable guess.

Coqui TTS or Piper might be a better match in terms of how good the voice is. Or, alternatively, he invested in Eleven Labs.

## Is Peter an AI Prodigy?

Short answer: YES.

In the span of the entire movie, not ONCE did EV hallucinate. AI *is* getting better, and chatbots [*are* hallucinating less](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/), but this is a whole new level of accuracy. Calculating real time data with voice-to-text as an interface... and you can imagine that he definitely maxed out his API tokens for the day.


In my next post I'll probably delve into the cybersecure integrity of his weird app because spoiler alert: there is none.

And the next big question: Who is Peter's internet provider? Best connection I've ever seen. 