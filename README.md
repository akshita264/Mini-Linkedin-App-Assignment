# 🧑‍💼 Mini LinkedIn App

A full-stack community platform where users can register, log in, view and edit profiles, and interact via posts — inspired by LinkedIn.

---

## 📦 Tech Stack

### ✅ Frontend
- React + Vite
- Tailwind CSS
- Axios
- React Router
- Toast notifications

### ✅ Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mini-linkedin-app.git
cd mini-linkedin-app
```
2. Backend Setup
```bash
cd backend
npm install
```
3. Create a .env file inside /backend:
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

4. Start backend server:
```bash
npm start
```
5. Frontend Setup
```bash
cd frontend
npm install
```
6. Create a .env file inside /frontend:
VITE_BASE_API_URL=https://your-backend-url.onrender.com/api

7. Start frontend:

```bash
npm run dev
```

🧪 Demo Users (Optional)
You can register new users or use the following test credentials:
Email: test@example.com
Password: 123456


💡 Features
✅ User Registration and Login
✅ JWT Authentication with token storage
✅ View own and other users’ profiles
✅ Edit profile (name + bio)
✅ Create and view posts
✅ Search users
✅ Responsive UI
✅ Conditional Navbar (Login/Register hidden when logged in)
✅ Deployed on Render (Backend) & Netlify (Frontend)


🌐 Deployment Links
🔗 Frontend: [[social-prop.netlify.app](https://social-prop.netlify.app/)] home is blank due to there are no public feeds

🔗 Backend API: [https://mini-linkedin-app-assignment.onrender.com]


📌 Folder Structure
mini-linkedin-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │── utils/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
└── README.md


🛠 Author
Akshita

If this project helped you, feel free to ⭐ the repo!