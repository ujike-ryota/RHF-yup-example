import * as Ant from "antd";
import { useFormContext, Controller } from "react-hook-form";
import * as yup from "yup";

export const AntForm1Validation = {
  name: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().positive().integer().required(),
};

export const AntForm1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <Ant.Form.Item
            label="名前"
            validateStatus={fieldState.error ? "error" : ""}
            help={errors.name?.message}
            required
          >
            <Ant.Input {...field} />
          </Ant.Form.Item>
        )}
      />

      <Controller
        control={control}
        name="gender"
        render={({ field, fieldState }) => (
          <Ant.Form.Item
            label="性別"
            validateStatus={fieldState.error ? "error" : ""}
            help={errors.gender?.message}
            required
          >
            <Ant.Radio.Group {...field}>
              <Ant.Radio value="male">男</Ant.Radio>
              <Ant.Radio value="female">女</Ant.Radio>
              <Ant.Radio value="other">その他</Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        )}
      />

      <Controller
        control={control}
        name="age"
        render={({ field, fieldState }) => (
          <Ant.Form.Item
            label="年齢"
            validateStatus={fieldState.error ? "error" : ""}
            help={errors.age?.message}
            required
          >
            <Ant.Input {...field} />
          </Ant.Form.Item>
        )}
      />
    </>
  );
};
