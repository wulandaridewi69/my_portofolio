import React from "react";


const Card = (props) => {  

    return (
    <div className="border-1 drop-shadow-xl hover:shadow-md hover:shadow-gray-400 hover:-mt-1 mb-4">
      <div className=" py-4">
        <div className="h-52 w-48 ml-8 justify-center cursor-pointer rounded">
            <img
              src={props.image}
              className=" w-40 ml-6 mt-4 h-36"
              alt=""
              width={100}
              height={50}
            />
        </div>
        <div className="flex ml-1">
          <div className="p-3 pb-0">
            <div className="text-white text-xl">{props.title}</div>
            <div className="text-black/70">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;