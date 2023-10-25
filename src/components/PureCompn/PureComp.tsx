import { useState } from "react";
import Greetings from "./Greetings";

export default function PureComp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div>
      <label>Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Address </label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Greetings name={name} />
    </div>
  );
}
