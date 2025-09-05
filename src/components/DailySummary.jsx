import MealList from "./MealList";

function DailySummary() {
  return (
    <>
      <section
        id="todaySection"
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold">Today's Summary</h2>

        <div
          id="dailySummary"
          className="flex justify-between bg-gray-200 dark:bg-gray-700 p-4 rounded"
        >
          <div>
            Calories: <span id="caloriesToday">0</span> kcal
          </div>
          <div>
            Protein: <span id="proteinToday">0</span> g
          </div>
          <div>
            Carbs: <span id="carbsToday">0</span> g
          </div>
          <div>
            Fat: <span id="fatToday">0</span> g
          </div>
        </div>

        <div id="mealList" className="space-y-2">
          <div className="flex justify-between bg-white dark:bg-gray-700 p-2 rounded shadow">
            <MealList></MealList>
            <div className="space-x-2">
              <button className="px-2 py-1 bg-yellow-500 text-white rounded">
                Edit
              </button>
              <button className="px-2 py-1 bg-red-500 text-white rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

        <button
          id="addMealBtn"
          className="px-4 py-2 bg-green-500 text-white rounded mt-4"
        >
          Add Meal
        </button>
      </section>
    </>
  );
}

export default DailySummary;
