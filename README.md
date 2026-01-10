# Car license plates app
Built with React, Vite, Express.js, Swiper.js, Axios

The purpose of this app is to get info about a car with a specific license plate number.
Only Dutch license plate numbers allowed.  
Carousel/slider shows random images each time that new license plate number was submitted.  

App is fully responsive

## Project Structure

This project is organized into two independent folders:

```
car-license-plates-app/
├── frontend/          # React + Vite application
│   ├── src/          # React components and logic
│   ├── public/       # Static assets
│   ├── index.html    # Entry HTML
│   └── package.json  # Frontend dependencies
└── backend/          # Express.js mock server
    ├── index.js      # Server entry point
    ├── mockData.js   # 10 mock car datasets
    └── package.json  # Backend dependencies
```

## Features
- **Vite** for fast development and building
- **Express.js mock server** with 10 randomized car datasets
- **Proxy configuration** - Frontend calls `/api/*` which are proxied to Express backend
- **Independent projects** - Frontend and backend can be deployed separately
- Responsive design with modern UI

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd car-license-plates-app
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Running the Application

This application requires two servers to run simultaneously in separate terminals:

**Terminal 1 - Start the Express Mock Server (Port 3001):**
```bash
cd backend
npm start
```

**Terminal 2 - Start the Vite Dev Server (Port 5173):**
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

**Backend (from `/backend` directory):**
- `npm start` - Start Express server
- `npm run dev` - Start Express server (alias)

**Frontend (from `/frontend` directory):**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

- **Frontend**: React app built with Vite (runs on port 5173)
  - Located in `/frontend` directory
  - Independent package with its own dependencies
  
- **Backend**: Express.js mock server (runs on port 3001)
  - Located in `/backend` directory
  - Lightweight with only Express and CORS dependencies
  
- **Proxy**: Vite proxies all `/api/*` requests to Express server

### API Endpoints

- `GET /api/get-plates-info/:licenseNumber` - Returns random car data from 10 mock datasets
- `GET /health` - Health check endpoint for the Express server

### Mock Data

The Express server randomly returns one of 10 predefined car datasets including:
- Volkswagen, BMW, Mercedes-Benz, Toyota, Audi, Tesla, Ford, Renault, Peugeot, Volvo
- Various fuel types: Benzine, Diesel, Elektrisch, Hybride, LPG

# Live Demo
https://maxdsr.github.io/car-license-plates/
