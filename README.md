# Diagrams

**Diagrams** is an interactive, modern visualization platform built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [React Flow](https://reactflow.dev), and [Framer Motion](https://www.framer.com/motion/). This project was bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and is designed to showcase advanced animated diagrams that detail the architecture and workflows of the Lawyer on Demand platform.

---

## Features

- **Interactive Diagrams:**  
  Explore animated, interactive diagrams that illustrate the entire system architecture, CI/CD pipelines, user workflows, and more.

- **Dark Mode Toggle:**  
  Seamlessly switch between light and dark themes for an optimal viewing experience.

- **Modern UI/UX:**  
  Designed with Tailwind CSS for a sleek, responsive, and visually impressive interface.

- **Reusable Components:**  
  Built with React Flow and Framer Motion for dynamic, animated nodes and custom edge animations.

- **Easy Deployment:**  
  Configured for smooth deployment on platforms like Vercel.

---

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

# Run the development server:
```bash
npm run dev
# or
yarn dev
```
## Open http://localhost:3000 in your browser to view the application.

### Project Structure

# The project is organized as follows:
```plaintext
lawyer-on-demand-diagrams/
├── node_modules/
├── public/
│   ├── assets/                # Custom SVGs, icons, etc.
│   ├── images/                # Static images (diagrams, favicon, etc.)
│   └── ...
├── src/
│   ├── components/
│   │   ├── Diagram.tsx        # Reusable diagram component (React Flow & Framer Motion)
│   │   ├── DiagramNavigation.tsx  # Navigation component for switching between diagrams
│   │   ├── DarkModeToggle.tsx     # Dark mode toggle component
│   │   └── Layout.tsx         # Common layout component (header, footer, etc.)
│   ├── pages/
│   │   ├── index.tsx          # Landing page (overview & introduction)
│   │   ├── diagrams.tsx       # Main page displaying all diagrams
│   │   ├── about.tsx          # About page
│   │   └── contact.tsx        # Contact page
│   ├── styles/
│   │   ├── globals.css        # Global Tailwind CSS styles
│   │   └── diagram.module.css # Optional module CSS for diagram-specific styling
│   └── utils/                 # Utility functions (if needed)
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md                # This file
├── tailwind.config.ts
└── tsconfig.json
```
### Configuration
Tailwind CSS:
Configured via tailwind.config.ts and integrated in globals.css for a modern, responsive design.

Dark Mode:
Implemented using next-themes. The dark mode toggle in the header allows users to switch between themes.

React Flow & Framer Motion:
Advanced animated diagrams are rendered with React Flow, and custom node/edge animations are achieved with Framer Motion.

### Learn More
For more details on the technologies used in this project, check out these resources:

- Next.js Documentation – Learn about Next.js features and APIs.
- Tailwind CSS Documentation – Utility-first CSS framework.
- React Flow Documentation – Interactive diagram library.
- Framer Motion Documentation – Powerful animations for React.
- Next Themes Documentation – Implementing dark mode in Next.js.

### Deployment
The easiest way to deploy this Next.js app is using the Vercel Platform. For more details on deployment strategies, check out the Next.js deployment documentation.

### License
This project is licensed under the MIT License.