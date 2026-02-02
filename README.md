## Frontend UI Implementation – 
Figma to Pixel-Perfect React App This project is a pixel-perfect frontend implementation of the provided Figma design, built using React and plain CSS. 
The goal was not just to recreate the UI visually, but to deliver a production-quality, responsive, accessible, and well-structured frontend experience. 

Every spacing, font, color, and interaction has been implemented to match the Figma design exactly, with no approximations. 

## Objectives 

* Achieve 100% design fidelity with the Figma file 
* Ensure seamless responsiveness across all devices 
* Write clean, modular, maintainable code 
* Deliver a fast, accessible, and polished user experience 
* Demonstrate ownership, attention to detail, and craftsmanship
  
## Tech Stack 

* React (Vite) – Component-based UI architecture 
* CSS (Tailwind) – Precise control for pixel-perfect styling 
* HTML5 (Semantic) – Accessibility and structure 
* Vercel – Production deployment
  
## Design Fidelity 

* Exact font families, sizes, weights, and line heights taken from Figma 
* Accurate spacing using padding, gap, and layout measurements 
* Colors implemented using exact HEX values  

## Responsiveness 

The UI adapts smoothly across: 

* Desktop 
* Tablet 
* Mobile
  
Approach 

* Flexbox-based layout for predictable alignment 
* Responsive breakpoints to ensure layout integrity 
* Touch-friendly interactions for mobile devices 
* No horizontal scrolling on any screen size 

## Code Structure & Craftsmanship 

The project is structured for clarity and scalability: 
``` src/
 ├─ components/
 │   └─ Navbar.jsx
 │
 ├─ sections/
 │   ├─ AboutUs.jsx
 │   ├─ CTA.jsx
 │   ├─ Features.jsx
 │   ├─ Footer.jsx
 │   ├─ Hero.jsx
 │   ├─ Intro.jsx
 │   ├─ Newsletter.jsx
 │   ├─ Products.jsx
 │   └─ Roadmap.jsx
 │
 ├─ styles/
 │   └─ global.css
 │
 ├─ App.jsx
 └─ main.jsx

```
Key Principles 

* One component = one responsibility
* Reusable and readable CSS class names
* Separation of layout, logic, and styling
* No unnecessary libraries or over-engineering
      
## Accessibility 

Accessibility was treated as a first-class requirement: 

* Semantic HTML (nav, ul, li, button)
*  Keyboard-accessible navigation (Tab / Enter)
* Visible focus states
* Screen-reader-friendly structure
      
 ## Performance  
 
* Minimal CSS footprint
* No unused assets
* Optimized font loading
* Fast initial render with Vite

 ## Deployment 
 
 The project is deployed on Vercel.

## Live URL 

Live Demo - https://apura-landing.vercel.app/

## Running Locally
 ```
  npm install
  npm run dev

```
