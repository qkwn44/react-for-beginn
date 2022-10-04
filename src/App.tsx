import React, { useState } from "react";

// TS : 코드가 실행되기 전 오류 확인 가능

// any : type을 any로 선언하는건 지양해야한다.
function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //event의 type을 선언해줘야함 , onChange 함수가 InputElement에 의해 실행된다는 것을 의미
    const {
      currentTarget: { value },
    } = event;
    // 구조분해할당 const value = event.currentTarget.value 와 동일한 문법
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Hello ${value}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
