import type { NextPage } from "next";
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form1, Form1Validation } from "../../components/Form1";
import { Form2, Form2Validation } from "../../components/Form2";

type FormValues = {
  name: string;
  gender: string;
  age: number;
  favoriteFood: string;
  favoriteEvenNumber: Array<number>;
};

const schema = yup.object().shape({
  ...Form1Validation,
  ...Form2Validation,
});

const Nest: NextPage = () => {
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
    console.log(data);
    setSubmitData(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>フォーム</h1>
      <hr />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Form1 />
          <hr />
          <Form2 />
          <hr />
          <input type="submit" />
        </form>
      </FormProvider>
      <hr />
      <p>名前: {submitData.name ?? submitData.name}</p>
      <p>性別: {submitData.gender ?? submitData.gender}</p>
      <p>年齢: {submitData.age ?? submitData.age}歳</p>
      <p>好きな食べ物: {submitData.favoriteFood ?? submitData.favoriteFood}</p>
      <p>
        好きな偶数:&nbsp;
        {submitData.favoriteEvenNumber &&
          submitData.favoriteEvenNumber.map((value) => `${value} `)}
      </p>
    </div>
  );
};

export default Nest;
