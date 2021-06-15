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
import { AuthContext } from "../contexts/auth";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const { currUser, signOut } = React.useContext(AuthContext);

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
          <Button onClick={() => history.push("/cart")}>Cart</Button>

          {!currUser ? (
            <Button onClick={() => history.push("/signin")}>Sign in</Button>
          ) : (
            <>
              {" "}
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <AccountCircleRoundedIcon />
              </IconButton>
              <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem
                  onClick={() => navigate("/favorates")}
                  style={{ paddingLeft: 0, paddingRight: 20 }}
                >
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                  Favorites
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => navigate("/orders")}
                  style={{ paddingLeft: 0, paddingRight: 20 }}
                >
                  <IconButton>
                    <DescriptionIcon />
                  </IconButton>
                  Orders
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={signOut}
                  style={{ paddingLeft: 0, paddingRight: 20 }}
                >
                  <IconButton>
                    <ExitToAppIcon />
                  </IconButton>
                  Sign out
                </MenuItem>
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
