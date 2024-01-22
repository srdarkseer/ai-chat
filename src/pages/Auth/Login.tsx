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
    // Clear previous error messages
    setUsernameError("");
    setPasswordError("");

    let isValid = true;

    // Check if username is filled
    if (!username.trim()) {
      setUsernameError("Please enter your username.");
      isValid = false;
    }

    // Check if password is filled
    if (!password.trim()) {
      setPasswordError("Please enter your password.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    console.log(username, password);

    // Sample login logic
    if (username === "admin@admin.com") {
      localStorage.setItem("user", "isAdmin");
      navigate("/ai/upload");
    } else {
      localStorage.setItem("user", "isUser");
      navigate("/ai/chat");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-12 w-3/5">
        <div className="col-span-6">
          <img
            src="src/assets/images/ai.jpeg"
            className="shadow-lg w-full object-cover"
            alt="AI"
          />
        </div>
        <div className="px-8 py-6 text-left bg-white w-96 shadow-lg flex flex-col justify-center gap-7 col-span-6">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                {usernameError && (
                  <p className="text-red-500 text-xs mt-1">{usernameError}</p>
                )}
              </div>

              <div>
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>

              <div className="flex items-baseline justify-between">
                <Button variant="default" size="default" className="w-full">
                  Login
                </Button>
              </div>

              <div>
                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-slate-400 hover:underline hover:text-slate-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
