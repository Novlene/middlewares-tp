# 🎓 Incident Management System
## Full-Stack Angular + NestJS Project

A complete full-stack application demonstrating modern web development with Angular (frontend) and NestJS (backend).

---

## 📋 Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation Guide](#installation-guide)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Learning Outcomes](#learning-outcomes)

---

## 🎯 Overview

This project is a **university course project** designed to demonstrate understanding of:
- Modern full-stack web development
- RESTful API design and implementation
- Frontend-backend integration
- Clean code architecture
- Best practices in Angular and NestJS

### What is this application?

An **Incident Management System** where users can:
- View all incidents in a responsive grid
- Create new incidents with validation
- Update incident status
- Delete incidents

---

## 🛠️ Technology Stack

### Backend (NestJS)
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Express** - HTTP server (via NestJS)
- **In-memory storage** - No database required

### Frontend (Angular)
- **Angular 17** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **Standalone Components** - Latest Angular architecture
- **Reactive Forms** - Form handling with validation
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing

---

## 📁 Project Structure

```
incident-management-system/
│
├── backend/                          # NestJS Backend
│   ├── src/
│   │   ├── incidents/
│   │   │   ├── dto/
│   │   │   │   └── incident.dto.ts          # Data Transfer Objects
│   │   │   ├── incident.interface.ts        # Incident model
│   │   │   ├── incidents.controller.ts      # REST endpoints
│   │   │   ├── incidents.service.ts         # Business logic
│   │   │   └── incidents.module.ts          # Module definition
│   │   ├── app.module.ts                    # Root module
│   │   └── main.ts                          # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   └── README.md
│
└── frontend/                         # Angular Frontend
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── incident-list/           # List view component
    │   │   │   └── add-incident/            # Create form component
    │   │   ├── models/
    │   │   │   └── incident.model.ts        # TypeScript interfaces
    │   │   ├── services/
    │   │   │   └── incident.service.ts      # API service
    │   │   ├── app.component.*              # Root component
    │   │   ├── app.config.ts                # App configuration
    │   │   └── app.routes.ts                # Route definitions
    │   ├── main.ts                          # Bootstrap
    │   ├── index.html
    │   └── styles.css                       # Global styles
    ├── package.json
    ├── angular.json
    ├── tsconfig.json
    └── README.md
```

---

## ✨ Features

### Backend Features
- ✅ RESTful API with full CRUD operations
- ✅ Module-based architecture
- ✅ Service-Controller pattern
- ✅ Type-safe with TypeScript
- ✅ CORS enabled for frontend
- ✅ Error handling with proper HTTP status codes
- ✅ In-memory data storage
- ✅ Well-commented code

### Frontend Features
- ✅ Standalone Angular components
- ✅ Reactive forms with validation
- ✅ Client-side routing
- ✅ HTTP service for API calls
- ✅ Responsive card-based design
- ✅ Real-time status updates
- ✅ Delete with confirmation
- ✅ Error handling and loading states
- ✅ Color-coded status badges

---

## 🚀 Installation Guide

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Code editor** (VS Code recommended)

### Verify Installation

```bash
node --version
npm --version
```

---

## 🏃 Running the Application

You need to run **both** the backend and frontend servers.

### Step 1: Start the Backend Server

```bash
# Navigate to backend directory
cd backend

# Install dependencies (first time only)
npm install

# Start the server
npm run start:dev
```

**Expected output:**
```
🚀 Backend server is running on: http://localhost:3000/api
📊 Incidents endpoint: http://localhost:3000/api/incidents
```

✅ Backend is now running on `http://localhost:3000`

---

### Step 2: Start the Frontend Server

Open a **new terminal window** (keep backend running):

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (first time only)
npm install

# Start the development server
npm start
```

**Expected output:**
```
** Angular Live Development Server is listening on localhost:4200 **
✔ Compiled successfully.
```

✅ Frontend is now running on `http://localhost:4200`

---

### Step 3: Open the Application

Open your browser and navigate to:
```
http://localhost:4200
```

You should see the Incident Management System interface! 🎉

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

| Method | Endpoint              | Description           | Request Body |
|--------|----------------------|-----------------------|--------------|
| GET    | `/incidents`         | Get all incidents     | -            |
| GET    | `/incidents/:id`     | Get incident by ID    | -            |
| POST   | `/incidents`         | Create new incident   | Incident DTO |
| PUT    | `/incidents/:id`     | Update incident       | Incident DTO |
| DELETE | `/incidents/:id`     | Delete incident       | -            |

### Example Request Body (POST/PUT)

```json
{
  "title": "Server Down",
  "description": "Main application server is not responding",
  "status": "OPEN"
}
```

### Incident Status Values
- `OPEN` - Newly created
- `IN_PROGRESS` - Being worked on
- `RESOLVED` - Fixed but not closed
- `CLOSED` - Completely closed

### Testing the API

#### Using cURL:

**Get all incidents:**
```bash
curl http://localhost:3000/api/incidents
```

**Create an incident:**
```bash
curl -X POST http://localhost:3000/api/incidents \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Bug",
    "description": "Critical bug in production",
    "status": "OPEN"
  }'
```

