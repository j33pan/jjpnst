import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import pink from "../images/pink.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const ProductOverview = (props) => {
  const { id, name, price } = props.info;

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            style={{ height: 250 }}
            image={pink}
            title="Contemplative Reptile"
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
        <CardActions>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton style={{ marginLeft: "auto" }}>
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
