# Incident Management System - Backend

NestJS REST API for managing incidents.

## Features

- ✅ RESTful API with CRUD operations
- ✅ In-memory data storage
- ✅ TypeScript
- ✅ Clean architecture with modules, controllers, and services
- ✅ CORS enabled for Angular frontend
- ✅ Well-commented code

## Project Structure

```
backend/
├── src/
│   ├── incidents/
│   │   ├── dto/
│   │   │   └── incident.dto.ts          # Data Transfer Objects
│   │   ├── incident.interface.ts        # Incident interface & enum
│   │   ├── incidents.controller.ts      # REST API endpoints
│   │   ├── incidents.service.ts         # Business logic
│   │   └── incidents.module.ts          # Module definition
│   ├── app.module.ts                    # Root module
│   └── main.ts                          # Application entry point
├── package.json
├── tsconfig.json
└── nest-cli.json
```

## API Endpoints

| Method | Endpoint           | Description              |
|--------|-------------------|--------------------------|
| GET    | /api/incidents    | Get all incidents        |
| GET    | /api/incidents/:id| Get incident by ID       |
| POST   | /api/incidents    | Create new incident      |
| PUT    | /api/incidents/:id| Update incident          |
| DELETE | /api/incidents/:id| Delete incident          |

## Installation & Running

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Run in development mode:**
   ```bash
   npm run start:dev
   ```

3. **The server will start on:**
   ```
   http://localhost:3000/api
   ```

## Testing the API

You can test the API using tools like:
- Postman
- Thunder Client (VS Code extension)
- cURL commands
- Or through the Angular frontend

### Example cURL commands:

**Get all incidents:**
```bash
curl http://localhost:3000/api/incidents
```

**Create incident:**
```bash
curl -X POST http://localhost:3000/api/incidents \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Incident",
    "description": "Test incident",
    "status": "OPEN"
  }'
```

**Update incident:**
```bash
curl -X PUT http://localhost:3000/api/incidents/1 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "RESOLVED"
  }'
```

**Delete incident:**
```bash
curl -X DELETE http://localhost:3000/api/incidents/1
```

## Incident Status Values

- `OPEN` - Newly created incident
- `IN_PROGRESS` - Being worked on
- `RESOLVED` - Fixed but not closed
- `CLOSED` - Completely closed

## Notes for Students

This backend demonstrates:
1. **Module-based architecture** - Separation of concerns
2. **Dependency Injection** - Services injected into controllers
3. **DTOs** - Data validation and transfer objects
4. **Error Handling** - NotFoundException for invalid IDs
5. **RESTful conventions** - Proper HTTP methods and status codes
6. **CORS configuration** - Allowing frontend communication
