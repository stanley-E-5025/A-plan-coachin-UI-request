import React from "react";

export default function NotesCard() {
  return (
    <div className="notest-card">
      <div className="notest-card-btnsc">
        <div>
          <button className="btn-note">notes</button>
        </div>
        <div>
          <button className="btn-note">feedback</button>
        </div>
      </div>

      <div className="notest-card-input-container">
        <div className="notest-ic">
          <input className="notes-input" placeholder="write something" />
        </div>

        <div>
          <button className="btn-post">post</button>
        </div>
      </div>
    </div>
  );
}
