import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import api from "../../apis/index";

function ResetPassword() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [state, setState] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const query = useQuery();
  const history = useHistory();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (state.newPassword === state.confirmNewPassword) {
        const userId = query.get("userId");
        const resetToken = query.get("token");

        if (!userId || !resetToken) {
          return alert(
            "This password reset link is invalid. Please generate a new one."
          );
        }

        const response = await api.post("/password-reset", {
          password: state.newPassword,
          token: resetToken,
          userId,
        });

        console.log(response);

        history.push("/login");
      } else {
        alert("Passwords don't match!");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Password Reset</h1>

      <small>Please create a new password below:</small>

      <div className="form-group">
        <label htmlFor="passwordReset">New Password</label>
        <input
          type="password"
          id="passwordReset"
          className="form-control"
          name="newPassword"
          value={state.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="passwordResetConfirm">Confirm New Password</label>
        <input
          type="password"
          id="passwordResetConfirm"
          className="form-control"
          name="confirmNewPassword"
          value={state.confirmNewPassword}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Reset Password
      </button>
    </form>
  );
}

export default ResetPassword;
