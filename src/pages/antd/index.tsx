import type { NextPage } from "next";
import * as Ant from "antd";
import { AntForm1 } from "../../components/AntForm1";
import { AntForm2 } from "../../components/AntForm2";

const Antd: NextPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Ant.Space direction="vertical">
        <Ant.Typography.Title level={2}>フォーム</Ant.Typography.Title>
        <Ant.Divider />
        <AntForm1 />
        <Ant.Divider />
        <AntForm2 />
      </Ant.Space>
    </div>
  );
};

export default Antd;
