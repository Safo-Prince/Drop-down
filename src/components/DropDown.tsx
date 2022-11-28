import React from "react";
import { useState } from "react";
import option from "../models/option";
import { CaretDown, CaretRight } from "phosphor-react";

interface Options {
  options: option[];
}
function DropDown({ options }: Options) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleItemDropdown = (): void => {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  };

  return (
    <div className="flex ml-80 mt-80 flex-col">
      <button
        onClick={handleItemDropdown}
        className="rounded  bg-gray-500 h-20 w-40  text-white flex justify-between px-6 py-6 static "
      >
        DropDown{" "}
        {isExpanded ? <CaretDown size={22} /> : <CaretRight size={25} />}
      </button>
      {isExpanded && (
        <div className="mt-2">
          <div
            className="w-0 h-0 ml-6
   border-l-[10px] border-l-transparent
   border-b-[8px] border-b-gray-100
   border-r-[10px] border-r-transparent "
                    
          >
           
          </div>
          <ul className="rounded border-2 w-60  pt-2 bg-gray-100">
            {options.map((option) => (
              <li
                className=" hover:bg-blue-600 cursor-pointer h-10 py-2 "
                key={option.id}
              >
                {option.value}{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
