import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomText(20),
        })
      );
      
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[510px] overflow-y-scroll mt-5 rounded-md bg-slate-100 p-2 border border-black flex flex-col-reverse">
        {chatMessages.map((c, index) => {
          return <ChatMessage key={index} name={c.name} message={c.message} />;
        })}
      </div>
      <form className="w-full p-1 ml-2"
       onSubmit={(e) => 
        {
          e.preventDefault()
          dispatch(addMessage({name: "Gowtham", message: liveMessage}))
          setLiveMessage("")
       }}

      >
        <input
          type="text"
          placeholder="Type your message..."
          className="border px-2 rounded-sm py-1 border-black w-3/4"
          value = {liveMessage}
          onChange = {(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-red-600 rounded-sm text-lg text-white py-1 px-3 mx-2">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
