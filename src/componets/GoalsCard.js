import React from "react";

export default function GoalsCards() {
  const Goals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {Goals.map((card) => (
        <div key={Math.random()} className="goals-list-card">
          <div className=" goals-title">
            <div className="title">Challenges I’m facing...</div>
            <div className="view-all">view all </div>
          </div>

          <div className="goals-content">
            <div>
              {" "}
              imply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing
            </div>

            <div className="Archive">
              <i className="fas fa-archive"></i>
            </div>
          </div>

          <div className="goals-input-container">
            <div>
              <input className=" goals-input" placeholder="Add goals" />
            </div>

            <div>
              <button className="goals-bt">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
