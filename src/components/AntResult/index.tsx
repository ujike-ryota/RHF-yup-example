import * as Ant from "antd";

type FormValues = {
  name: string;
  gender: string;
  age: number;
  favoriteFood: string;
  favoriteEvenNumber: Array<number>;
};

export const AntResult = (props: FormValues) => {
  return (
    <div>
      <Ant.Divider orientation="left">名前</Ant.Divider>
      <Ant.Typography>{props.name ?? props.name}</Ant.Typography>
      <Ant.Divider orientation="left">性別</Ant.Divider>
      <Ant.Typography>{props.gender ?? props.gender}</Ant.Typography>
      <Ant.Divider orientation="left">年齢</Ant.Divider>
      <Ant.Typography>{props.age ?? props.age}歳</Ant.Typography>
      <Ant.Divider orientation="left">好きな食べ物</Ant.Divider>
      <Ant.Typography>
        {props.favoriteFood ?? props.favoriteFood}
      </Ant.Typography>
      <Ant.Divider orientation="left">好きな偶数</Ant.Divider>
      <Ant.Typography>
        {props.favoriteEvenNumber &&
          props.favoriteEvenNumber.map((value) => `${value} `)}
      </Ant.Typography>
    </div>
  );
};
