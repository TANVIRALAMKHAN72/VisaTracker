# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


# VisaTracker

VisaTracker is a modern web application built with **React**, **Tailwind CSS**, and **Ant Design** that helps users explore different visa services, apply online, and track their application progress in a secure and user-friendly way.

## 🚀 Live Demo

Check out the live version of the application: [VisaTracker](https://warm-torte-3d0c28.netlify.app/)


## Features

- **Visa Services Page**  
  - Search and filter visas by **name**, **type** (Tourist, Work, Student), and **country**  
  - Display visa information in **cards/grid layout** with processing time  
  - "Apply Now" button to start your application  

- **My Application Page**  
  - User can fill out application form (**Name, Passport No, Visa Type**)  
  - **Progress Steps**: Submitted → Processing → Approved  
  - **Progress Bar** shows % completion  
  - LocalStorage saves progress, so you don’t lose your data  
  - **Finish button** triggers a **toast notification** when application is complete  

- **About Section**  
  - Professional overview of the platform  
  - Feature highlights with icons  
  - Call-to-action button  

- **Footer**  
  - Contact information  
  - Social media links  
  - Responsive design  



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
