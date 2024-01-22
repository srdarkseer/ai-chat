import React, { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !username.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Sign up:", email, username, password);
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
          <h1 className="text-xl font-semibold  mb-2">Create your account</h1>
          <p className="text-sm  text-gray-600 mb-6">Sign up to get started.</p>
        </div>
        <form onSubmit={handleSignUp}>
          {error && (
            <p className="text-red-500 text-xs text-center mb-4">{error}</p>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-700 mb-1 font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="john.doe@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-700 mb-1 font-semibold"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-700 mb-1 font-semibold"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-slate-400 hover:underline hover:text-slate-500"
              >
                Login
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

export default SignUpPage;
