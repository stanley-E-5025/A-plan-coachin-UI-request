import React from "react";

export default function ChatCard() {
  return (
    <div className="chat-card ">
      <div className="chat-header">Messages</div>

      <div className="chat-content  ">
        <div className="chat-txt">
          een the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like
        </div>

        <div className="chat-txt2">
          een the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          lead
        </div>
      </div>

      <div className="chat-input">
        <div className="notest-card-input-container">
          <div className="notest-ic">
            <input className="notes-input" placeholder="Let's Chat " />
          </div>

          <div>
            <button className="btn-post">
              <i className="far fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
