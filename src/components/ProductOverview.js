import React from "react";
import Card from "@material-ui/core/Card";
import {
  Badge,
  Button,
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
    const item = favs.find((x) => x.productid == id);

    if (!item) favorite(id);
    else unFavorite(id);
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
          <IconButton onClick={handleFavorite}>
            {favs.find((x) => x.productid === id) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
          <IconButton onClick={add2Cart} style={{ marginLeft: "auto" }}>
            <Badge badgeContent={amountInCart} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
