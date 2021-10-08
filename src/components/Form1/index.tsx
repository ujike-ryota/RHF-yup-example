export const Form1 = () => {
  return (
    <div>
      <div>
        <label>
          名前:
          <input name="name" />
        </label>
      </div>
      <div>
        性別:
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">男</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">女</label>
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">その他</label>
      </div>
      <div>
        <label>
          年齢:
          <input name="age" />歳
        </label>
      </div>
    </div>
  );
};
