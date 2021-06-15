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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CartContext } from "../contexts/cart";
import { FavoriteContext } from "../contexts/favorites";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

export const ProductOverview = (props) => {
  const { id, name, price, url } = props.info;
  const { add } = React.useContext(CartContext);
  const { favorite, favs } = React.useContext(FavoriteContext);
  return (
    <div>
      <Card>
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
        <CardActions>
          <IconButton onClick={() => favorite(id)}>
            {favs.find((x) => x.productid === id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
          <IconButton
            onClick={() => add(props.info)}
            style={{ marginLeft: "auto" }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
