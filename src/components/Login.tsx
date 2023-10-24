import { useState } from "react";
import styles from "./Login.module.scss";

export const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("form data", formData);
  };

  return (
    <div className={styles.formControl}>
      <h3> Controllable form </h3>
      <label htmlFor="">Username : </label>
      <input
        className={styles.input}
        type="text"
        name="userName"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Password : </label>
      <input
        type="password"
        className={styles.input}
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
