import Operation from "antd/lib/transfer/operation";

export const Form2 = () => {
  return (
    <div>
      <div>
        <label>
          好きな食べ物:
          <input name="food" />
        </label>
      </div>
      <div>
        好きな偶数(2つまで)
        <select>
          {[...Array(10)].map(
            (_, i) =>
              !(i % 2) && (
                <option key={i} value={i}>
                  {i}
                </option>
              )
          )}
        </select>
      </div>
    </div>
  );
};
