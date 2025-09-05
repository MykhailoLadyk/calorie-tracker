import MealList from "./MealList";

function WeekItem() {
  let render = false;
  return (
    <>
      <div className="flex justify-between bg-white dark:bg-gray-700 p-2 rounded shadow">
        <div>2025-09-03 - 1800 kcal</div>
        <button className="px-2 py-1 bg-blue-500 text-white rounded">
          View Day
        </button>
      </div>
      {render ? <MealList></MealList> : null}
    </>
  );
}

export default WeekItem;
