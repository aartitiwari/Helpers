import React from "react";
import useRefData from "./useRefData";

const Example = () => {
  const [text, setText] = React.useState("");
  const textRef = useRefData(text);

  const onSendBtnClick = React.useCallback(() => {
    console.log("value of text:", textRef.current);
  }, []);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SendButton onClick={onSendBtnClick} />
    </div>
  );
};

function _SendButton({ onClick }) {
  console.log("render SendButton");
  return <button onClick={onClick}>send</button>;
}

const SendButton = React.memo(_SendButton);

export default Example;
