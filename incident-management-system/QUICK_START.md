# 🚀 QUICK START GUIDE

## Super Fast Setup (5 minutes)

### 1️⃣ Start Backend (Terminal 1)

```bash
cd backend
npm install
npm run start:dev
```

Wait until you see:
```
🚀 Backend server is running on: http://localhost:3000/api
```

### 2️⃣ Start Frontend (Terminal 2)

Open a NEW terminal:

```bash
cd frontend
npm install
npm start
```

Wait until you see:
```
✔ Compiled successfully.
```

### 3️⃣ Open Browser

Go to: `http://localhost:4200`

---

## 🎯 That's it!

You should now see the Incident Management System in your browser.

### Test the Application:

1. Click "Add New Incident"
2. Fill in the form:
   - Title: "Test Incident"
   - Description: "This is a test incident for the system"
   - Status: "OPEN"
3. Click "Create Incident"
4. You'll be redirected to the list page
5. Try updating the status
6. Try deleting an incident

---

## 🐛 Having Issues?

### Backend won't start?
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run start:dev
```

### Frontend won't start?
```bash
cd frontend
rm -rf node_modules package-lock.json .angular
npm install
npm start
```

### Port already in use?
Kill the process:
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9
lsof -ti:4200 | xargs kill -9

# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :4200
taskkill /PID [PID_NUMBER] /F
```

---

## 📊 Verify Everything Works

### Test Backend API:

Open a third terminal:
```bash
curl http://localhost:3000/api/incidents
```

You should see JSON data with incidents.

### Test Frontend:

1. Navigate to `http://localhost:4200`
2. You should see the incident list
3. Try creating a new incident
4. Try updating status
5. Try deleting

---

## ✅ Success Criteria

Your project is working if:
- ✅ Backend starts without errors
- ✅ Frontend starts without errors
- ✅ You can see the incident list in browser
- ✅ You can create new incidents
- ✅ You can update incident status
- ✅ You can delete incidents

---

## 🎓 Next Steps

Read the detailed documentation:
- `README.md` - Main project documentation
- `backend/README.md` - Backend details
- `frontend/README.md` - Frontend details

---

**Enjoy your full-stack Angular + NestJS project! 🎉**
