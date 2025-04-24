
import React from 'react';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Login to Farmfing</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
