import React from "react";
import { Grid, Items } from "./styles";

const Logs = () => {
  return (
    <>
      <Grid>
        <Items>
          <h3>Time</h3>
          <p>8:00 A.M</p>
        </Items>
        <Items>
          <h3>Cashier Name</h3>
          <p>Juan Dela Cruz</p>
        </Items>
        <Items>
          <h3>Item Purchased</h3>
          <p>Patios x 1</p>
        </Items>
        <Items>
          <h3>Total</h3>
          <p>200</p>
        </Items>
      </Grid>
    </>
  );
};

export default Logs;
