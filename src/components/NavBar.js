import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DescriptionIcon from "@material-ui/icons/Description";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const navigate = (url) => {
    history.push(url);
    console.log("hi");
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" onClick={() => navigate("/")}>
          One Two Baker
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Button onClick={() => history.push("/products")}>Products</Button>
          <Button onClick={() => history.push("/signin")}>Sign in</Button>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <AccountCircleRoundedIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => navigate("/cart")}>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
              Cart
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigate("/favorates")}>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              Favorites
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigate("/orders")}>
              <IconButton>
                <DescriptionIcon />
              </IconButton>
              Orders
            </MenuItem>
            <Divider />
            <MenuItem>
              <IconButton>
                <ExitToAppIcon />
              </IconButton>
              Sign out
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
