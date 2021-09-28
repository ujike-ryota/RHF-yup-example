import type { NextPage } from "next";
import * as Ant from "antd";
import { Form1 } from "../components/Form1";
import { Form2 } from "../components/Form2";

const Home: NextPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Ant.Space direction="vertical">
        <Ant.Typography.Title level={2}>フォーム</Ant.Typography.Title>
        <Ant.Divider />
        <Form1 />
        <Ant.Divider />
        <Form2 />
      </Ant.Space>
    </div>
  );
};

export default Home;
