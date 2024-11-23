import React, { useState } from "react";
import Login from "./components/Login";
import Timetable from "./components/Timetable";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      {!currentUser ? (
        <Login setCurrentUser={setCurrentUser} />
      ) : (
        <Timetable currentUser={currentUser} />
      )}
    </div>
  );
};

export default App;
