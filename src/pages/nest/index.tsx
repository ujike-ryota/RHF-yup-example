import type { NextPage } from "next";
import { Form1 } from "../../components/Form1";
import { Form2 } from "../../components/Form2";

const Nest: NextPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>フォーム</h1>
      <hr />
      <form>
        <Form1 />
        <hr />
        <Form2 />
        <hr />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Nest;
