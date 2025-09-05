function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <>
      <button
        id="darkModeToggle"
        className="px-2 py-1 rounded bg-gray-500 dark:bg-gray-700 text-gray-900 dark:text-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
}

export default DarkModeToggle;
