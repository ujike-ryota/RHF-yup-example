import type { NextPage } from "next";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  name: string;
  gender: string;
  age: number;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [submitData, setSubmitData] = useState({
    name: null,
    gender: null,
    age: null,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => setSubmitData(data);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>フォーム</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            名前:
            <input {...register("name")} />
          </label>
          <p>{errors.name?.message}</p>
        </div>
        <div>
          性別:
          <input
            type="radio"
            id="male"
            name="gender"
            value="男"
            {...register("gender")}
          />
          <label htmlFor="male">男</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="女"
            {...register("gender")}
          />
          <label htmlFor="female">女</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="その他"
            {...register("gender")}
          />
          <label htmlFor="other">その他</label>
          <p>{errors.gender?.message}</p>
        </div>
        <div>
          <label>
            年齢:
            <input {...register("age")} />歳
          </label>
          <p>{errors.age?.message}</p>
        </div>
        <hr />
        <input type="submit" />
        <hr />
        <p>名前: {submitData.name ?? submitData.name}</p>
        <p>性別: {submitData.gender ?? submitData.gender}</p>
        <p>年齢: {submitData.age ?? submitData.age}歳</p>
      </form>
    </div>
  );
};

export default Home;
