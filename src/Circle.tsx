import { useState } from "react";
import styled from "styled-components";

//Interface : object shape(객체모양)을 TS에게 설명
// props의 타입을 설명해야함
interface CircleProps {
  bgColor: string; //requried props
  borderColor?: string; //optional props '?'
  text?: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
const Conatiner = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  //type을 여러개 선언하고 싶을 경우 "|"로 타입 나누어 선언
  // boolean 타입으로 선언할 경우 에러 발생
  const [counter, setCounter] = useState<number | string>(1); //항상  default값을 설정해주는 것이 좋다
  // setCounter("hello");
  return (
    <Conatiner
      bgColor={bgColor}
      borderColor={borderColor ? borderColor : bgColor}
    >
      {text}
    </Conatiner>
  );
}

interface playObj {
  name: string;
  age: number;
}

const sayHello = (playObj: playObj) =>
  `Hello ${playObj.name} you are ${playObj.age} years old.`;

export default Circle;
