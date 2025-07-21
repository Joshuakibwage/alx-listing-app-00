# 🏡 ALX Listing App

A modern, responsive listing page inspired by Airbnb — built using **Next.js (Pages Router)**, **TypeScript**, and **Tailwind CSS**.  
This project is part of the **ALX Front-End ProDev Program** and is designed to showcase real-world component architecture, type safety, and clean folder organization.

---

## 🚀 Overview

The **ALX Listing App** is a web-based platform that displays property listings in a card-style layout. It demonstrates:

- 🌐 File-based routing with the **Next.js App Router**
- 🎨 Consistent and responsive design using **Tailwind CSS**
- 🧠 Scalable code architecture with **TypeScript interfaces**
- 🔁 Reusable UI components (e.g., Card, Button)
- 📁 Organized folder structure for long-term maintainability

---

## 🎯 Project Objectives

- ✅ Master Next.js `pages/` routing and layouts
- ✅ Build reusable, accessible UI components
- ✅ Apply TypeScript interfaces to enforce type safety
- ✅ Practice clean architecture and modular code organization
- ✅ Create a visually appealing, mobile-first layout

---

## 🗂 Folder Structure

Here's a breakdown of the key project folders and their purpose:

```bash
📦 root/
├── app/                 # App Router folder structure (routing, layouts, pages)
│   ├── page.tsx         # Homepage route
│   ├── layout.tsx       # Global layout wrapper (e.g., nav, footer)
│   └── listings/        # /listings route (cards, details, etc.)
│       ├── page.tsx
│       ├── loading.tsx
│       └── error.tsx
├── components/
│   └── common/          # Shared UI components (Card, Button, etc.)
├── interfaces/          # Central TypeScript interface definitions (e.g., props)
├── constants/           # Reusable static data and configuration
├── public/
│   └── assets/          # Static images, icons, media (e.g., placeholder.jpg)
├── styles/              # Global styles and Tailwind imports
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation

---

🧩 Key Features

    💡 Reusable UI components:
    Common elements like buttons and cards built for consistency and flexibility.

    ⚙️ Typed architecture:
    All components leverage interfaces/ to enforce prop types and improve DX.

    📁 Modular folder structure:
    Each part of the app is isolated and organized for long-term scalability.

    🖼 Asset management:
    Static media lives in public/assets, keeping everything accessible and clean.

    ⚡ Tailwind CSS:
    Utility-first styling for rapid prototyping and production-ready designs.

🔧 How to Run the Project Locally

Follow the steps below to get the project up and running on your local machine:
1. Clone the Repository

git clone https://github.com/Joshuakibwage/alx-listing-app.git
cd alx-listing-app

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev

4. View the App in Browser

Open http://localhost:3000 in your browser to view the app.

---

🧱 Component Overview
📦 Card.tsx

    Displays a property image, title, and description

    Accepts props via CardProps interface

    Fully responsive and styled with Tailwind

📦 Button.tsx

    Custom button for common actions like "Book Now" or "View Details"

    Accepts props via ButtonProps interface

    Handles disabled states and button types

---

🧾 Assets

All static media — such as placeholder images or icons — are placed in:

public/assets/

✅ Example usage:

<img src="/assets/placeholder.jpg" alt="Property" />

🧪 Tech Stack

    Next.js 15.3.5 – Pages Router & SSR

    TypeScript

    Tailwind CSS – Utility-first styling

    ESLint & Prettier – Code consistency

    Git + GitHub – Version control and collaboration

🤝 Contributing

This is a solo ALX learning project, but if you're viewing the code and want to contribute:

1. Fork the repository
2. Create a feature branch (e.g., feat/add-filters)
3. Commit and push your changes
4. Open a pull request

👤 Author

Joshua Kibwage
🔗 https://www.linkedin.com/in/joshua-kibwage-b19556321/
💬 Passionate about clean UIs, structured code, and building impactful products.
📌 Final Thoughts

This project is a stepping stone toward mastering modern frontend development with React frameworks. It’s not just about building listings — it’s about writing clean, scalable code that’s easy to extend and maintain.

    “The best code is the one you don't have to explain — structure it like a story, not a puzzle.”

    Built with ❤️ using modern tools and great coffee ☕.


---

