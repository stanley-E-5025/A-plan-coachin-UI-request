import React from "react";

export default function FileCard() {
  return (
    <div className="file-card">
      <div>
        Select a file below. When it is uploaded, a link will be displayed to
        the uploaded file.
      </div>

      <div>
        <button className="btn-note">chose a file</button>
      </div>
    </div>
  );
}
