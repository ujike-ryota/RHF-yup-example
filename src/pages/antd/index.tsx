import type { NextPage } from "next";
import { useState } from "react";
import * as Ant from "antd";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AntForm1, AntForm1Validation } from "../../components/AntForm1";
import { AntForm2, AntForm2Validation } from "../../components/AntForm2";
import { AntResult } from "../../components/AntResult";

type FormValues = {
  name: string;
  gender: string;
  age: number;
  favoriteFood: string;
  favoriteEvenNumber: Array<number>;
};

const schema = yup.object().shape({
  ...AntForm1Validation,
  ...AntForm2Validation,
});

const Antd: NextPage = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [submitData, setSubmitData] = useState({
    name: null,
    gender: null,
    age: null,
    favoriteFood: null,
    favoriteEvenNumber: [],
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSubmitData(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Ant.Space direction="vertical">
        <Ant.Typography.Title level={2}>フォーム</Ant.Typography.Title>
        <Ant.Divider />
        <FormProvider {...methods}>
          <Ant.Form onFinish={methods.handleSubmit(onSubmit)}>
            <AntForm1 />
            <Ant.Divider />
            <AntForm2 />
            <Ant.Divider />
            <Ant.Button type="primary" htmlType="submit">
              保存する
            </Ant.Button>
          </Ant.Form>
        </FormProvider>
        <AntResult {...submitData} />
      </Ant.Space>
    </div>
  );
};

export default Antd;
