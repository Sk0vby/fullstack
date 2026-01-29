# fullstack

Fullstack Course Exercises (2.1 - 2.5)

This small project implements exercises 2.1–2.5 (Course information) from the Full Stack course.

What was done
- The `Course` component is declared in `src/components/Course.jsx` and exports the component.
- `App.jsx` contains an array of `courses` and renders one `Course` component per course.
- `Total` uses `reduce` to compute the sum of exercises.

Run locally (Windows PowerShell):

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

Open the printed local URL in your browser (usually http://localhost:5173).

Notes
- This uses Vite + React. If you prefer Create React App, you can adapt the code into that structure.
- The `Course` module includes `Header`, `Content`, `Part` and `Total` as requested.