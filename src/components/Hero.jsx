import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

function Hero({ darkMode, setDarkMode }) {
  const [editingTargetCal, setEditingTargetCal] = useState(false);
  const [targetCalValue, setTargetCalValue] = useState("");
  const handleSaveTarget = () => {
    localStorage.setItem("targetCalories", targetCalValue);
    setEditingTargetCal(false);
  };
  return (
    <header className="p-6 bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Calorie Tracker
      </h1>

      <div className="flex items-center space-x-4">
        {editingTargetCal ? (
          <>
            {" "}
            <input
              type="number"
              className="dark:text-black"
              value={targetCalValue}
              onChange={(e) => setTargetCalValue(e.target.value)}
              placeholder="Enter new target"
            />
            <button
              className="ml-2 px-2 py-1 rounded bg-blue-500 text-white dark:bg-red-500"
              onClick={handleSaveTarget}
            >
              Change
            </button>
          </>
        ) : null}
        <div className="px-2 py-1 rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white">
          <span>Daily Target: </span>
          <span id="dailyTarget">2000 kcal</span>
          <button
            className="ml-2 px-2 py-1 rounded bg-blue-500 text-white dark:bg-blue-700"
            onClick={() => setEditingTargetCal(!editingTargetCal)}
          >
            Edit
          </button>
        </div>

        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

export default Hero;
