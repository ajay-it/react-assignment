import React from "react";
import MenuCard from "./components/MenuCard";
import { items } from "./utils/data";

export default function Menu() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 grid grid-cols-3 gap-5">
        {items.map((item, index) => (
          <MenuCard name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}
