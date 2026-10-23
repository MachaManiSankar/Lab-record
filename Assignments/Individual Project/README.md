# Student Task Manager

A front-end task manager for students. It is built with plain HTML, CSS and JavaScript and saves all tasks in the browser, so no server or database is needed.

## Author

| Name | Role |
|------|------|
| Mani Sankar | Design, frontend, testing |

## Tech Stack

- **Markup:** HTML5
- **Styling:** CSS3 (flexbox, grid, light/dark mode)
- **Logic:** Vanilla JavaScript (ES6)
- **Storage:** Browser `localStorage`

## Features

- Add tasks with a title, subject, due date and priority (Low / Medium / High)
- Mark tasks as done or pending with a checkbox
- Delete tasks
- Filter tasks: All, Pending or Done
- Live counter of pending tasks
- Colour-coded priority stripe on every task
- Tasks stay saved after refreshing the page
- Responsive layout that works on phones, with automatic dark mode

## Getting Started

No installation is needed.

### 1. Download

```
git clone <your-repo-url>
cd Student-Task-Manager
```

### 2. Run

Open `index.html` in any browser. Or use a local server:

```
npx serve .          # http://localhost:3000
```

## Data Reference

Tasks are stored in `localStorage` under the key `student-tasks`.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique id (timestamp) |
| `title` | string | Task name |
| `subject` | string | Subject or course (optional) |
| `due` | string | Due date, `YYYY-MM-DD` (optional) |
| `priority` | string | `Low`, `Medium` or `High` |
| `done` | boolean | Completion status |

Task example: `{ "title": "Maths assignment", "subject": "Maths", "due": "2026-10-26", "priority": "High", "done": false }`

## Project Structure

```
Student-Task-Manager/
├── README.md
├── index.html        # Page layout (HTML)
├── style.css         # Styling (CSS)
├── script.js         # App logic (JavaScript)
└── screenshots/      # App screenshots
```

## Screenshots

| Empty state | Tasks added |
|---|---|
| ![Empty state](screenshots/1-empty-state.png) | ![Tasks added](screenshots/2-tasks-added.png) |

| Tasks completed | Pending filter | Done filter |
|---|---|---|
| ![Completed](screenshots/3-tasks-completed.png) | ![Pending](screenshots/4-pending-filter.png) | ![Done](screenshots/5-done-filter.png) |
