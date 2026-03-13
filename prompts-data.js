const allPrompts = [
  // ── Writing (15)
  { category: "Writing", title: "Engaging Blog Intro", text: "Write a gripping 120–180 word introduction for a blog post about [TOPIC]. Start with a hook (question / stat / story), build curiosity, end with a clear value promise. Tone: warm, conversational, Gen-Z friendly. 2026 style." },
  { category: "Writing", title: "LinkedIn Carousel Script", text: "Create a 6–8 slide LinkedIn carousel script on [TOPIC]. Each slide = short headline + 1–2 sentences + emoji suggestion. Goal: high saves & shares. End with strong CTA." },
  { category: "Writing", title: "Twitter Thread (X Thread)", text: "Write an 8–12 tweet thread explaining [CONCEPT] in simple terms. Number each tweet, use hooks, add 1–2 questions to engage, finish with CTA. 2026 voice: direct, slightly spicy, value-first." },
  { category: "Writing", title: "YouTube Video Script – Hook + Outline", text: "Generate a YouTube video script opener (first 30 seconds) + detailed 8-section outline for '[VIDEO TITLE]'. Include pattern interrupts, curiosity gaps, and timestamps." },
  { category: "Writing", title: "Product Description – E-commerce", text: "Write a persuasive 150-word product description for [PRODUCT] targeting [AUDIENCE]. Use benefit-focused language, social proof hints, urgency, SEO keywords naturally." },

  // ── Coding (12)
  { category: "Coding", title: "Clean React Component", text: "Convert this messy React functional component to clean, typed, modern 2026 style (Tailwind, shadcn/ui patterns, proper hooks, error handling). Code:\n[PASTE CODE]" },
  { category: "Coding", title: "Python FastAPI Endpoint", text: "Write a complete FastAPI POST endpoint for user signup with Pydantic validation, JWT auth stub, SQLAlchemy async session, proper error responses. Include OpenAPI docs summary." },
  { category: "Coding", title: "Debug This Bug", text: "Here is broken code + error message + what should happen. Step-by-step: 1) explain root cause 2) suggest fix 3) provide corrected version.\nCode:\n[CODE]\nError:\n[ERROR]" },
  { category: "Coding", title: "Optimize SQL Query", text: "Optimize this slow SQL query for PostgreSQL 17+. Add indexes suggestions, rewrite with CTE / window functions if helpful.\nQuery:\n[QUERY]" },

  // ── Midjourney / Art (15)
  { category: "Midjourney", title: "Cinematic Product Shot", text: "Ultra-realistic product photograph of [PRODUCT] on matte black background, dramatic rim lighting, subtle smoke/fog, 85mm lens, golden hour tones, hyper-detailed, 8k --ar 4:5 --stylize 250 --v 6.1" },
  { category: "Midjourney", title: "Cyberpunk Portrait", text: "Close-up cyberpunk female portrait, neon reflections on wet skin, holographic hair accessories, intense gaze, Tokyo night city bokeh, cinematic color grade, --ar 2:3 --v 6.1 --q 2" },
  { category: "Midjourney", title: "Minimalist Logo Style", text: "Clean minimalist vector logo concept for [BRAND], single color, negative space mastery, geometric, brutalist-modern fusion, flat design, --ar 1:1 --stylize 100 --v 6" },
  { category: "Midjourney", title: "Fantasy Book Cover", text: "Epic fantasy book cover: [TITLE], dark sorcerer standing on cliff overlooking glowing crystal city, dramatic sky, volumetric lighting, intricate details, painterly style, --ar 2:3 --v 6" },

  // ── Business / Startup (12)
  { category: "Business", title: "One-Page Pitch Deck Outline", text: "Create a concise 10-slide pitch deck outline for [STARTUP IDEA] targeting 2026 seed investors. Include problem, solution, TAM slide with realistic 2026 numbers, traction metrics placeholder, ask." },
  { category: "Business", title: "Cold LinkedIn DM", text: "Write a short, non-salesy LinkedIn connection request + follow-up DM to [ROLE] at [COMPANY]. Reference recent news/event, offer specific value, aim for 15-min call." },

  // ── Productivity (10)
  { category: "Productivity", title: "Daily Deep Work Plan", text: "Today is [DATE]. My energy is highest [TIME]. Top 3 priorities: 1.[ ] 2.[ ] 3.[ ]. Create time-blocked schedule with 90-min focus blocks, breaks, buffer time, evening review questions." },

  // ── Social Media / Content (12)
  { category: "Social", title: "Instagram Caption + Hashtags", text: "Write 5 engaging Instagram caption variations for [PHOTO/TOPIC]. Mix storytelling, questions, emojis, subtle CTA. Suggest 12–15 targeted 2026 hashtags (mix broad + niche)." },

  // ── Education / Learning (10)
  { category: "Education", title: "Explain Like I'm 12", text: "Explain [COMPLEX TOPIC] like I'm a curious 12-year-old. Use analogies from games / everyday life, keep under 250 words, end with 2 fun facts." },

  // ── Fun / Creative (10)
  { category: "Fun", title: "Roast My Bio", text: "Roast my Twitter/X bio in a funny, savage but helpful way, then suggest an improved version that keeps personality but levels up.\nBio: [PASTE BIO]" },

  // ── Marketing (12)
  { category: "Marketing", title: "A/B Test Ideas – Ad Copy", text: "Generate 4 high-conversion Facebook/Instagram ad copy variations for [PRODUCT/SERVICE]. Test angles: fear of missing out, social proof, curiosity, direct benefit. Include emoji + CTA." },

  // ── Research / Analysis (12)
  { category: "Research", title: "Competitor teardown", text: "Perform a quick 2026 competitor analysis of [COMPETITOR 1] vs [COMPETITOR 2] vs [YOUR IDEA]. Cover: positioning, pricing, features, UX strengths/weaknesses, recent moves from X/news." }
  // You can keep adding more objects here later...
];

const categories = [...new Set(allPrompts.map(p => p.category))].sort();
