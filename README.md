# 🚀 QuickAI

**Live Demo:** [QuickAI on Vercel](https://quick-ai-ten-eta.vercel.app)

**QuickAI** is a **PERN-based AI-powered content generation platform** that helps users generate creative text and images, review resumes, and perform advanced image editing tasks using AI models.

---

## 📌 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** Neon Serverless PostgreSQL  
- **Cloud & Tools:** Cloudinary, Multer, Clerk Authentication  
- **AI Integrations:** OpenAI (text generation), Clipdrop (image generation & editing)  

---

## ✨ Features

- ✍️ AI-powered article and blog title generation  
- 🖼️ AI image generation using prompts  
- 🧠 Resume review with AI insights  
- 🧹 Image background and object removal  
- 📷 Cloud-based media upload with Cloudinary  
- 🔒 Secure authentication and user management using Clerk  
- ⚡ REST API architecture (backend) and modular React structure (frontend)  

---

## 📂 Project Structure

```
QuickAI/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── BlogTitles.jsx
│   │   │   ├── Community.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── RemoveBackground.jsx
│   │   │   ├── RemoveObject.jsx
│   │   │   ├── ReviewResume.jsx
│   │   │   └── WriteArticle.jsx
│   │   ├── components/
│   │   │   ├── AiTools.jsx
│   │   │   ├── CreationItem.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Plan.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Testimonial.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│
└── server/
    ├── server.js
    ├── controllers/
    │   ├── aiController.js
    │   └── userController.js
    ├── middlewares/
    │   └── auth.js
    ├── configs/
    │   ├── db.js
    │   ├── cloudinary.js
    │   └── multer.js
    ├── routes/
    │   ├── aiRoutes.js
    │   └── userRoutes.js
    └── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/quickai.git
cd quickai
```

### 2. Install Dependencies
**Client:**
```bash
cd client
npm install
```

**Server:**
```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

### **Client (`client/.env`)**
Create a `.env` file in the **client** folder:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

### **Server (`server/.env`)**
Create a `.env` file in the **server** folder:
```
PORT=3000
DATABASE_URL=your_neon_postgresql_connection_url
OPENAI_API_KEY=your_openai_key
CLIPDROP_API_KEY=your_clipdrop_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## ▶️ Running Locally

**Start Backend:**
```bash
cd server
npm start
```

**Start Frontend:**
```bash
cd client
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## ☁️ Deployment

- **Frontend:** Deployed on Vercel  
- **Backend:** Deployed on Vercel (Serverless functions)  

---

## 📌 Routes Overview

### Frontend Routes (React Router)
- `/` → Home  
- `/ai` → Layout (Parent)
  - `/ai` → Dashboard
  - `/ai/write-article`
  - `/ai/blog-titles`
  - `/ai/generate-images`
  - `/ai/remove-background`
  - `/ai/remove-object`
  - `/ai/review-resume`
  - `/ai/community`

### Backend Endpoints
- `GET /api/ai/*` → AI-related operations (text/image generation, resume review)
- `POST /api/user/*` → User authentication and profile actions
