# 🌍 7-11 Fullstack Sensor API

This project is a backend REST API for sensor data collection, built using **Node.js**, **Express**, and **Swagger**. It serves as a foundational platform for working with various environmental sensors like air quality, GPS, pulse, sound, and temperature.

---

## 📁 Project Structure

```
7-11-fullstack/
├── api/
│   └── routes/
│       └── airQualitySensor.js    # Air quality sensor route
├── controllers/
│   └── middleware/
│       └── logger.js              # Custom logging middleware
├── docs/
│   └── swagger.js                 # Swagger setup
├── models/
│   └── db.json                    # (optional) Sample data store
├── app.js                         # Main Express app config
├── server.js                      # Server + Swagger bootstrapping
├── package.json                   # Project metadata and dependencies
└── README.md                      # Project documentation
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes with Node.js)

### 💾 Installation

```bash
git clone https://github.com/7-eleven-development/7-11-fullstack.git
cd 7-11-fullstack
npm install
```

---

## ▶️ Running the Server

```bash
node server.js
```

Visit: [http://localhost:8000](http://localhost:8000)  
Swagger Docs: [http://localhost:8000/api-docs](http://localhost:8000/api-docs)

---

## 📡 Available Endpoints

| Sensor      | Endpoint          | Methods       |
| ----------- | ----------------- | ------------- |
| Air Quality | `/api/airQuality` | `GET`, `POST` |
| GPS         | `/api/gps`        | _Pending_     |
| Pulse       | `/api/pulse`      | _Pending_     |
| Sound       | `/api/sound`      | _Pending_     |
| Temperature | `/api/temp`       | _Pending_     |

Each endpoint supports `GET` for retrieving sensor values and `POST` for submitting new ones (air quality route implemented as example).

---

## 📘 Example: Air Quality API

### ➕ POST `/api/airQuality`

```json
{
  "smoke": 5.2,
  "propane": 3.1,
  "co2": 2.7
}
```

**Response:**

```json
{
  "message": "values recieved",
  "data": {
    "id": "2025-04-25T12:34:56.789Z",
    "smoke": 5.2,
    "propane": 3.1,
    "co2": 2.7
  }
}
```

---

## 📄 API Documentation

Swagger UI is available at:

```
http://localhost:8000/api-docs
```

It includes visual exploration and interaction with the available API routes.

---

## 🧰 Scripts

| Command     | Description          |
| ----------- | -------------------- |
| `npm start` | Start the API server |

---

## 🛠️ Tech Stack

- Node.js
- Express
- Swagger (OpenAPI)
- ES Modules
- JSON-based mock data
