import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../ItemContext";
import { useNavigate } from "react-router-dom";
import { prices } from "../utils/data";

export default function CheckoutModal({ setShowModal }) {
  const { items, setItems, initialItems } = useContext(ItemContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  const removeItem = (name) => {
    const tempItems = { ...items };
    if (tempItems[name] > 0) {
      tempItems[name] -= 1;
    }
    setItems(tempItems);
  };

  const addItem = (name) => {
    const tempItems = { ...items };
    tempItems[name] = (tempItems[name] || 0) + 1;
    setItems(tempItems);
  };
  let totalSum = 0;
  useEffect(() => {
    for (const [key, value] of Object.entries(items)) {
      if (value != 0) totalSum += value * prices[key];
      setTotal(totalSum);
    }
  }, [items]);

  return (
    <div className="absolute h-screen w-screen backdrop-blur flex items-center justify-center">
      <div className="drop-shadow-lg flex flex-col justify-between min-h-72 w-[500px] rounded bg-white text-black font-semibold px-5 pt-4">
        <div className="w-full">
          Order Summary
          {Object.entries(items)
            .filter(([key, value]) => value > 0)
            .map(([key, value]) => (
              <div
                key={key}
                className="text-gray-400 mb-2 mt-6 grid grid-cols-3 justify-between"
              >
                <div>{key}</div>
                <div>{value}</div>
                <div className="justify-self-end text-white">
                  <button
                    type="button"
                    className="bg-blue-700 px-4 rounded-sm mr-2"
                    onClick={() => {
                      addItem(key);
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      removeItem(key);
                    }}
                    className="bg-red-700 px-4 disabled:bg-gray-300 rounded-sm disabled:text-gray-400"
                    disabled={value === 0}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          <span className="text-gray-400">Total (INR) : {total || 0}</span>
        </div>
        <div className="flex w-full justify-end mb-3 gap-4">
          <button
            type="button"
            onClick={() => {
              navigate("/checkout");
              setShowModal(false);
              setItems(initialItems);
            }}
            className="bg-blue-700 text-white px-2 py-0.5 rounded drop-shadow"
          >
            SAVE AND CHECKOUT
          </button>
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
            className="text-blue-500"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
