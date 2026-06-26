<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=280&color=0:1b3b2b,50:326f4f,100:5ce19b&text=KimChi%20Chat&fontColor=ffffff&fontSize=65&animation=fadeIn&fontAlignY=40"/>
</p>

<p align="center">
  <h1 align="center">🥬 KimChi Chat</h1>
  <p align="center">
    Real-Time Messaging Platform with JWT Auth, Cloudinary Image Sharing & Welcome Emails
  </p>
  <p align="center">
    Real-Time Websockets • Custom JWT Auth • Welcome Emails via Brevo • Cloudinary Media Integration • Arcjet Rate-Limiting
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/alokspacy/Kimchi-RealTime-Chat?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/alokspacy/Kimchi-RealTime-Chat?style=for-the-badge">
  <img src="https://img.shields.io/github/license/alokspacy/Kimchi-RealTime-Chat?style=for-the-badge">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=flat-square&logo=react">
  <img src="https://img.shields.io/badge/Vite-Build--Tool-blueviolet?style=flat-square&logo=vite">
  <img src="https://img.shields.io/badge/Tailwind--CSS-Styling-38bdf8?style=flat-square&logo=tailwindcss">
  <img src="https://img.shields.io/badge/DaisyUI-Components-5ce19b?style=flat-square&logo=daisyui">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=flat-square&logo=nodedotjs">
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=flat-square&logo=express">
  <img src="https://img.shields.io/badge/MongoDB-Database-47a248?style=flat-square&logo=mongodb">
  <img src="https://img.shields.io/badge/Socket.io-Real--Time-010101?style=flat-square&logo=socketdotio">
  <img src="https://img.shields.io/badge/Arcjet-Security-blue?style=flat-square">
  <img src="https://img.shields.io/badge/Brevo-Emails-00a4bd?style=flat-square">
</p>

---

# 📖 Overview

**KimChi Chat** is a high-fidelity, feature-rich real-time messaging application branded and developed by **Alok Singh**. The platform allows users to sign up securely, discover online/offline contacts, exchange private messages and media attachments in real time, customize their chat space with dynamic wallpapers, and toggle sound cues for notifications.

The system features robust backend protection using **Arcjet**'s rate-limiting security and handles transaction-based user registrations with automated welcome emails sent via **Brevo**.

---

# ✨ Features

| Feature | Description |
|:---|:---|
| ⚡ **Real-Time Messaging** | Instantly send and receive messages powered by a **Socket.io** web socket layer. |
| 🟢 **Online/Offline Presence** | Real-time presence indicators displaying active and inactive states for all contacts. |
| 🔐 **Custom JWT Authentication** | Custom JSON Web Token registration and sign-in verification flow (independent of third-party auth platforms). |
| 📨 **Welcome Emails** | Automatic welcoming transaction email delivery upon signup powered by **Brevo**. |
| 🗂️ **Cloudinary Image Sharing** | Upload and preview image attachments in message bubbles via Cloudinary integrations. |
| 🚦 **Arcjet Security Shield** | Deep rate-limiting and bot detection security built straight into backend Express middlewares. |
| 🔔 **Custom Audio Alerts** | In-app notification sound effects and typing tone cues with quick-toggle settings. |
| 🎨 **Dynamic Wallpapers & Themes** | Changeable chat room backgrounds (Jeju Tea, Cherry Blossom, Misty Forest, Breeze Sky, Orchid Valley) styled using Tailwind CSS & DaisyUI. |

---

# 🏗 Architecture

```
┌──────────────────────────────────────┐
│             Web Frontend             │
│         React / Vite / Tailwind CSS  │
└──────────────────┬───────────────────┘
                   │ HTTP / WebSockets
                   ▼
┌──────────────────────────────────────┐
│           Node.js Backend            │
│        Express Server / Arcjet       │
└──────┬───────────┬──────────────┬────┘
       ▼           ▼              ▼
┌───────────┐ ┌──────────┐ ┌──────────┐
│  MongoDB  │ │Cloudinary│ │  Brevo   │
│  Mongoose │ │  Images  │ │  Emails  │
└───────────┘ └──────────┘ └──────────┘
```

## Directory Structure

```
Kimchi-RealTime-Chat
├── backend             # Node.js + Express.js Backend API
│   ├── src
│   │   ├── controllers # Router handler controllers (auth, message)
│   │   ├── emails      # Brevo welcome email handlers & template layouts
│   │   │   ├── emailHandlers.js
│   │   │   └── emailTemplates.js
│   │   ├── lib         # DB configs, Cloudinary, socket & Arcjet setup
│   │   ├── middleware  # JWT session protection middlewares
│   │   ├── models      # MongoDB Mongoose schemas (User, Message)
│   │   ├── routes      # Express API routers (auth.route, message.route)
│   │   └── server.js   # Main backend Express server entry point
│   └── .env            # Backend configuration files
│   
└── frontend            # React + Vite + Tailwind CSS Frontend
    ├── public          # Audio notifications, static assets, and wallpapers
    └── src
        ├── components  # ActiveTabSwitch, ChatContainer, ChatHeader, KimchiIcon, etc.
        ├── hooks       # Custom hooks (e.g. useOutsideClick)
        ├── lib         # Setup utilities (axios config)
        ├── pages       # Auth screens and primary ChatPage dashboard
        ├── store       # Zustand global client state stores
        ├── App.jsx     # Frontend React router and route protections
        └── main.jsx    # Client entry point mount
```

---

# 🚀 Getting Started

## Environment Variables

### Backend Configuration (`/backend/.env`)
Create a `.env` file in the `/backend` directory:
```env
PORT=3000
MONGO_URI="your_mongodb_atlas_connection_string"
NODE_ENV="development"
JWT_SECRET="your_jwt_secret_signing_key"

# Brevo Email Configuration
BREVO_API_KEY="xkeysib-your_brevo_api_key"
EMAIL_FROM="your_verified_domain_or_email"
EMAIL_FROM_NAME="Kimchi Chat"

CLIENT_URL="http://localhost:5173"

# Cloudinary Storage Configuration
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# Arcjet Protection Configuration
ARCJET_KEY="ajkey_your_arcjet_api_key"
ARCJET_ENV="development"
```

### Frontend Configuration (`/frontend/.env`)
Create a `.env` file in the `/frontend` directory:
```env
VITE_BASE_URL="http://localhost:3000"
```

---

## Installation & Setup

### Clone Repository
```bash
git clone https://github.com/alokspacy/Kimchi-RealTime-Chat.git
cd Kimchi-RealTime-Chat
```

### 1. Set Up the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Express backend server:
   ```bash
   npm run dev
   ```

### 2. Set Up the Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```
4. Access the web client at `http://localhost:5173`.

---

## 👥 Support & Contact
- **Developer/Brand**: Alok Singh
- **GitHub**: [alokspacy](https://github.com/alokspacy)
  
If you found this project useful, please consider giving it a star! ⭐

Built with ❤️ using React, Express, MongoDB, Socket.io, Arcjet, and Brevo
© 2026 KimChi Chat
