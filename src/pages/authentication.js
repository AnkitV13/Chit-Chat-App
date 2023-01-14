import React from "react";
import "../styles/authentication.css";
import {auth, provider} from "../lib/firebase";
import Google from "../images/google.png";
import AuthImage from "../images/authentication.jpg";

export default function Authentication() {

  const signIn=()=>{
    auth.signInWithPopup(provider).catch(error=>alert(error));
  };

  return (
    <div className="authentication">
      <h1>Chit-Chat</h1>
      <img src={AuthImage} className="auth-image" />
      <div className="google-button-wrapper mt-4"onClick={signIn}>
        <div className="google-button-cover">
          <div className="google-image">
            <img src={Google} />
          </div>
          <div className="google-button-text">
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}
