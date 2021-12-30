import React from "react";
import UserProfileCard from "../componets/UserProfileCard";
import GoalsCards from "../componets/GoalsCard";
import NotesCard from "../componets/NotesCard";
import ChatCard from "../componets/ChatCard";
import FileCard from "../componets/FileCard";

export default function Dashboard() {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="col-md-5">
          <div className="left-cards-container  ">
            <UserProfileCard />
            <GoalsCards />
          </div>
        </div>
        <div className="col-md-7">
          <NotesCard />

          <ChatCard />

          <FileCard />
        </div>
      </div>
    </div>
  );
}
