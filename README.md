<p align="center">
  <img src="https://slice.salahmohsen.com/assets/logo.svg"  />
</p>
<p align="center">
  SLICE is a web application for a pizza restaurant that allows customers to order pizza online and track the progress of their orders.
</p>
<p align="center">
  <em>Developed with the software and tools below.</em><br>
  <img src="https://skillicons.dev/icons?i=figma,vite,react,tailwind" /> <img height="32" width="32" src="https://simpleicons.org/icons/reactrouter.svg" />
</p>

<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running Slice-Pizza-App](#-running-Slice-Pizza-App)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

**Slice** is a responsive web app that allows users to conveniently order their favorite pizzas with just a few clicks.

---

##  Features

- Responsive Design
- Utilizes React as the frontend framework, providing a robust and efficient user interface.
- Uses Tailwind for styling, allowing for a clean and customizable design.
- Fetches menu items from an external API, presenting them in an intuitive and user-friendly interface.
- Implements Reverse Geocoding to City API, enhancing user convenience by automatically fetching and displaying addresses.
- Uses React Router for routing and navigation for seamless navigation and a smooth, single-page application experience.
- Implements Redux Thunk for handling asynchronous operations within the Redux state management.
- Sends the orders to the API and updates the customers on the status of their orders.

---

##  Repository Structure

```sh
└── Slice-Pizza-App/
    ├── .eslintrc.cjs
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── prettier.config.cjs
    ├── src
    │   ├── features
    │   │   ├── cart
    │   │   ├── menu
    │   │   ├── order
    │   │   └── user
    │   ├── index.css
    │   ├── main.jsx
    │   ├── services
    │   │   ├── apiGeocoding.js
    │   │   └── apiResturant.js
    │   ├── store.js
    │   ├── ui
    │   │   ├── AppLayout.jsx
    │   │   ├── CartOverview.jsx
    │   │   ├── Error.jsx
    │   │   ├── Home.jsx
    │   │   ├── Loader.jsx
    │   │   └── Search.jsx
    │   └── utils
    │       └── helpers.js
    ├── tailwind.config.js
    └── vite.config.js
```

---

##  Getting Started

###  Installation

1. Clone the Slice-Pizza-App repository:

```sh
git clone https://github.com/salahmohsen/Slice-Pizza-App
```

2. Change to the project directory:

```sh
cd Slice-Pizza-App
```

3. Install the dependencies:

```sh
npm install
```

###  Running Slice-Pizza-App

Use the following command to run Slice-Pizza-App:

```sh
npm run dev
```

---


##  Acknowledgments

This project is written based on a [Jonas Schmedtmann Ultimate React Course](https://github.com/jonasschmedtmann/ultimate-react-course). While the foundational concepts were influenced by the course, I took creative initiative to design and implement a unique interface tailored to the project's specific requirements.

Special thanks to Jonas Schmedtmann for the valuable educational content.

[**Return**](#-quick-links)

---
