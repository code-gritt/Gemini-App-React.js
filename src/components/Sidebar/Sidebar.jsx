import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../../public/assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar_main">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="logo"
        />
        <div className="new-chat">
          <img
            style={{ position: "relative", right: "5px" }}
            className="menu"
            src={assets.plus_icon}
            alt="newlogo"
          />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img
                className="menu"
                src={assets.message_icon}
                alt="messagelogo"
              />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img className="menu" src={assets.question_icon} alt="" />
          {extended ? <p className="bottom-words">Help</p> : null}
        </div>
        <div className="bottom-item">
          <img className="menu" src={assets.history_icon} alt="" />
          {extended ? <p className="bottom-words">Activity</p> : null}
        </div>
        <div className="bottom-item">
          <img className="menu" src={assets.setting_icon} alt="" />
          {extended ? <p className="bottom-words">Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
