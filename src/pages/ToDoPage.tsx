import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import Loader from "../components/common/Loader";

interface TodoItem {
  objTodo: string;
  complete: boolean;
}

const ToDoPage = () => {
  const [inputList, setInputList] = useState<string>("");
  const [item, setItem] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<"alltodo" | "complete" | "uncompleted">(
    "alltodo"
  );

  const addDataList = (event: ChangeEvent<HTMLInputElement>) => {
    setInputList(event.target.value);
  };

  const addItemBtn = () => {
    if (inputList.trim() === "") return;
    setItem((listOfData) => [
      ...listOfData,
      { objTodo: inputList, complete: false },
    ]);
    setInputList("");
  };

  const handleRemoveList = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setItem(item.filter((values) => values.objTodo !== value));
  };

  const handleDoneList = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    const updatedItems = item.map((todo) =>
      todo.objTodo === value ? { ...todo, complete: true } : todo
    );
    setItem(updatedItems);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as "alltodo" | "complete" | "uncompleted");
  };

  const filteredItems = item.filter((todo) => {
    if (filter === "complete") return todo.complete;
    if (filter === "uncompleted") return !todo.complete;
    return true;
  });

  return (
    <div className="min-h-[85vh] bg-gray-100 flex items-center justify-center p-4">
      <Loader>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
          <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Write an item..."
              onChange={addDataList}
              value={inputList}
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              onClick={addItemBtn}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              +
            </button>
          </div>

          <div className="mb-4">
            <select
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="alltodo">All</option>
              <option value="complete">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>

          <ol className="space-y-2">
            {filteredItems.map((itemVal, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded border border-gray-200"
              >
                <span
                  className={`flex-1 ${
                    itemVal.complete ? "line-through text-gray-400" : ""
                  }`}
                >
                  {itemVal.objTodo}
                </span>
                <div className="flex gap-2">
                  {!itemVal.complete && (
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      value={itemVal.objTodo}
                      onClick={handleDoneList}
                    >
                      Done
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    value={itemVal.objTodo}
                    onClick={handleRemoveList}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Loader>
    </div>
  );
};

export default ToDoPage;
