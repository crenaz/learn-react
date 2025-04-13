import React, { useState, useEffect } from "react";
import Game from "./Game";
import CellBackground from "./backgrounds/CellBackground";

function MainPage() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <CellBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex justify-center items-center mb-8 relative">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">
            Tic Tac Toe
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ml-auto"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors">
          <Game />
        </div>
      </div>
    </main>
  );
}

export default MainPage;
