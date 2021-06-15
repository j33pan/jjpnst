import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

export const StaticCardMedia = (props) => {
  const { id, name, price, url } = props.data;

  return (
    <CardActionArea>
      <CardMedia
        style={{ height: 200, background: "lightgrey" }}
        image={url}
        title={name}
      />
      <CardContent
        style={{
          textAlign: "center",
          padding: 0,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">${price}</Typography>
      </CardContent>
    </CardActionArea>
  );
};
