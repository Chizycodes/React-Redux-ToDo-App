import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/actions/auth";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction({ username, password }));
  };

  useEffect(() => {
    if (auth.isLogged) {
      navigate("/todolist");
    }
  }, [auth]);
  return (
    <div className="login">
      <h3>Welcome to MyToDo!</h3>
      <div className="login-div">
        <h2>Login</h2>
        <form action="/" method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              placeholder="Enter Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button text="Login" className="login-btn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
