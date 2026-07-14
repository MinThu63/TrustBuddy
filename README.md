#  TrustBuddy — Anti-Scam Assistant

An AI-powered Anti-Scam Assistant designed to protect senior citizens in Singapore from scams. Built by **Prompt Pirates** for the Skills Ignition SG AI Challenge 2026.

🔗 **Live Demo:** https://minthu63.github.io/TrustBuddy/  
🎬 **Video Explanation:** https://share.synthesia.io/ed7d9df1-c09f-445e-8f1a-72e5f93b1c2e

---

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Technical Highlights](#technical-highlights)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [Roadmap](#roadmap)
- [Team](#team)
- [License](#license)

---
<img width="1024" height="572" alt="image" src="https://github.com/user-attachments/assets/a704e857-15ad-451a-832c-cd6054f40e35" />


## Motivation

Scam cases in Singapore have reached record highs, with seniors being the most vulnerable demographic. Many elderly citizens struggle to identify sophisticated scam messages — fake bank alerts, government impersonation calls, family emergency texts, and phishing links. https://www.straitstimes.com/singapore/scam-tracker-what-are-the-latest-trends-in-spore-and-how-much-money-has-been-lost

TrustBuddy provides a **simple, accessible tool** where seniors can paste any suspicious message and receive an instant AI-powered verdict. The system uses Retrieval-Augmented Generation (RAG) to search a curated database of known scam profiles, ensuring responses are grounded in real, verified scam data specific to Singapore.

Every aspect of the experience — from oversized buttons to plain-language responses — is designed specifically for users aged 60+ who may have limited digital literacy, reduced vision, or motor difficulties.

---

## Features

| Feature | Description |
|---------|-------------|
| 🔍 **Real-Time Scam Analysis** | Instant AI verdict: 🚨 SCAM ALERT, ⚠️ SUSPICIOUS, or ✅ LIKELY SAFE with plain-language explanation |
| 🌏 **Multi-Language UI** | Full interface in English, 中文, Melayu, தமிழ் with localStorage persistence |
| 🔤 **Adjustable Text Size** | A−/A/A+ controls on every page, persists across sessions |
| 🌐 **Response Translation** | One-click translation of AI responses via MyMemory API |
| 🔊 **Read Aloud** | Text-to-speech at 0.85x speed for seniors with poor eyesight |
| 💬 **WhatsApp Share** | Share AI verdict with family instantly |
| 📋 **Check History** | Last 20 checks stored locally, no server storage |
| 📝 **Feedback System** | Rate helpfulness, accuracy, clarity — logged to Google Sheets |
| 📚 **Educational Resources** | Links to ScamShield quizzes, videos, bulletins, and games |
| 🚨 **Emergency Contacts** | Anti-Scam Helpline (1799), ScamShield, Police (999) on every page |
| ♿ **Accessibility-First** | 20px font, 60px+ buttons, high contrast, ARIA labels, responsive |
| 🔒 **100% Private** | No sign-up, no data stored on servers |
| 📊 **Confidence Score** | AI reports confidence percentage based on database match strength |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  FRONTEND (GitHub Pages)                                        │
│  HTML + CSS + Bootstrap 5 + JS → fetch POST to n8n webhook      │
│  Pages: Landing, Check, About, Scam Types, Resources, FAQ,     │
│         Feedback                                                │
└─────────────────────────┬───────────────────────────────────────┘
                          │ JSON: { user_message }
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  n8n MAIN WORKFLOW (2 sub-flows)                                │
│                                                                 │
│  Sub-flow A: Knowledge Base Ingestion                           │
│  Form Trigger → Data Loader → OpenAI Embeddings → Pinecone     │
│                                                                 │
│  Sub-flow B: Scam Detection & Logging                           │
│  Webhook → AI Agent (+ Pinecone tool) → Respond to Webhook     │
│                                       → Code → Google Sheets    │
│                                                                 │
│  Model: OpenRouter Chat Model                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW 2: Monthly Scam Trends Report                     │
│  Schedule Trigger → Google Sheets → Code → LLM Chain → Gmail   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW 3: Feedback Collector                              │
│  Webhook → Code → Google Sheets → IF (negative?) → Gmail alert │
└─────────────────────────────────────────────────────────────────┘
```

**Vector Database:** Pinecone (AWS us-east-1, free tier)
- Index: `silvershield` | Dimensions: 1536 | Metric: Cosine
- 44+ structured scam entries from ScamShield, SPF, DBS/OCBC/UOB

---

## Project Structure

```
trustbuddy/
├── index.html                          → Landing page (intro + CTA)
├── check.html                          → Main scam checker (textarea + history)
├── about.html                          → About, How It Works, Features
├── scam-types.html                     → 8 common scam types with protection tips
├── resources.html                      → Educational links (ScamShield, quizzes, games)
├── faq.html                            → FAQ with Bootstrap accordion
├── feedback.html                       → Feedback form (sends to n8n)
├── style.css                           → Custom styles + Bootstrap overrides
├── script.js                           → Main app logic (webhook, i18n, TTS, history)
├── textsize.js                         → Text size controls (shared across pages)
├── assets/
│   └── logo.png                        → TrustBuddy logo
├── individual-deliverables/
│   └── minthu/
│       └── code-node-entity-extraction.js → n8n Code node (entity extraction + logging)
├── reports/
│   ├── team-report/                    → Final team report (Word doc)
│   ├── individual-contributions/       → Individual contribution statements
│   ├── testing-report/                 → Testing documentation (30 test cases)
│   ├── scam-data-file/                 → RAG scam advisory data (.txt files)
│   └── pptSlides/                      → Presentation slides
├── docs/                               → Internal project documentation
├── README.md                           → This file
└── .gitignore
```

---

## Technical Highlights

| Area | Implementation |
|------|---------------|
| **RAG** | Pinecone + OpenAI Embeddings (1536d, cosine) |
| **AI Agent** | n8n AI Agent with mandatory Pinecone search tool |
| **Prompt** | 3 iterations → senior-friendly, 150-word limit, confidence scoring |
| **Logging** | Google Sheets (7 fields: timestamp, message, category, risk, entities, action, verdict) |
| **Entity Extraction** | Regex extracts phones, URLs, emails from user message only |
| **Reporting** | Monthly AI-generated HTML trend report emailed automatically |
| **Translation** | MyMemory API, always from original English |
| **TTS** | Web Speech API, language-aware, 0.85x speed |
| **Feedback** | Structured collection with negative-feedback email alerts |
| **Hosting** | GitHub Pages (free, zero build step) |
| **UI** | Bootstrap 5 + custom CSS, dark navy + blue brand colours |

---

## Getting Started

```bash
# Clone
git clone https://github.com/MinThu63/TrustBuddy.git
cd TrustBuddy

# Run locally
npx serve . -l 3000

# Open
http://localhost:3000
```

---

## Demo

- **Live Website:** https://minthu63.github.io/TrustBuddy/
- **Video Walkthrough:** https://www.youtube.com/watch?v=DSdbFBFo5vI

---

## Roadmap

- [x] RAG pipeline with Pinecone
- [x] Multi-language UI (EN, ZH, MS, TA)
- [x] Response translation
- [x] Read Aloud (TTS)
- [x] WhatsApp share
- [x] Accessibility-first design
- [x] Google Sheets audit logging
- [x] Monthly Scam Trends Report
- [x] Feedback collection workflow
- [x] Multi-page site with landing page
- [x] Educational resources (ScamShield links)
- [x] Confidence scoring

---

## Team

| Member | Role |
|--------|------|
| **Kyaw Min Thu** | Main n8n workflow (ingestion + detection), Pinecone setup, frontend-backend webhook integration, Monthly Report workflow, Code node for entity extraction and Google Sheets logging, team coordination and review, project documentation (README, team report), ensuring timely submission |
| **Amos** | Dataset curation from official sources (ScamShield, SPF, DBS/OCBC/UOB), data structuring via NotebookLM, uploading 44+ entries to Pinecone, system testing, testing documentation (30 test cases) |
| **Darius** | Frontend development (all pages), Bootstrap 5 UI/UX, accessibility (text size, high contrast, ARIA), multi-language UI, response translation, Read Aloud TTS, WhatsApp share, check history, responsive design |
| **Chan Xin Yi** | Brand identity, TrustBuddy logo design, promotional materials (video, brochures, social ads), colour palette, visual consistency, video production |
| **Hsu** | Feedback n8n workflow (Webhook → Code → Google Sheets → IF → Gmail alert), AI Agent system prompt design (3 iterations with RAG enforcement, 150-word limit, Singapore context, confidence scoring) |

---

## License

Created for the C240 Final Assessment. For educational purposes only.
