
# 🚀 RealTime-Dashboard  

A **real-time dashboard** built with **React.js (Frontend)** and **Node.js + Express.js + Socket.io (Backend)** to display **live weather, cryptocurrency, and news updates**.

---

## 📌 **Tech Stack**
### **Frontend**
- **React.js** - Component-based UI library  
- **Axios** - HTTP requests  
- **useState & useEffect** - State management  
- **Socket.io-client** - Real-time data updates  

### **Backend**
- **Node.js** - JavaScript runtime  
- **Express.js** - Web framework  
- **Socket.io** - Real-time WebSockets  
- **Axios** - Fetch external data  
- **Dotenv** - Environment variable management  
- **Cors** - Handle cross-origin requests  

---

## 📂 **Folder Structure**
```
RealTime-Dashboard/
│── backend/                  # Backend server
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions
│   ├── .env                  # Environment variables
│   ├── server.js             # Main server file
│   ├── package.json          # Backend dependencies
│   ├── README.md             # Backend documentation
│
│── frontend/                 # Frontend React app
│   ├── src/                  # Source files
│   ├── components/           # UI Components
│   ├── pages/                # Pages
│   ├── App.js                # Main app entry
│   ├── package.json          # Frontend dependencies
│   ├── README.md             # Frontend documentation
│
│── .gitignore                # Ignore unnecessary files
│── README.md                 # Project documentation
```

---

## 🔧 **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/saurabhyadav01/RealTime-Dashboard.git
cd RealTime-Dashboard
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```
#### **Create `.env` File in `backend/`**
```
PORT=5000
WEATHER_API_KEY=your_weather_api_key
COINMARKETCAP_API_KEY=your_crypto_api_key
NEWS_API_KEY=your_news_api_key
```
#### **Start Backend**
```sh
npm start
```
The backend runs on **`http://localhost:5000`**.

---

### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
```
#### **Start Frontend**
```sh
npm start
```
The frontend runs on **`http://localhost:3000`**.

---

## 🌍 **Backend API Endpoints**
| Endpoint                   | Method | Description                  |
|----------------------------|--------|------------------------------|
| `/api/dashboard`           | GET    | Fetches real-time data       |

### 📡 **WebSocket (Real-Time Updates)**
- The backend **emits updates every 10 seconds**.
- The frontend **listens for live data**:
  ```js
  import { io } from "socket.io-client";

  const socket = io("http://localhost:5000");

  socket.on("dashboardData", (data) => {
    console.log("Updated Data:", data);
  });
  ```

---

## 🖥️ **Frontend Features**
- **Real-time updates** via WebSockets  
- **Weather Data** (Fetched from OpenWeather API)  
- **Cryptocurrency Prices** (Fetched from CoinMarketCap API)  
- **Top News Headlines** (Fetched from NewsAPI)  

---

## 📜 **.gitignore (Frontend & Backend)**
Add this inside `.gitignore` for both **frontend** and **backend**:
```
node_modules/
.env
package-lock.json
build/
```

---
