// components/Chat.jsx
'use client';

import React from 'react';
import SendbirdApp from "@sendbird/uikit-react/App";

const APP_ID = "016704FA-99AD-4A03-8844-24094E16ACCA";
const USER_ID = "Teddy";

const Chat = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
};

export default Chat;