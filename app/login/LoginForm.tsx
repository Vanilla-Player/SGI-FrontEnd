const LoginForm: React.FC = () => {
  return (
    <form className="flex h-auto w-auto flex-col items-center justify-center rounded-md bg-gradient-to-r from-emerald-800 to-sky-900 shadow-2xl drop-shadow-2xl">
      <p className="p-8 text-2xl ">Inmersive Experience</p>
      <div>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="bg-transparent py-1"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border-y-2 bg-transparent py-1"
        />
      </div>
      <div className="mt-2 flex h-auto w-full justify-between p-1 px-14 py-5 align-middle text-sm">
        <button type="submit" className="rounded-md border-2 px-4 py-1">
          Login
        </button>
        <p className="py-1 ">Forgot?</p>
      </div>
    </form>
  );
};

export default LoginForm;
