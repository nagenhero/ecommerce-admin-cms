
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginAction } from "../../pages/login-registration/loginRegisterAction.js";

import {useDispatch} from "react-redux";


export const LoginForm = () => {
  const dispatch =useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
 
   const handleOnSubmit = async e =>{
     e.preventDefault();
      console.log(form);
      dispatch(loginAction(form));
      
     }
    

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleOnChange}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        LOGIN
      </Button>
    </Form>
  );
};
