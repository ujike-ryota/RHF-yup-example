import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export const Form2Validation = {
  favoriteFood: yup.string().nullable(),
  favoriteEvenNumber: yup
    .array()
    .min(1)
    .transform((value) => value ?? []),
};

export const Form2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div>
        <label>
          好きな食べ物(任意):
          <input {...register("favoriteFood")} />
        </label>
        <p>{errors.favoriteFood?.message}</p>
      </div>
      <div>
        好きな偶数(最低1つ)
        {[...Array(11)].map(
          (_, i) =>
            !(i % 2) && (
              <span key={i}>
                <input
                  type="checkbox"
                  value={i}
                  {...register("favoriteEvenNumber")}
                />
                {i}
              </span>
            )
        )}
        <p>{errors.favoriteEvenNumber?.message}</p>
      </div>
    </div>
  );
};
