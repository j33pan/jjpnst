import { Grid } from "@material-ui/core";
import React from "react";
import { FavoriteOverview } from "../components/FavoriteOverview";
import { FavoriteContext } from "../contexts/favorites";

export const Favorates = () => {
  const { favs } = React.useContext(FavoriteContext);

  return (
    <div>
      <Grid container spacing={3}>
        {favs.map((x) => (
          <Grid item key={x.id} xs={3}>
            <FavoriteOverview data={x} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
