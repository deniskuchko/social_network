import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let state = props.dialogsPage;

  let newMessageBody = state.newMessageBody;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} photo={d.photo} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}
      </div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea
        onChange={onNewMessageChange}
        value={newMessageBody}
        placeholder="Enter your message"
      ></textarea>
      <button onClick={onSendMessageClick}>Add new message</button>
    </div>
  );
};

export default Dialogs;
