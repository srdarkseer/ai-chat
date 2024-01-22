import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    let isValid = true;

    if (!username.trim()) {
      setUsernameError("Please enter your username.");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      isValid = false;
    }

    if (!isValid) return;

    console.log(username, password);

    if (username === "admin@admin.com") {
      localStorage.setItem("user", "isAdmin");
      navigate("/ai/upload");
    } else {
      localStorage.setItem("user", "isUser");
      navigate("/ai/chat");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen bg-gray-100">
      <div className="absolute top-10 flex justify-center mb-4">
        <img
          src="src/assets/images/logo/openAI.png"
          alt="Logo"
          className="h-12 w-12"
        />
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-md max-w-sm w-full">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold  mb-2">QuickGPT</h1>
          <p className="text-sm  text-gray-600 mb-6">Login to your account.</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 mb-1 font-semibold "
            >
              Email or username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="john.doe@example.com"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {usernameError && (
              <p className="text-red-500 text-xs mt-1">{usernameError}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-1 font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-6">
            <Button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Login
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-slate-400 hover:underline hover:text-slate-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div>
        <p className="text-sm text-gray-600">Powered by QuickFox Consulting</p>
      </div>
    </div>
  );
};

export default LoginPage;
