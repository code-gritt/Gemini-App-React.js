import React, { useState } from "react";
import "./Sidebar2.css";
import { assets } from "../../../public/assets/assets";

const Sidebar2 = () => {
  const [extended, setExtended] = useState(false);
  return (
    <>
      <input type="checkbox" id="menu" />
      <label for="menu" class="icon">
        <div class="menu"></div>
      </label>

      <nav>
        <ul>
          <div className="sidebar_main">
            <div className="top">
              <div className="new-chat">
                <img
                  style={{ position: "relative", right: "5px" }}
                  className="menu"
                  src={assets.plus_icon}
                  alt="newlogo"
                />
                <p>New Chat</p>
              </div>
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
            </div>
          </div>

          <li>
            <i class="material-icons">sentiment_satisfied</i>Grade B
          </li>
          <li>
            <i class="material-icons">sentiment_neutral</i>Grade C
          </li>
          <li>
            <i class="material-icons">sentiment_dissatisfied</i>Grade D
          </li>
          <li>
            <i class="material-icons">sentiment_very_dissatisfied</i>Grade E
          </li>
        </ul>

        {/* <div className="top">
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
        </div> */}
      </nav>
    </>
  );
};

export default Sidebar2;
