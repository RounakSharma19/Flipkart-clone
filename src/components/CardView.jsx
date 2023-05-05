import React from "react";
import data from "../data.json";
import Card from "./card";

function CardView(props) {
  let obj = data?.items?.map((element) => {
    if (props?.genderSelected === "Male") {
      if (element?.gender === "Male") {
        return element;
      }
    } else if (props?.genderSelected === "Female") {
      if (element?.gender === "Female") {
        return element;
      }
    } else {
      return element;
    }
  });

  let sortedObj = {};
  if (props.pricesortasc) {
    sortedObj = obj.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (props.pricesortdes) {
    sortedObj = obj.sort(function (a, b) {
      return b.price - a.price;
    });
  } else {
    sortedObj = obj;
  }
  sortedObj = sortedObj.filter(function (element) {
    return element !== undefined;
  });
  return (
    <>
      {sortedObj.map((element) => {
        return (
          <Card
            key={element.id}
            title={element.name}
            brand={element.brand}
            price={element.price}
            image={element.image}
          />
        );
      })}
    </>
  );
}

export default CardView;
