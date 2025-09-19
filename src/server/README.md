# EchoRank Server

Endpoints
- POST /api/contact { name, email, message }
- POST /api/newsletter { email }
- POST /api/consultation { name, email, company?, website?, preferredTime?, notes? }
- POST /api/quote { email, businessSize, billingCycle, services, totalEstimate }
- GET /api/health

Env (.env)
- PORT=4000
- CORS_ORIGINS=http://localhost:5173
- OWNER_EMAIL=echorankinc@gmail.com
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (optional; if omitted emails are logged to console)

Dev
npm install
npm run dev 