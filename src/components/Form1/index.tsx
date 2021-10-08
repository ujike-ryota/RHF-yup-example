import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export const Form1Validation = {
  name: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().positive().integer().required(),
};

export const Form1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div>
        <label>
          名前:
          <input {...register("name")} />
        </label>
        <p>{errors.name?.message}</p>
      </div>
      <div>
        性別:
        <input type="radio" id="male" value="男" {...register("gender")} />
        <label htmlFor="male">男</label>
        <input type="radio" id="female" value="女" {...register("gender")} />
        <label htmlFor="female">女</label>
        <input type="radio" id="other" value="その他" {...register("gender")} />
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
    </div>
  );
};
