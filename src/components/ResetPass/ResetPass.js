import React, { useState } from "react";
import history from '../../history';
import {getSecurityCode,resetPassword} from '../../redux/actions/users';

const ResetPass = () => {
  const [sendCode, setSendCode] = useState(false);
  const [resetForm, setResetForm] = useState({
    email: "",
  });
  const handleResetSubmit = (e) => {
    e.preventDefault();
    getSecurityCode(resetForm).then((res) => {
        if(res){
            setNewpassForm(Object.assign({},newpassForm,{
                email:resetForm.email
            }))
            setSendCode(true)
        }
    })
  };

  const [newpassForm,setNewpassForm] = useState({
      email:"",
      code:"",
      password:""
  });

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    resetPassword(newpassForm).then((res) => {
        if(res){
            history.push('/login')
        }else {
            alert('security code error!')
        }
    })
  }

  return (
    <div className="container">
      {sendCode ? (
        <form onSubmit={handleNewPasswordSubmit}>
          <h3>Reset Password</h3>
          <div className="form-group">
            <label>Security Code:</label>
            <input type="text" className="form-control" value={newpassForm.code} onChange={(e) => {
                setNewpassForm(Object.assign({},newpassForm,{code:e.target.value}))
            }} ></input>
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" className="form-control" value={newpassForm.password} onChange={(e) => {
                setNewpassForm(Object.assign({},newpassForm,{password:e.target.value}))
            }} ></input>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetSubmit}>
          <h3>Reset Password</h3>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={resetForm.email}
              onChange={(e) => {
                setResetForm({ email: e.target.value });
              }}
              required
            ></input>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};


export default ResetPass;