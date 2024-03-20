import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//RTK mutations
import {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUsersQuery,
} from "../redux/api";
//styles
import "./styles/auth.css";

function Register({ setToken, setUserId }) {
  const initialForm = {
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      number: "",
      street: "",
      zipcode: "",
    },
    phone: "",
  };
  const [form, updateForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();
  const { data: users } = useGetAllUsersQuery();

  const isRegister = location.pathname === "/register";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = isRegister
      ? await register(form)
      : await login({ username: form.username, password: form.password });

    if (error) {
      setError(error.data.message || error.data);
    } else {
      setToken(data.token);
      users.forEach((user) => {
        if (user.username === username && user.id) {
          setUserId(user.id);
        }
      });
      //navigate user to different page if successful
      navigate(`/`);
    }
  };

  const handleChange = ({ target }) => {
    if (error) {
      setError(null);
    }

    updateForm({ ...form, [target.name]: target.value });
  };

  const { name, address, phone, password, email, username } = form;

  return (
    <section className="padding">
      <h2>{isRegister ? "Register for" : "Login to"} Api Store </h2>
      {error && <p>Something went wrong! Please try again</p>}
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div className="formDiv">
            <label>
              First Name
              <input
                name="firstname"
                value={name.firstname}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name
              <input
                name="lastname"
                value={name.lastname}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                className="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label>
              City
              <input
                className="city"
                type="city"
                name="city"
                value={address.city}
                onChange={handleChange}
              />
            </label>
            <label>
              Street
              <input
                className="street"
                type="street"
                name="street"
                value={address.street}
                onChange={handleChange}
              />
            </label>
            <label>
              Zipcode
              <input
                className="zipcode"
                type="zipcode"
                name="zipcode"
                value={address.zipcode}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone
              <input
                className="phone"
                type="phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </label>
          </div>
        )}
        <label>
          Username
          <input name="username" value={username} onChange={handleChange} />
        </label>
        <label>
          Password
          <input
            className="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>{isRegister ? "Signup" : "Login"}</button>
      </form>
    </section>
  );
}

export default Register;
