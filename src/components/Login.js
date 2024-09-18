import React, { useState } from 'react';
import { Form, Input, Button, message, Typography, Row, Col, Card, Image } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../data/FirebaseConfig'; // Import the auth from Firebase config
import useTitle from '../hooks/UseTitle';
import logo from '../assets/Selichot2.png'; // Import the logo image

const { Text } = Typography;

function Login() {
  useTitle('Login - Selichot');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      message.success('Login successful!');
      navigate('/');
    } catch (error) {
      message.error('Login failed: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <Row justify="center" style={{ marginTop: '100px' }}>
      <Col xs={24} sm={16} md={12} lg={8}>
        <Card style={{ backgroundColor: '#ececeb', padding: '20px', borderRadius: '8px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Image src={logo} alt="Selichot Logo" preview={false} style={{ maxWidth: '300px' }} />
          </div>
          <Form onFinish={handleLogin} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              className="custom-form-label"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              className="custom-form-label"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Login
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Text className="sub-text">
              Don't have an account? <Link to="/signup">Create an account</Link>
            </Text>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
