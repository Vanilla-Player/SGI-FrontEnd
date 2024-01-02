import React from 'react';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
  const handleLoginSubmit = (username: string, password: string) => {
    // Implement your login logic here (e.g., API calls, authentication)
    console.log(`Logging in with username: ${username} and password: ${password}`);
    // Replace the console.log with your actual login logic
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-blue-300">
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
