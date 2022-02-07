import React from "react";
import Input from "./input";
export default function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      <button type="submit">Login </button>
    </form>
  );
}
