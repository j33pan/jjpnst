import React from "react";

export const ProductOverview = (props) => {
  const { id, name, price } = props.info;

  return (
    <div>
      {name}: ${price}
    </div>
  );
};
