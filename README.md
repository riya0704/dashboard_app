# 📊 Dashboard App

Assignment for Frontend Trainee – Dynamic Dashboard with Categories and Widgets

---

## 🚀 Features
1. **Dynamic Categories & Widgets**
   - Dashboard structure is generated from a JSON (`src/data/dashboardData.js`).
   - Each category contains multiple widgets.

2. **Add / Remove Widgets**
   - Users can add new widgets dynamically to any category.
   - Widgets can be removed via the ❌ icon or through the category modal.

3. **Add / Remove Categories**
   - Categories can be created dynamically using the `+ Add Category` option.
   - Widgets can be reassigned or unchecked from categories.

4. **Search**
   - A search bar is available to search across all widgets.

5. **Random Content**
   - Widgets display placeholder/random text for assignment purposes.

---

## 🛠️ Tech Stack
- **React 18** (with Vite)
- **Redux Toolkit** (state management)
- **Tailwind CSS** (styling)
- **Chakra UI / Custom Components** (UI modals, buttons)

---

## 📂 Project Structure
```
dashboard_app/
│── build/                # Production build
│── public/
│   └── index.html
│── src/
│   ├── components/
│   │   ├── AddCategoryModal.jsx
│   │   ├── AddWidgetModal.jsx
│   │   ├── Category.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Header.jsx
│   │   ├── Search.jsx
│   │   ├── SearchAll.jsx
│   │   ├── Widget.jsx
│   ├── context/
│   │   └── DashboardContext.jsx
│   ├── data/
│   │   └── dashboardData.js
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── main.jsx
│── package.json
│── tailwind.config.js
│── vite.config.js
│── postcss.config.js
│── README.md
│── .gitignore
```

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd dashboard_app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
- App will be available at: `http://localhost:5173/`

### 4. Build for production
```bash
npm run build
```

---

## 📝 Usage Instructions
1. The dashboard loads with default categories & widgets from `src/data/dashboardData.js`.
2. Use the **➕ Add Widget** button to add widgets:
   - Provide a name and text.
   - Select the category to insert it.
3. Remove widgets with the ❌ icon.
4. Add new categories from the **Add Category** modal.
5. Search all widgets using the search bar in the header.

---

## 📖 Notes
- State is managed **locally** using Redux Toolkit.
- No backend is required; everything is stored in-memory.
- Widgets are rendered dynamically from JSON and updated in real-time.

---

👨‍💻 **Assignment Complete** – Dynamic Dashboard with full add/remove/search functionality.
# dashboard_app
