import WeekItem from "./WeekItem";

function WeeklySummary() {
  return (
    <>
      <section
        id="weeklySection"
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold">Weekly Summary</h2>

        <div
          id="weeklyChart"
          className="bg-white dark:bg-gray-700 h-64 rounded shadow flex items-center justify-center"
        >
          <span className="text-gray-500 dark:text-gray-300">
            [Weekly Chart Placeholder]
          </span>
        </div>

        <div id="weeklyHistory" className="space-y-2">
          <WeekItem></WeekItem>
        </div>
      </section>
    </>
  );
}

export default WeeklySummary;
