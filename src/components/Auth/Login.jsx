import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen w-screen items-center justify-center px-2">
      <div className="bg-zinc-800 border-2 border-emerald-600 rounded-xl p-6 sm:p-10 md:p-16 lg:p-20 w-full max-w-md">
        <h2 className="text-lg text-emerald-400 font-bold">Login</h2>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label
            htmlFor="email"
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "lightCyan",
            }}
          >
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="text-emerald-300 outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white"
          />

          <label
            htmlFor="password"
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "lightCyan",
            }}
          >
            Password
          </label>
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
              className="text-emerald-300 outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white w-full pr-20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-emerald-500 hover:underline cursor-pointer focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            style={{ marginTop: "2rem" }}
            className="bg-emerald-500 text-white px-4 py-3 cursor-pointer rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
