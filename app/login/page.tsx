import React from "react";
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-300">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
