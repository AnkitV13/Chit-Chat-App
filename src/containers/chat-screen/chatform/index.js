import React, { useState } from "react";
import { MyForm } from "../../../components";
import { IoMdSend } from "react-icons/io";
import UseAuthListener from "../../../hooks/use-auth-listener";
import { db } from "../../../lib/firebase";
import firebase from "firebase";


export default function ChatForm() {

  const [message, setMessage] = useState();

  const user = UseAuthListener();

  const sendMessage=(e)=>{
    e.preventDefault();
    db.collection("chat").add({
      user: user.displayName,
      userImage: user.photoURL,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch(error=>alert(error));
    setMessage("");
  };

  return (
    <MyForm>
      <MyForm.FormGroup className="form-group formInput__group">
        <MyForm.FormInput
          className="form-control forminput"
          placeholder="Boldo Na Zara..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <MyForm.FormButton
          className="btn btn-success submitButton"
          onClick={sendMessage}
        >
          <IoMdSend />
        </MyForm.FormButton>
      </MyForm.FormGroup>
    </MyForm>
  );
}
