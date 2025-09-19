# EchoRank

Local development
- Frontend: npm install && npm run dev
- Backend: cd server && npm install && npm run dev

API base: http://localhost:4000/api (CORS allows http://localhost:5173)

Env (server)
- OWNER_EMAIL: where contact/quote notifications go
- SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS: optional to send real emails; otherwise logs

Deploy later: we can use free tiers on Render/Fly/Vercel (server) and Vercel/Netlify (frontend).
