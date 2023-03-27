import React from "react";
import { FiSunrise } from "react-icons/fi";
import { TbSunset2 } from "react-icons/tb";
import "./style.css";
const Template = ({ sunrise, data2 }) => {
  console.log(data2);
  const array = [];
  array.push({ name: "sunrise", number: data2?.sunrise });
  array.push({ name: "sunset", number: data2?.sunset });
  console.log(array);
  return (
    <>
      {array.map((item, index) => (
        <div key={index} className={`main ${sunrise ? "sunrise" : ""}`}>
          <div className="logo">
            {item.name === "sunrise" ? <FiSunrise /> : <TbSunset2 />}
          </div>
          <div className="info">
            <span>{item.name}</span>
            <span>{item.number}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Template;
