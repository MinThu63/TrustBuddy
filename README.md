# 🛡️ TrustBuddy — Anti-Scam Assistant

An AI-powered Anti-Scam Assistant designed to protect senior citizens in Singapore from scams. Built for the **Skills Ignition SG AI Challenge 2026**.

🔗 **Live Demo:** <!-- Add your GitHub Pages URL here -->

---

## Table of Contents

- [Motivation](#motivation)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Technical Highlights](#technical-highlights)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Promotional Materials](#promotional-materials)
- [Roadmap](#roadmap)
- [Team](#team)
- [License](#license)

---

## Motivation

Scam cases in Singapore hit record highs in recent years, with seniors being the most vulnerable demographic. Many elderly citizens struggle to identify sophisticated scam messages — fake bank alerts, government impersonation calls, family emergency texts, and phishing links.

TrustBuddy addresses this by providing a **simple, accessible tool** where seniors can paste any suspicious message and receive an instant AI-powered verdict. The system searches a curated database of known scam profiles using Retrieval-Augmented Generation (RAG), ensuring responses are grounded in real, verified scam data rather than general AI knowledge.

We designed every aspect of the experience — from the oversized buttons to the plain-language responses — specifically for users aged 60 and above who may have limited digital literacy, reduced vision, or motor difficulties.

---

## Features

### 🔍 Real-Time Scam Analysis
Users paste a suspicious message or link and receive an instant AI verdict: 🚨 **SCAM ALERT**, ⚠️ **SUSPICIOUS**, or ✅ **LIKELY SAFE**. The AI explains why in simple, jargon-free language — written as if speaking to a 70-year-old grandparent.

### 🌏 Multi-Language Support (Singapore's 4 Official Languages)
Full UI translation across **English, 中文 (Chinese), Melayu (Malay), and தமிழ் (Tamil)**. Every label, button, placeholder, error message, and instruction switches instantly. Language preference is saved to localStorage so it persists across visits.

### 🔤 Adjustable Text Size (A−, A, A+)
Three-button text size control available on every page. Users can increase or decrease the base font size from 16px to 28px. Preference is saved automatically via localStorage and persists across all pages and visits.

### 🌐 One-Click Response Translation
After receiving the AI's English analysis, users can click "Translate to: 中文 / Melayu / தமிழ்" to translate the response into their preferred language. Uses the MyMemory Translation API. Users can switch between languages freely — translations always work from the original English response to ensure accuracy.

### 🔊 Read Aloud
A "Read Aloud" button reads the AI response out loud using the browser's built-in Web Speech API. Designed for seniors with poor eyesight who may struggle to read text. Supports multiple languages, runs at a slightly slower pace (0.85x speed), and can be stopped with a single click.

### 📋 Check History
All past scam checks are stored locally (localStorage) and accessible via the "History" tab. Users can review previous analyses without re-submitting. History is limited to the last 20 entries and can be cleared at any time. No data leaves the user's browser.

### 📑 Copy & Share
A prominent "Copy Result" button lets seniors easily share the AI's analysis with family members, caregivers, or authorities via WhatsApp or SMS.

### 📝 Feedback System
Dedicated feedback page where users can rate:
- Was TrustBuddy helpful? (👍/👎)
- Was the verdict correct? (Yes/No/Not Sure)
- Was it easy to understand? (Easy/OK/Confusing)
- Optional free-text comment

Feedback is sent to a separate n8n workflow and logged in Google Sheets for analysis.

### 📚 Educational Resources
A dedicated Resources page linking to official government scam advisories including:
- Scams & Cybercrime Briefs
- Scam Trends
- Scam Bulletins
- Public Education Materials
- Educational Videos
- Interactive Scam Quiz
- Anti-Scam Games

All resources sourced from [ScamShield Singapore](https://www.scamshield.gov.sg/).

### 🚨 Emergency Contacts
Permanently visible section with:
- Anti-Scam Helpline: **1799**
- ScamShield App: scamshield.org.sg
- Singapore Police: **999**

### ♿ Accessibility-First Design
- **20px base font size** (minimum 18px on mobile)
- **High-contrast** dark text on light backgrounds
- **60px+ minimum button height** — well above the 44px WCAG minimum for touch targets
- **No complex interactions** — just paste and click
- **ARIA attributes** (`aria-live`, `role="status"`) for screen reader compatibility
- **Keyboard shortcut** (Ctrl + Enter) for power users and assistive tech
- **Responsive design** — works on phones, tablets, and desktops

### 🔒 Privacy
- No user messages are stored on servers
- Check history exists only in the user's browser (localStorage)
- No login or personal data required

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  FRONTEND (GitHub Pages - Multi-page static site)               │
│  HTML + CSS + Bootstrap 5 + JS → fetch POST to n8n webhook      │
│  Pages: Home, About, Scam Types, Resources, FAQ, Feedback       │
└─────────────────────────┬───────────────────────────────────────┘
                          │ JSON: { user_message }
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW 1: Scam Detection Pipeline (Main)                 │
│                                                                 │
│  Webhook → AI Agent ─┬→ Respond to Webhook (returns verdict)    │
│                │     └→ Code Node → Google Sheets (audit log)   │
│                │                                                │
│                ├─→ Tool: Pinecone Vector Store (RAG search)      │
│                │         └── OpenAI Embeddings (1536 dim)        │
│                │                                                │
│  Model: OpenRouter Chat Model                                   │
│  Logging: timestamp, message, category, risk_level, entities,   │
│           action, ai_verdict                                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW 2: Daily Scam Trends Report                       │
│                                                                 │
│  Schedule Trigger (daily 9am) → Google Sheets (read all logs)   │
│  → Code (format data) → Basic LLM Chain (analyse trends)       │
│  → Gmail (send report)                                          │
│                                                                 │
│  Generates: risk breakdown, top scam types, trending patterns,  │
│  key entities, and safety advisory for seniors                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW 3: Knowledge Base Ingestion                        │
│                                                                 │
│  Form Trigger → Default Data Loader → OpenAI Embeddings         │
│  → Pinecone Vector Store (upsert)                               │
│                                                                 │
│  Data: Structured scam advisory entries from official sources   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  n8n WORKFLOW 4: Feedback Collector                              │
│                                                                 │
│  Webhook → Code (format) → Google Sheets (log feedback)         │
│  → IF (negative?) → Gmail (alert team)                          │
│                                                                 │
│  Collects: helpfulness, accuracy, clarity, comments, language   │
└─────────────────────────────────────────────────────────────────┘
```

**Vector Database:** Pinecone (Free tier, AWS us-east-1)
- Index name: `silvershield`
- Dimensions: 1536
- Similarity metric: Cosine
- Data: 50+ structured scam advisory entries sourced from ScamShield, SPF, local banks

---

## Project Structure

```
trustbuddy/
├── index.html              → Home page (scam checker + history)
├── about.html              → About, How It Works, Key Features
├── scam-types.html         → 8 common scam types with examples & protection tips
├── resources.html          → Educational links (gov.sg, ScamShield, quizzes, games)
├── faq.html                → 8 FAQ questions with Bootstrap accordion
├── feedback.html           → Standalone feedback form
├── style.css               → Custom styles (accessibility overrides for Bootstrap)
├── script.js               → Main app logic (webhook, translations, history, TTS)
├── textsize.js             → Shared text size controls (persists across pages)
├── assets/
│   └── logo.png            → TrustBuddy logo
├── docs/
│   ├── projectdetail.md    → Technical project overview
│   ├── projectinstruction.md → Assessment brief
│   ├── scam-data-collection-guide.md → RAG data collection guide
│   └── feedback-workflow-guide.md → Feedback workflow setup guide
├── README.md               → This file
└── .gitignore              → Excludes .vscode, node_modules
```

---

## Technical Highlights

| Area | Implementation |
|------|---------------|
| **RAG Pipeline** | Pinecone vector search with OpenAI embeddings (1536 dimensions, cosine similarity) |
| **AI Agent** | n8n AI Agent with custom system prompt, Pinecone tool for mandatory database search before every response |
| **Prompt Engineering** | Iterative prompt design — structured verdicts (SCAM ALERT/SUSPICIOUS/SAFE), plain language rules, Singapore-specific context, tool enforcement, 150-word limit |
| **Data Logging** | Every scam check logged to Google Sheets with 7 fields: timestamp, message, category, risk level, entities, action, verdict |
| **Entity Extraction** | Code node regex extracts phone numbers, URLs, emails, account numbers from user submissions (not from AI response) |
| **Automated Reporting** | Daily AI-generated scam trends report with risk breakdown, top categories, and senior safety tips |
| **Multi-Language** | Client-side i18n with 4 language packs (EN, ZH, MS, TA), localStorage persistence |
| **Translation** | MyMemory API for on-demand response translation — always translates from original English for accuracy |
| **Text-to-Speech** | Web Speech API with language-aware voice selection, 0.85x speed for seniors |
| **Feedback Loop** | Structured feedback collection (helpfulness, accuracy, clarity) with negative feedback email alerts |
| **Accessibility** | 20px base font, 60px+ touch targets, high contrast, ARIA labels, keyboard shortcuts, responsive |
| **Hosting** | Static multi-page deployment on GitHub Pages (zero cost, zero build step) |
| **UI Framework** | Bootstrap 5 + custom CSS overrides for senior-friendly design |
| **Data Sources** | ScamShield.gov.sg, SPF, DBS/OCBC/UOB advisories, structured via NotebookLM |

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/trustbuddy.git
   cd trustbuddy
   ```

2. **Run locally**
   ```bash
   npx serve . -l 3000
   ```
   Open `http://localhost:3000`

3. **Deploy to GitHub Pages**
   - Push to `main` branch
   - Go to Settings → Pages → Source: Deploy from branch → `main` / root
   - Site will be live at `https://YOUR-USERNAME.github.io/trustbuddy/`

---

## Demo

<!-- Add demo links here -->
- **Live Website:** 
- **Video Walkthrough:** 

---

## Screenshots

<!-- Add screenshots here -->

---

## Promotional Materials

<!-- Add links to promotional materials below -->
- **Product Explainer Video:** 
- **Brand Identity (Logo, Colour Palette):** 
- **Marketing Campaign Materials:** 
- **Brochure / Elevator Pitch:** 

---

## Roadmap

- [x] Core scam detection with RAG pipeline
- [x] Multi-language UI (EN, ZH, MS, TA)
- [x] Response translation (MyMemory API)
- [x] Read Aloud (Web Speech API)
- [x] Accessibility-first design (20px font, large buttons, high contrast)
- [x] Google Sheets audit logging with entity extraction
- [x] Automated Daily Scam Trends Report (email)
- [x] Knowledge base ingestion workflow
- [x] Feedback collection workflow with email alerts
- [x] Multi-page website (Home, About, Scam Types, Resources, FAQ, Feedback)
- [x] Educational resources page (ScamShield links, quizzes, games)
- [x] Bootstrap 5 responsive design
- [ ] Voice input for seniors who struggle with typing
- [ ] WhatsApp integration for direct message forwarding
- [ ] Community scam reporting (crowdsourced database updates)
- [ ] Real-time push notifications for trending scam alerts

---

## Team

| Member | Role |
|--------|------|
| **Kyaw Min Thu** | Backend architecture, n8n RAG integration, vector database, prompt engineering, frontend-backend integration |
| **Amos** | Dataset curation, testing, scam data structuring and uploads |
| **Darius** | Frontend development, UI/UX design, Bootstrap implementation |
| **Chan Xin Yi** | Brand identity, logo design, promotional materials, video production |
| **Hsu** | Feedback workflow development, testing |

---

## License

This project was created as part of the C240 Skills Ignition SG AI Challenge 2026. For educational purposes only.
