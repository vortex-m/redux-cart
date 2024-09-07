import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CardDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  // Function to filter the data based on id from the params
  const compare = () => {
    let comparedata = getdata.filter((e) => e.id === parseInt(id)); // Ensure id comparison works
    setData(comparedata);
  };

  // Trigger the compare function when component mounts or id changes
  useEffect(() => {
    compare();
  }, [id, getdata]);

  return (
    <div className="flex flex-col md:flex-row pt-[6em] justify-between items-start p-6 ">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="space-y-4 flex-col mx-auto flex p-4 shadow-lg rounded-lg">
            <img
              src={item.imgdata}
              alt={item.rname}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="flex px-3 gap-10">
              <div className="space-y-4">
                <p className="flex items-center">
                  <h2 className="font-semibold text-lg mr-2">Restaurant:</h2>
                  <span>{item.rname}</span>
                </p>
                <p className="flex items-center">
                  <h2 className="font-semibold text-lg mr-2">Price:</h2>
                  <span>₹{item.price}</span>
                </p>
                <p className="flex items-center">
                  <h2 className="font-semibold text-lg mr-2">Dishes:</h2>
                  <span>{item.address}</span> {/* Assuming 'address' refers to dishes */}
                </p>
                <p className="font-semibold text-lg">Total: ₹{item.price}</p>

                <div className="flex border w-1/2 md:w-1/4 gap-4 h-8 justify-center items-center rounded-lg overflow-hidden">
                  <button className="bg-gray-200 w-36 h-full flex justify-center items-center hover:bg-gray-300">
                    -
                  </button>
                  <h1 className="text-lg">{item.qnty}</h1> {/* Quantity */}
                  <button className="bg-gray-200 w-36 h-full flex justify-center items-center hover:bg-gray-300">
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-4 px-8">
                <p className="flex items-center">
                  <h2 className="font-semibold text-lg mr-2">Rating:</h2>
                  <span>{item.rating}⭐</span> {/* Assuming you have a 'rating' field */}
                </p>
                <p className="flex items-center">
                  <h2 className="font-semibold text-lg mr-2">Order Review:</h2>
                  <span>{item.review}</span> {/* Assuming 'review' or similar data exists */}
                </p>
                <p className="flex items-center">
                  <h2 className="font-semibold text-lg mr-2">Delivery Time:</h2>
                  <span>{item.deliveryTime} minutes</span> {/* Assuming 'deliveryTime' field */}
                </p>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No data found for this item.</p>
      )}
    </div>
  );
}

export default CardDetails;
