import React from "react";
import { DatePicker, Space } from "antd";
import { Div } from "./styles";
import "antd/dist/antd.css";

const DPicker = () => {
  //   const [value, onChange] = useState(new Date());
  const { RangePicker } = DatePicker;
  return (
    <>
      <Div>
        <Space direction="vertical" size={12}>
          <RangePicker />
        </Space>
      </Div>
    </>
  );
};
export default DPicker;
