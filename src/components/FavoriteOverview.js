import React from "react";
import Card from "@material-ui/core/Card";
import {
  Badge,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../contexts/cart";
import { FavoriteContext } from "../contexts/favorites";
import DeleteIcon from "@material-ui/icons/Delete";

export const FavoriteOverview = (props) => {
  const { id, name, price, url } = props.info;
  const { add, getItemInCart } = React.useContext(CartContext);
  const { favorite, unFavorite, favs } = React.useContext(FavoriteContext);
  const [amountInCart, setAmountincart] = React.useState(0);

  const add2Cart = () => {
    const amount = add(props.info);
    setAmountincart(amount);
  };

  React.useEffect(() => {
    const amount = getItemInCart(id);
    setAmountincart(amount);
  }, []);

  const handleFavorite = () => {
    const item = favs.find((x) => x.id === id);
    if (item) unFavorite(id);
    else favorite(props.info);
  };

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
          <IconButton onClick={add2Cart}>
            <Badge badgeContent={amountInCart} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={() => unFavorite(id)}
            style={{ marginLeft: "auto" }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
