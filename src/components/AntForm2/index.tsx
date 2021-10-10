import * as Ant from "antd";
import { useFormContext, Controller } from "react-hook-form";
import * as yup from "yup";

export const AntForm2Validation = {
  favoriteFood: yup.string().nullable(),
  favoriteEvenNumber: yup
    .array()
    .min(1)
    .transform((value) => value ?? []),
};

export const AntForm2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="favoriteFood"
        render={({ field, fieldState }) => (
          <Ant.Form.Item
            label="好きな食べ物(任意)"
            validateStatus={fieldState.error ? "error" : ""}
            help={errors.favoriteFood?.message}
          >
            <Ant.Input {...field} />
          </Ant.Form.Item>
        )}
      />

      <Controller
        control={control}
        name="favoriteEvenNumber"
        render={({ field, fieldState }) => (
          <Ant.Form.Item
            label="好きな偶数(最低1つ)"
            validateStatus={fieldState.error ? "error" : ""}
            help={errors.favoriteEvenNumber?.message}
          >
            <Ant.Checkbox.Group {...field}>
              {[...Array(11)].map(
                (_, i) =>
                  !(i % 2) && (
                    <Ant.Checkbox key={i} value={i}>
                      {i}
                    </Ant.Checkbox>
                  )
              )}
            </Ant.Checkbox.Group>
          </Ant.Form.Item>
        )}
      />
    </>
  );
};
