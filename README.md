# Live Demo
https://car-license-plates.maxim-dicusari.com

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
│   ├── vite.config.js # Vite configuration with proxy
│   └── package.json  # Frontend dependencies
└── backend/          # Express.js mock server (Docker only)
    ├── index.js      # Server entry point
    ├── mockData.js   # 10 mock car datasets
    ├── Dockerfile    # Docker image configuration
    ├── docker-compose.yml # Container orchestration
    ├── .dockerignore # Docker build exclusions
    ├── .env          # Environment variables (create manually)
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
- **Docker and Docker Compose** (required for backend)
- **Node.js** (v14 or higher) - for frontend development
- **npm** - for frontend dependency management

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd car-license-plates-app
```

2. **Create `.env` file in backend directory (MANDATORY)**
```bash
cd backend
```

Create a `.env` file with the following variables:
```env
PORT=<your_backend_port>
HOST_PORT=<your_host_port>
```

**Important Notes:**
- There are no default values - you must set your own port numbers
- `PORT` is the port inside the Docker container
- `HOST_PORT` is the port exposed on your host machine
- The `HOST_PORT` value must match the proxy target port in `frontend/vite.config.js` (currently set to 3001)
- Example: `PORT=3001` and `HOST_PORT=3001`

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

**Note:** Backend dependencies are installed automatically during Docker build - no manual npm install needed for backend.

### Running the Application

This application requires two services to run simultaneously in separate terminals:

**Terminal 1 - Start Backend via Docker:**
```bash
cd backend
docker-compose up --build
```

The backend will start in a Docker container on the port specified in your `.env` file.
- Use `--build` flag on first run or after code changes
- Use `docker-compose up` for subsequent runs (faster startup)
- Backend API will be available at `http://localhost:<HOST_PORT>`

**Terminal 2 - Start Frontend Dev Server:**
```bash
cd frontend
npm run dev
```

The frontend Vite dev server will start on port 5173.
- Application will be available at `http://localhost:5173`
- Frontend automatically proxies `/api/*` requests to the backend

**To stop the services:**
- Frontend: Press `Ctrl+C` in Terminal 2
- Backend: Press `Ctrl+C` in Terminal 1, or run `docker-compose down` to stop and remove containers

### Available Scripts

**Backend (from `/backend` directory) - Docker Only:**
- `docker-compose up` - Start backend container
- `docker-compose up --build` - Rebuild image and start container
- `docker-compose down` - Stop and remove container
- `docker-compose logs -f` - View container logs in real-time
- `docker-compose ps` - Check container status

**Frontend (from `/frontend` directory):**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

- **Frontend**: React app built with Vite (runs on port 5173)
  - Located in `/frontend` directory
  - Independent package with its own dependencies
  - Runs directly via npm for development
  - Proxies API requests to backend
  
- **Backend**: Dockerized Express.js mock server
  - Located in `/backend` directory
  - **Runs only via Docker** - no direct npm start
  - Port configured via `.env` file (PORT and HOST_PORT variables)
  - Lightweight with only Express and CORS dependencies
  - **Docker Features:**
    - Node 20 Alpine base image for minimal footprint
    - Non-root user execution for security
    - Health check endpoint monitoring
    - Automatic container restart (unless-stopped policy)
    - Production-only dependencies via `npm ci`
  
- **Communication**: Vite dev server proxies all `/api/*` requests to the Dockerized Express backend
  - Frontend makes requests to `/api/*`
  - Vite proxy forwards to `http://localhost:<HOST_PORT>`
  - Ensure frontend proxy port matches backend `HOST_PORT` in `.env`

### API Endpoints

- `GET /api/get-plates-info/:licenseNumber` - Returns random car data from 10 mock datasets
- `GET /health` - Health check endpoint for the Express server

### Mock Data

The Express server randomly returns one of 10 predefined car datasets including:
- Volkswagen, BMW, Mercedes-Benz, Toyota, Audi, Tesla, Ford, Renault, Peugeot, Volvo
- Various fuel types: Benzine, Diesel, Elektrisch, Hybride, LPG

## Important Notes

### Docker Requirements
- **Backend must be run via Docker** - direct `npm start` is not supported
- **`.env` file is mandatory** - application will not start without it
- Ensure Docker Desktop is running before starting the backend
- First run may take longer as Docker builds the image

### Port Configuration
- Backend ports are configured in `backend/.env` file
- `PORT` = internal container port
- `HOST_PORT` = exposed port on your machine
- Frontend proxy in `vite.config.js` must match `HOST_PORT` value
- Default recommendation: use `3001` for both `PORT` and `HOST_PORT`

### Troubleshooting
- If backend fails to start, verify `.env` file exists and contains PORT and HOST_PORT
- If API calls fail, check that frontend proxy port matches backend HOST_PORT
- Use `docker-compose logs -f` to view backend logs
- Use `docker-compose down` to clean up containers before rebuilding