**Update an incident:**
```bash
curl -X PUT http://localhost:3000/api/incidents/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "RESOLVED"}'
```

**Delete an incident:**
```bash
curl -X DELETE http://localhost:3000/api/incidents/1
```

#### Using Browser Tools:
- **Postman** - API testing tool
- **Thunder Client** - VS Code extension
- **Browser DevTools** - Network tab

---

## 🎓 Learning Outcomes

### Backend (NestJS)

1. **Module-based Architecture**
   - Understanding how to organize code into modules
   - Separation of concerns

2. **Dependency Injection**
   - How services are injected into controllers
   - Benefits of DI pattern

3. **REST API Design**
   - Proper HTTP methods (GET, POST, PUT, DELETE)
   - Status codes and error handling

4. **DTOs (Data Transfer Objects)**
   - Input validation
   - Type safety

5. **Service Layer**
   - Business logic separation
   - Reusable code

### Frontend (Angular)

1. **Standalone Components**
   - Modern Angular architecture
   - No NgModule needed

2. **Component-based Architecture**
   - Reusable, isolated components
   - Smart vs Presentational components

3. **Reactive Forms**
   - Form creation and validation
   - User experience

4. **Services and Dependency Injection**
   - Centralized API communication
   - Code reusability

5. **RxJS and Observables**
   - Asynchronous programming
   - Observable patterns

6. **Routing**
   - Single-page application navigation
   - Route configuration

7. **HTTP Communication**
   - REST API consumption
   - Error handling

### Full-Stack Integration

1. **CORS Configuration**
   - Cross-origin requests
   - Frontend-backend communication

2. **API Design**
   - Consistent interfaces
   - Type sharing between frontend and backend

3. **Error Handling**
   - User-friendly error messages
   - Graceful degradation

---

## 🐛 Troubleshooting

### Backend Issues

**Port 3000 already in use:**
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9  # Mac/Linux
netstat -ano | findstr :3000   # Windows
```

**Dependencies not installing:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Frontend Issues

**Port 4200 already in use:**
```bash
ng serve --port 4201
```

**Compilation errors:**
```bash
# Clear Angular cache
rm -rf .angular
npm start
```

**API calls failing:**
- Ensure backend is running
- Check CORS configuration
- Verify API URL in `incident.service.ts`

### Common Issues

**"Cannot connect to backend"**
- Make sure backend is running on port 3000
- Check firewall settings
- Verify CORS is enabled

**"Blank page in browser"**
- Check browser console for errors
- Ensure all dependencies are installed
- Try clearing browser cache

---

## 📚 Additional Resources

### NestJS
- [Official Documentation](https://docs.nestjs.com/)
- [NestJS Courses](https://courses.nestjs.com/)

### Angular
- [Official Documentation](https://angular.io/docs)
- [Angular University](https://angular-university.io/)

### TypeScript
- [Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

## 👨‍💻 Development Commands

### Backend
```bash
npm run start:dev    # Development mode with watch
npm run build        # Build for production
npm run start:prod   # Run production build
```

### Frontend
```bash
npm start            # Development server
ng build             # Build for production
ng test              # Run tests
ng generate component my-component --standalone  # Generate new component
```

---

## 🎯 Project Requirements Met

✅ **NestJS Backend**
- REST API with CRUD operations
- Module-based architecture
- Service-Controller pattern
- TypeScript
- In-memory storage
- Well-commented code

✅ **Angular Frontend**
- Standalone components
- Reactive forms with validation
- Angular routing
- HttpClient for API calls
- Service-based architecture
- Clean UI

✅ **Architecture**
- Clear separation of concerns
- Clean folder structure
- Best practices followed
- Educational and readable code

---

## 📝 Notes for Students

### Key Concepts to Understand

1. **Separation of Concerns**
   - Frontend handles presentation
   - Backend handles business logic
   - Clear API contract between them

2. **TypeScript Benefits**
   - Type safety prevents errors
   - Better IDE support
   - Self-documenting code

3. **Reactive Programming**
   - Observables for async operations
   - Declarative approach
   - Better state management

4. **Component Architecture**
   - Single responsibility principle
   - Reusable components
   - Clear data flow

### Extending This Project

Ideas for enhancement:
- Add authentication
- Implement a real database
- Add filtering and sorting
- Implement pagination
- Add user assignments
- Create dashboard with charts
- Add email notifications
- Implement real-time updates with WebSockets

---

## 📄 License

This project is created for educational purposes.

---

## 🤝 Contributing

This is a university project template. Feel free to:
- Report issues
- Suggest improvements
- Share your enhanced versions

---

## ✅ Checklist for Submission

Before submitting your project:

- [ ] Backend runs without errors
- [ ] Frontend runs without errors
- [ ] Can create new incidents
- [ ] Can view all incidents
- [ ] Can update incident status
- [ ] Can delete incidents
- [ ] Code is well-commented
- [ ] README files are complete
- [ ] No console errors
- [ ] Responsive design works

---

**Good luck with your project! 🚀**

For questions or issues, refer to the individual README files in `backend/` and `frontend/` directories.
