# Poetry & Quotes Showcase

## Project Description
Poetry & Quotes Showcase is a web application designed for users to browse, read, and discover a diverse collection of poems and quotes. It offers a clean, user-friendly interface to explore literary works across different languages and themes.

## Features
- **Browse Poems**: View poems filterable by language or theme, including English, Hindi, Urdu, and Motivational categories.
- **Discover Quotes**: Access a collection of quotes, featuring a "Quote of the Day".
- **Explore Poets**: See a list of poets and easily navigate to their respective works.
- **Responsive Design**: Enjoy a seamless experience across various devices and screen sizes.
- **User-Friendly Interface**: Navigate and discover content intuitively.

## Technologies Used
- **Vite**: A fast build tool and development server.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn-ui**: A collection of re-usable UI components.

## Project Structure
- `public/`: Contains static assets such as images, icons, and other files that are served directly.
- `src/`: Houses the main source code for the application.
  - `components/`: Includes reusable React components used throughout the application.
    - `ui/`: Contains UI components, typically sourced from libraries like shadcn-ui.
  - `data/`: Stores the application's data, such as poem and quote collections.
    - `poems/`: Contains poem data, often categorized by language or theme (e.g., `english.ts`, `hindi.ts`).
  - `hooks/`: Custom React hooks for reusable logic.
  - `lib/`: Utility functions and helper modules.
  - `pages/`: Components that represent different pages or views within the application (e.g., HomePage, PoemDetailsPage).
  - `App.tsx`: The main application component, often responsible for setting up routing and global layout.
  - `main.tsx`: The entry point of the React application, where the root component is rendered into the DOM.
- `index.html`: The main HTML file that serves as the entry point for the web application.
- Configuration Files: Various configuration files for tools like Vite (`vite.config.ts`), TypeScript (`tsconfig.json`), Tailwind CSS (`tailwind.config.js`), ESLint (`.eslintrc.cjs`), etc.

## Getting Started

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or yarn

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/poetry-quotes-showcase.git
    cd poetry-quotes-showcase
    ```
2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Development Server
1.  **Start the development server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using yarn:
    ```bash
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your Vite configuration).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Deployment
This project can be built and deployed to various static site hosting services such as:
- Vercel
- Netlify
- GitHub Pages

Typically, you would run `npm run build` (or `yarn build`) to create a production build in the `dist` directory, which can then be deployed.
