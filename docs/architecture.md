System Architecture - AI-Powered Email Communication Assistant

Overview
- Fetch support emails
- Filter by keywords (Support, Request, Help, Query)
- Detect sentiment & urgency
- Extract key info (phone, alt email, product)
- Generate AI draft replies
- Show everything on a dashboard

High-Level Flow
Email Provider → Backend (API & NLP) → DB → Frontend Dashboard

Components
- Backend: Python (Flask/FastAPI), NLP (BERT/DistilBERT/T5/GPT)
- DB: SQLite/MongoDB (emails, metadata, sentiment, priority, drafts)
- Frontend: React/Next.js (tables, charts, edit/send drafts)

Processing Steps
1) Retrieve emails  2) Filter  3) Sentiment & Urgency  4) Store  
5) RAG + Prompt to draft reply  6) Display & allow edits
