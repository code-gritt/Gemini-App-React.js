import React from "react";
import "./Sidebar.css";
import { assets } from "../../../public/assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="logo" />
        <div className="new-chat">
          <img className="menu" src={assets.plus_icon} alt="newlogo" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img className="menu" src={assets.message_icon} alt="messagelogo" />
            <p>What is React...</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img className="menu" src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item">
          <img className="menu" src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="bottom-item">
          <img className="menu" src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
