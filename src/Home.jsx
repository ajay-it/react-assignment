import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-7 items-center">
      <div className="text-5xl text-center">
        Welcome to Food's <br />
        Kitchen
      </div>
      <button
        type="button"
        onClick={() => navigate("/menu")}
        className="bg-blue-700 px-3 py-1.5 rounded text-white font-semibold text-xs"
      >
        GO TO MENU
      </button>
    </div>
  );
}
