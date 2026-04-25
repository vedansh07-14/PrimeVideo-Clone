# 🎬 Prime Video Clone

A responsive **Amazon Prime Video** clone built with **React** and **Vite**, featuring real-time movie data from the TMDB API, genre-based filtering, pagination, and a sign-in/sign-up authentication flow.

---

## ✨ Features

- **Hero Banner** — Dynamic hero section showcasing the top trending movie with backdrop image, rating, release year, and call-to-action buttons.
- **Genre Filtering** — Filter movies by genre (Action, Sci-Fi, Romance, Adventure, Drama) with a single click.
- **Movie Grid** — Responsive grid layout displaying movie posters fetched from TMDB.
- **Movie Details Modal** — Click any movie card to view its full details (overview, rating, release date) in a cinematic modal overlay.
- **Pagination** — Navigate through multiple pages of popular movies.
- **Authentication** — Sign-in / Sign-up page with localStorage-based user management.
- **Loading Skeletons** — Smooth skeleton placeholders while data is being fetched.
- **Fully Responsive** — Optimized layout for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI library |
| [Vite 7](https://vite.dev) | Build tool & dev server |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Lucide React](https://lucide.dev) | Icon library |
| [TMDB API](https://www.themoviedb.org/documentation/api) | Movie data source |

---

## 📁 Project Structure

```
PrimeVideo-Clone/
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite + React + Tailwind config
└── src/
    ├── main.jsx               # React DOM root
    ├── App.jsx                # Router & route definitions
    ├── index.css              # Global styles
    ├── Components/
    │   ├── Nevbar.jsx         # Top navigation bar
    │   ├── Bgforherd.jsx      # Hero banner with featured movie
    │   ├── Header.jsx         # Header wrapper component
    │   ├── Filtermovie.jsx    # Genre filter + movie grid + modal
    │   ├── MovieBox.jsx       # Individual movie card
    │   ├── Footer.jsx         # Footer section
    │   └── Theme.jsx          # Theme toggle utility
    └── Pages/
        ├── Home.jsx           # Home page
        └── Signpage.jsx       # Sign-in / Sign-up page
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/vedansh07-14/PrimeVideo-Clone.git

# Navigate into the project
cd PrimeVideo-Clone

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔑 API Reference

This project uses the [TMDB (The Movie Database) API](https://www.themoviedb.org/) to fetch popular movies.

- **Endpoint:** `https://api.themoviedb.org/3/movie/popular`
- **Authentication:** Bearer token (included in the project)
- **Image CDN:** `https://image.tmdb.org/t/p/w500/<poster_path>`

---

## 📄 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is for educational purposes only. All movie data is provided by [TMDB](https://www.themoviedb.org/).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/vedansh07-14">vedansh07-14</a>
</p>
