import React from "react";
import Card from "@material-ui/core/Card";
import { Badge, CardActions, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../contexts/cart";
import { FavoriteContext } from "../contexts/favorites";
import DeleteIcon from "@material-ui/icons/Delete";
import { StaticCardMedia } from "../subComponents/StaticCardMedia";

export const FavoriteOverview = (props) => {
  const { data } = props;
  const { id, name, price, url } = data;
  const { add, getItemInCart } = React.useContext(CartContext);
  const { unFavorite } = React.useContext(FavoriteContext);
  const [amountInCart, setAmountincart] = React.useState(0);

  const add2Cart = () => {
    const amount = add(data);
    setAmountincart(amount);
  };

  React.useEffect(() => {
    const amount = getItemInCart(id);
    setAmountincart(amount);
  }, []);

  return (
    <div>
      <Card>
        <StaticCardMedia data={data} />
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
