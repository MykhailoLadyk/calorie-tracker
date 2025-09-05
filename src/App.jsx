import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import DailySummary from "./components/DailySummary";
import WeeklySummary from "./components/WeeklySummary";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      <DailySummary />
      <WeeklySummary />
    </div>
  );
}

export default App;
