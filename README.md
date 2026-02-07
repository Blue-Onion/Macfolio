# Blue Onion's Macfolio

A stunning macOS-style portfolio showcasing creative work with a smooth, interactive interface inspired by Apple's design language. Built with Next.js and GSAP for fluid animations.

## 🚀 Features

- **MacOS Inspired Interface**: A fully responsive and interactive desktop environment mimicking macOS.
- **Window Management**: Draggable and functional windows for various applications.
- **Interactive Dock**: Smooth magnification effect on hover, similar to the original macOS dock.
- **Apps**:
  - **Terminal**: Interactive command-line interface.
  - **Finder**: File system navigation to explore project files.
  - **Arc**: A browser-like experience for viewing web content.
  - **Gallery**: Image viewer for portfolio highlights.
  - **Resume, Contact, TextFile**: Dedicated windows for information and content.
- **Smooth Animations**: Powered by GSAP for realistic movements and transitions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & CSS Modules
- **Animations**: [GSAP](https://gsap.com/) (Draggable, SplitText)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `dayjs`, `class-variance-authority`, `clsx`

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/macfolio.git
   cd macfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🎨 Font Optimization

This project uses `next/font/google` to automatically optimize and load inter, Roboto Mono, Georama, and Archivo Black.

## 📄 License

This project is licensed under the MIT License.
