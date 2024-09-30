import React from "react";
import Button from "./Button";

const List = ["All","Gaming","Songs","Cricket","Football","Live","News","Computer Programming","Recruitment","Telugu Cinema","Striver","Akshay Saini"];

const ButtonList = () => {
  return (
    <div className="flex ml-5">

      {List.map((items, index) =>{ return <Button key={index} name={items}/> })}
    </div>
  );
};

export default ButtonList;
