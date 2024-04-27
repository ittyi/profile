// import React from 'react'
import { hydrateRoot } from "react-dom/client";
// import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const container = document.getElementById("root");
hydrateRoot(container!, <App />);
