
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postAdminUser } from '../../helpers/axiosHelper';
import { toast } from 'react-toastify';


export const RegistrationForm =()=> {
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
     if(form.password != form.confirmPassword){
        return toast.error("password not match");
     }
     const{confirmPassword, ...rest}=form;
     const {status,message}= await postAdminUser(rest);
     toast[status](message);
     //console.log(result);
    
      }
  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>REGISTRATION FORM</h3>
      <hr />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="fName"
          placeholder="Enter name"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>last Name</Form.Label>
        <Form.Control
          type="text"
          name="lName"
          placeholder="Enterlastname"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter phone"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          type="date"
          name="Dob"
          placeholder="Enter Dob"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Adress</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter address"
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter address"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="*********"
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>confirm password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Enter address"
          onChange={handleOnChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="text-end">
        {" "}
        already registered?
        <Link to="/">
          Login
        </Link>Now
      </div>
    </Form>
  );
}

export default  RegistrationForm;