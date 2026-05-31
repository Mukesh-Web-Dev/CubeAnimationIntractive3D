# 🧊 Cube Animation — Interactive 3D Recursive Cube Replication

> An interactive 3D experience where cubes recursively replicate and animate outward in a tree-like structure. Click on any cube to trigger a cascading expansion and collapse animation — all rendered in real-time with React Three Fiber.

## 🔗 Live Demo

**[▶ View Live Project](https://Mukesh-Web-Dev.github.io/CubeAnimationIntractive3D)**

---

## 📖 About

This project showcases a **recursive 3D animation system** built with React Three Fiber. A single cube splits into multiple child cubes that animate to their target positions, which in turn spawn more children — creating an organic, branching structure. The entire animation is **interactive**: clicking any cube toggles between the expansion and reversal phases.

### ✨ Key Features

- 🔁 **Recursive Animation** — Cubes spawn children that expand outward in a cascading, tree-like pattern
- 🖱️ **Click Interaction** — Click any cube to toggle between expand and collapse animation phases
- ⚡ **GPU Instancing** — Uses `@react-three/drei` `Instances` for efficient rendering of many cubes
- 🎬 **Multi-Phase Animation** — 6-phase animation state machine (move out → pause → children animate → reverse → collapse → reset)
- 🧠 **Context-Based State** — React Context API manages global animation reversal state across the recursive tree
- 💡 **Dynamic Shadows** — Directional light with expanded shadow camera for realistic ground shadows
- 🌀 **Auto-Rotation** — Orbit controls with continuous rotation for immersive viewing
- 🎲 **Tree Generator** — Utility to procedurally generate random recursive cube configurations with alternating directional offsets

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | React renderer for Three.js |
| [React Three Drei](https://drei.docs.pmnd.rs/) | Instanced rendering, OrbitControls |
| [Vite](https://vite.dev/) | Build tool & dev server |

---

## 📁 Project Structure

```
CubeAnimationIntractive3D/
├── public/                              # Static assets
├── dist/                                # Production build output
├── src/
│   ├── main.jsx                         # React entry point
│   ├── App.jsx                          # Main app — Canvas, Instances wrapper, data mapping
│   ├── App.css                          # App-specific styles
│   ├── index.css                        # Global styles (fullscreen canvas layout)
│   └── replicationShape/
│       ├── RecursiveBox.jsx             # Core component — recursive box with 6-phase animation
│       ├── Room.jsx                     # Scene environment — lights, shadow camera, ground plane
│       ├── AnimationContext.jsx         # React Context provider for global animation state
│       ├── useAnimation.js             # Context creation & custom hook for animation state
│       ├── data.js                     # Pre-defined recursive cube tree data (positions, colors, speeds)
│       └── treeGenerator.jsx           # Utility to procedurally generate random cube tree configs
├── index.html                           # HTML entry point
├── vite.config.js                       # Vite config (base path for GitHub Pages)
├── eslint.config.js                     # ESLint configuration
├── package.json                         # Dependencies & scripts
├── package-lock.json                    # Dependency lock file
└── .gitignore                           # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mukesh-Web-Dev/CubeAnimationIntractive3D.git
   cd CubeAnimationIntractive3D
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to the local URL shown in the terminal (typically `http://localhost:5173/CubeAnimationIntractive3D/`).

5. **Interact!**

   Click on any cube to trigger the cascading expansion/collapse animation.

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

This project is pre-configured for GitHub Pages deployment using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

```bash
npm run deploy
```

This command will:
1. Run `npm run build` automatically (via the `predeploy` script)
2. Push the `dist/` folder to the `gh-pages` branch
3. Make the project live at `https://Mukesh-Web-Dev.github.io/CubeAnimationIntractive3D`

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint |
| `deploy` | `npm run deploy` | Deploy to GitHub Pages |

---

## 📄 License

This project is open source and available for learning and experimentation.
