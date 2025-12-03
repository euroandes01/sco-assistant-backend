SCO Assistant Backend (local)

1) Install
   npm install

2) Create .env (copy from env.example) and set PORT, JWT_SECRET (optional)

3) Start
   npm start

This server listens on port 3000 by default. Endpoints:
  POST /api/sco/analyze  { scoText }
  POST /api/user/login   { email }
  POST /api/premium/verify { licenseKey }
