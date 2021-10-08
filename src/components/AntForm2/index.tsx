import * as Ant from "antd";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export const Form2Validation = {
  favoriteFood: yup.string().nullable(),
  favoriteEvenNumber: yup
    .array()
    .min(1)
    .transform((value) => value ?? []),
};

export const AntForm2 = () => {
  return (
    <Ant.Form>
      <Ant.Form.Item label="好きな食べ物">
        <Ant.Input />
      </Ant.Form.Item>
      <Ant.Form.Item label="好きな偶数(2つまで)">
        <Ant.Checkbox.Group>
          {[...Array(10)].map(
            (_, i) =>
              !(i % 2) && (
                <Ant.Checkbox key={i} value={i}>
                  {i}
                </Ant.Checkbox>
              )
          )}
        </Ant.Checkbox.Group>
      </Ant.Form.Item>
    </Ant.Form>
  );
};
