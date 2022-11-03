import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, e.target.value);
  };
  return (
    <Container md="12">
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Form Signin</Card.Title>
          <Form>
            {/* <TextInputWithLabel label="Email Addres" /> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </Form.Group>
            <SButton variant="primary">Submit</SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignIn;
