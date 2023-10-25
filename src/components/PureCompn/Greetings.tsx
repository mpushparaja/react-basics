import { memo } from "react";

export default memo(function Greetings(props: any) {
  console.log("greetings rendered...");
  return <div>Hello, {props.name}!</div>;
});
