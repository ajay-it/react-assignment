import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../ItemContext";
import CheckoutModal from "../components/CheckoutModal";

export default function Header() {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);
  const { items } = useContext(ItemContext);
  const [showModal, setShowModal] = useState(false);

  let count = 0;
  useEffect(() => {
    for (const [key, value] of Object.entries(items)) {
      if (value != 0) count++;
      setItemCount(count);
    }
  }, [items]);

  return (
    <div className="bg-blue-700 w-full px-3 py-3 text-white mb-8 flex justify-between">
      {showModal && <CheckoutModal setShowModal={setShowModal} />}
      <div
        onClick={() => navigate("/")}
        className="flex items-center font-semibold cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="h-7 w-7 mr-3"
          fill="white"
        >
          <path d="M22 18h-4V4h-4v14h-4V4H6v14c0 4.25 3.32 7.69 7.5 7.95V44h5V25.95c4.18-.26 7.5-3.7 7.5-7.95V4h-4v14zm10-6v16h5v16h5V4c-5.52 0-10 4.48-10 8z" />
        </svg>
        Food's Restaurant
      </div>
      {itemCount !== 0 && (
        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-6 relative"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <div className="top-4 right-1 absolute rounded-full h-5 w-5 bg-gray-500 border-2 text-center text-xs">
            {itemCount}
          </div>
        </div>
      )}
    </div>
  );
}
