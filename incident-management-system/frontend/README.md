# Incident Management System - Frontend

Angular application for managing incidents with a clean, responsive UI.

## Features

- ✅ Angular standalone components
- ✅ Reactive forms with validation
- ✅ Angular routing
- ✅ HttpClient for API communication
- ✅ Service-based architecture
- ✅ Responsive design
- ✅ TypeScript with strong typing

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── incident-list/
│   │   │   │   ├── incident-list.component.ts
│   │   │   │   ├── incident-list.component.html
│   │   │   │   └── incident-list.component.css
│   │   │   └── add-incident/
│   │   │       ├── add-incident.component.ts
│   │   │       ├── add-incident.component.html
│   │   │       └── add-incident.component.css
│   │   ├── models/
│   │   │   └── incident.model.ts
│   │   ├── services/
│   │   │   └── incident.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── package.json
├── angular.json
├── tsconfig.json
└── tsconfig.app.json
```

## Pages

### 1. Incident List (`/`)
- Displays all incidents in a grid layout
- Shows incident title, description, and status
- Color-coded status badges
- Update incident status with dropdown
- Delete incidents with confirmation
- Responsive card-based design

### 2. Add Incident (`/add`)
- Reactive form for creating new incidents
- Form validation:
  - Title: Required, minimum 3 characters
  - Description: Required, minimum 10 characters
  - Status: Required, dropdown selection
- Real-time validation feedback
- Reset form functionality

## Installation & Running

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Backend server must be running

### Steps

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

3. **Open your browser:**
   ```
   http://localhost:4200
   ```

## Architecture Highlights

### Components
- **Standalone components** - Modern Angular approach without modules
- **Smart/Container components** - Handle business logic
- **Reactive approach** - Using RxJS observables

### Services
- **IncidentService** - Centralized API communication
- **Dependency Injection** - Services injected into components
- **Observable patterns** - For asynchronous operations

### Routing
- **Declarative routing** - Clean route configuration
- **Navigation** - Using routerLink directive
- **Route guards** - Can be added for protection

### Forms
- **Reactive Forms** - FormBuilder and FormGroup
- **Validators** - Built-in and custom validation
- **Error handling** - User-friendly error messages

## Key Angular Concepts Demonstrated

1. **Standalone Components** - No need for NgModule
2. **Dependency Injection** - Service injection in constructors
3. **HttpClient** - RESTful API communication
4. **RxJS Observables** - Async data handling
5. **Reactive Forms** - Form creation and validation
6. **Angular Router** - Navigation between pages
7. **Two-way data binding** - Form controls
8. **Structural directives** - *ngFor, *ngIf
9. **Event binding** - (click), (submit)
10. **Property binding** - [class], [value]

## Development Tips

### Adding a new component:
```bash
ng generate component components/my-component --standalone
```

### Adding a new service:
```bash
ng generate service services/my-service
```

### Build for production:
```bash
ng build --configuration production
```

## API Configuration

The API URL is configured in `incident.service.ts`:
```typescript
private apiUrl = 'http://localhost:3000/api/incidents';
```

If your backend runs on a different port, update this URL.

## Notes for Students

This frontend demonstrates:
1. **Component-based architecture** - Reusable, isolated components
2. **Service layer** - Separation of concerns
3. **Reactive programming** - Observable patterns
4. **Form handling** - Validation and user feedback
5. **Routing** - Single-page application navigation
6. **HTTP communication** - REST API integration
7. **TypeScript** - Strong typing and interfaces
8. **Responsive design** - Mobile-friendly UI
