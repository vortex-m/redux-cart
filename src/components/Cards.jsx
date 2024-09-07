import React, { useState } from "react";
import Food from "./FoodObj";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

function Cards() {
  const [data, setData] = useState(Food);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="mt-3 flex flex-col items-center w-[100%]">
      <h1 className="text-3xl font-bold font-serif">Dishes</h1>
      <div className="grid grid-cols-1 mt-4 w-full px-20 md:grid-cols-3 gap-8">
        {Food.slice(0, 12).map((element, id) => {
          return (
            <div
              key={element.id}
              className="flex flex-col cursor-pointer hover:-translate-y-1 hover:duration-150 hover:transition-all hover:ease-in-out hover:scale-105 items-center justify-center p-6 m-4 bg-white shadow-lg rounded-lg"
            >
              <img
                src={element.imgdata}
                alt={element.rname}
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />
              <h2 className="text-xl font-bold mt-4">{element.rname}</h2>
              <p className="text-gray-500 mt-2">Price: ₹{element.price}</p>
              <p className="text-gray-500 text-center mt-2">
                Rating {element.rating}⭐
              </p>
              <button
                onClick={() => send(element)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
