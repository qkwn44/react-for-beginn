import styled from "styled-components";

//TS : Theme에 접근 가능 object 자동완성으로 알려줌
//theme.ts를 props로 받아 사용
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Container>
      <H1>Title</H1>
    </Container>
  );
}

export default App;

// https://styled-components.com/docs/api#typescript
