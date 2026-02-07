🚀 Me-API Playground
A professional full-stack (MERN) assessment project that exposes my profile and projects via a custom REST API and a responsive React frontend.

🔗 Live Links
Frontend (UI): [https://my-full-stack-app-me-api-playground-psi.vercel.app/]

Backend (API): [https://myfullstackapp-me-api-playground-pqwo.onrender.com]

GitHub Repository: [ https://github.com/Aftabkhan78621/MyFullStackApp--me-api-playground-.git]

🏗️ Architecture & Tech Stack
This project follows a Monorepo structure with a clear separation between Backend and Frontend.

Frontend: React.js, Tailwind CSS, Axios.

Backend: Node.js, Express.js (ES Modules), Mongoose.

Database: MongoDB Atlas (Cloud).

Architecture: Model-View-Controller (MVC) pattern.

📡 API Endpoints (For Testing)
You can test the API using curl, Postman, or Thunder Client.

1. Health Check
GET /api/v1/user/health

Purpose: To check if the server is live.

Success Response: {"status": "UP", "message": "Server is healthy"}

2. View Profile
GET /api/v1/user/profile 

Purpose: Fetches all candidate data including skills, projects, and social links.

3. Search Projects by Skill
GET /api/v1/user/projects?skill=React

Purpose: Filters projects where the title or description contains the searched skill keyword.

4. Update/Create Profile
PUT /api/v1/user/updateProfile

Purpose: Updates existing profile or creates a new one if it doesn't exist (Upsert logic).

🛠️ Local Setup Instructions
Clone the repo:

Bash
git clone [ https://github.com/Aftabkhan78621/MyFullStackApp--me-api-playground-.git]
cd me-api-playground
Backend Setup:

Go to backend folder: cd backend

Install dependencies: npm install

Create a .env file and add:

Plaintext
MONGO_URI=your_mongodb_connection_string
PORT=8000
Start the server: npm start

Frontend Setup:

Go to frontend folder: cd ../frontend

Install dependencies: npm install

Update API_BASE in App.jsx to http://localhost:8000/api/v1/user

Start React app: npm run dev

📝 Known Limitations
Auth: Basic authentication is currently not implemented for write operations (PUT).

Single Profile: The system is optimized for a single candidate profile management.

👨‍💻 Candidate Details
Name: Aftab khan

Role: Full-Stack Developer (Intern Candidate)

Education: B.Tech 3rd Year

Resume: [Yahan apne Resume ka Google Drive link dalo]

Final Check Points (For Recruiter):
CORS Configured: Backend is set up to allow requests from the hosted frontend URL.

Seeded Data: The database is pre-filled with real professional data.

Clean Code: Using ES Modules (import/export) for modern JavaScript standards.


