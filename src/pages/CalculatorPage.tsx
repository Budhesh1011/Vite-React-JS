import { useState } from "react";
import type { MouseEvent } from "react";
import { CalButtonList } from "../data/CalButtonList";
import Loader from "../components/common/Loader";

const CalculatorPage = () => {
  const [result, setResult] = useState<string>("");

  const handleValueChange = (event: MouseEvent<HTMLButtonElement>) => {
    const value = (event.currentTarget.value || "").toString();

    switch (value) {
      case "=":
        return finaleResult();
      case "CE":
        return backspaceBtn();
      case "C":
        return clearScreenBtn();
      default:
        setResult((prev) => prev + value);
    }
  };

  const backspaceBtn = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  const clearScreenBtn = () => {
    setResult("");
  };

  const finaleResult = () => {
    try {
      // Use Function instead of eval for safety in real apps
      // This is only for educational purposes
      const evalResult = eval(result); // Unsafe in real-world apps!
      setResult(evalResult.toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-100 p-6">
      <Loader>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
            Simple Calculator
          </h2>

          {/* Input Field */}
          <input
            type="text"
            value={result}
            readOnly
            className="w-full text-right text-lg px-4 py-2 border border-gray-300 rounded mb-4 bg-gray-50"
          />

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {CalButtonList.map((btnVal) => (
              <button
                key={btnVal}
                value={btnVal}
                onClick={
                  btnVal === "CE"
                    ? backspaceBtn
                    : btnVal === "C"
                    ? clearScreenBtn
                    : btnVal === "="
                    ? finaleResult
                    : handleValueChange
                }
                className={`py-2 rounded text-white font-semibold ${
                  btnVal === "C" || btnVal === "CE"
                    ? "bg-red-500 hover:bg-red-600"
                    : btnVal === "="
                    ? "bg-green-500 hover:bg-green-600 col-span-1"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {btnVal === "/" ? "÷" : btnVal === "*" ? "×" : btnVal}
              </button>
            ))}
          </div>
        </div>
      </Loader>
    </div>
  );
};

export default CalculatorPage;
