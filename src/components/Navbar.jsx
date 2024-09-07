import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "@mui/material";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className=" fixed  mx-auto left-0 right-0 z-20 bg-blue-600 -mt-4 text-center">
      <div className="relative flex justify-between px-20 items-center py-4 border">
        <NavLink to="/" className="text-2xl text-white font-mono">
          Home
        </NavLink>
        <h1 className="text-3xl text-white">Shopping Cart</h1>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            <Badge badgeContent={getdata.length} color="primary">
              <FaOpencart size={30} color="white" />
            </Badge>
            <span>Cart</span>
          </button>
          {isOpen && (
            <div className="absolute z-10 h-[400px] overflow-scroll right-0 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform duration-200 ease-in-out scale-100">
              {getdata.length ? (
                <div className="p-4 w-full">
                  <Table>
                    <thead className="border-b-2 w-full">
                      <tr>
                        <th className="p-2">Photos</th>
                        <th className=" p-2">Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-4">
                      {getdata.map((element) => {
                        return (
                          <tr
                            key={element.id}
                            className="shadow-sm  bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg mt-4"
                          >
                            <td className="py-2">
                              <NavLink to={`/cart/${element.id}`}>
                                <img
                                  src={element.imgdata}
                                  alt={element.rname}
                                  className="w-12 h-12 object-cover rounded-full"
                                />
                              </NavLink>
                            </td>
                            <td className="py-2">{element.rname}</td>
                            <td className="py-2">₹{element.price}</td>
                            <td className="py-2">Qty: {element.qnty}</td>
                            <td className="py-2">
                              <p>Total: ₹{element.price * element.qnty}</p>
                            </td>
                            <td className="py-2 px-2">
                              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 min-h-24 p-4 bg-gray-50 rounded-md">
                  <p className="text-gray-700">Your Cart is Empty!</p>
                  <FaOpencart size={40} className="text-gray-400" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
