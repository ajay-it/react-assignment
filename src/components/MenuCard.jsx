import { ItemContext } from "../ItemContext";
import { React, useContext } from "react";

export default function MenuCard({ name, price, image }) {
  const { items, setItems } = useContext(ItemContext);

  const removeItem = () => {
    const tempItems = { ...items };
    if (tempItems[name] > 0) {
      tempItems[name] -= 1;
    }
    setItems(tempItems);
  };

  const addItem = () => {
    const tempItems = { ...items };
    tempItems[name] = (tempItems[name] || 0) + 1;
    setItems(tempItems);
  };

  return (
    <div className="flex flex-col h-80 shadow-lg rounded">
      <img src={`${image}`} alt="" className="w-full h-40 rounded" />
      <div className="flex flex-col p-2">
        <span className="font-semibold">{name}</span>
        <div className="text-xs flex flex-col gap-y-1 mt-2">
          <span>Price: {price}</span>
          {items[name] !== 0 && (
            <>
              <span>Total: {items[name]}</span>
              <span>Cost (INR): {items[name] * parseInt(price)}</span>
            </>
          )}
        </div>
      </div>
      <div className="flex px-2 gap-2 text-white text-lg font-semibold">
        <button
          type="button"
          className="bg-blue-700 px-4 rounded-sm"
          onClick={addItem}
        >
          +
        </button>
        <button
          type="button"
          onClick={removeItem}
          className="bg-red-700 px-4 disabled:bg-gray-300 disabled:text-gray-400 rounded-sm"
          disabled={items[name] === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}
