import React from "react";
import { Grid, Block } from "./styles";

import Icon, {
  FundTwoTone,
  PieChartTwoTone,
  FunnelPlotTwoTone,
  CalculatorTwoTone,
  ContactsTwoTone,
} from "@ant-design/icons";

const Blocks = () => {
  return (
    <>
      <Grid>
        <Block>
          <Icon component={FundTwoTone} style={{ fontSize: "30px" }}></Icon>
          <h5>Total Sales</h5>
          <p>0.000</p>
        </Block>
        <Block>
          <Icon component={ContactsTwoTone} style={{ fontSize: "30px" }}></Icon>
          <h5>Transactions</h5>
          <p>0.000</p>
        </Block>
        <Block>
          <Icon
            component={FunnelPlotTwoTone}
            style={{ fontSize: "30px" }}
          ></Icon>
          <h5>Total Item Sold</h5>
          <p>0.000</p>
        </Block>
        <Block>
          <Icon
            component={CalculatorTwoTone}
            style={{ fontSize: "30px" }}
          ></Icon>

          <h5>Cost of Goods</h5>
          <p>0.000</p>
        </Block>
        <Block>
          <Icon component={PieChartTwoTone} style={{ fontSize: "30px" }}></Icon>
          <h5>Profit</h5>
          <p>0.000</p>
        </Block>
      </Grid>
    </>
  );
};

export default Blocks;
