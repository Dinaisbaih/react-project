import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signup } from "../store/actions/authActions";
import { FormInput } from "../styles";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <FormInput
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter username"
        />
        <FormInput
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <FormInput
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <FormInput
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="Enter your firstName"
        />
        <FormInput
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Enter your lastName"
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
