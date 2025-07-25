# Pexels Photo Viewer App
A simple, responsive React and TypeScript app to explore beautiful photos from the Pexels API.

## Getting Started
Install Dependencies
```bash
npm install
```
Environment Setup
Create .env.local file in the project root:

``` env
VITE_PEXELS_API_KEY=YOUR_PEXELS_API_KEY
VITE_PEXELS_BASE_URL=https://api.pexels.com/v1/
```
Replace YOUR_PEXELS_API_KEY with your own key.

Run Development Server

```bash
npm run dev
```

## Project Structure
```
src/
├── components/   # UI components
├── hooks/        # Custom React hooks
├── pages/        # App pages
├── services/     # API and services logic
├── types/        # TypeScript type definitions
└── utils/        # Helper functions
```

Authentication
Uses simple client-side (mock) authentication.

Protected routes require login (stored in localStorage simply).

## Technologies Used
- React
- TypeScript
- Vite
- Axios
- Tailwind CSS
- Zod (form validation)