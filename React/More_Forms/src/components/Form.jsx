import React, { useState } from "react";

const HookForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstname(e.target.value);

    if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);

    if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters.");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords must match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    console.log(newUser);
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={handleFirstName} />

          {firstNameError ? <p>{firstNameError}</p> : ""}
        </div>

        <div>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={handleLastName} />

          {lastNameError ? <p>{lastNameError}</p> : ""}
        </div>

        <div>
          <label>Email: </label>
          <input type="text" value={email} onChange={handleEmail} />

          {emailError ? <p>{emailError}</p> : ""}
        </div>

        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={handlePassword} />

          {passwordError ? <p>{passwordError}</p> : ""}
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />

          {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
        </div>

        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};

export default HookForm;
