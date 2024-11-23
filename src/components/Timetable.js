import React, { useState } from "react";
import "../styles/Timetable.css";

const roles = {
  Teacher: ["Create", "Edit", "Delete"],
  Student: [],
};

const Timetable = ({ currentUser }) => {
  const [timetable, setTimetable] = useState([
    { id: 1, subject: "Math", date: "2024-12-01", time: "7:30 AM" },
    { id: 2, subject: "Science", date: "2024-12-02", time: "9:00 AM" },
    { id: 3, subject: "Art", date: "2024-12-03", time: "11:00 AM" },
  ]);

  const [newEntry, setNewEntry] = useState({ subject: "", date: "", time: "" });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const hasPermission = (permission) =>
    roles[currentUser?.role]?.includes(permission);


  const handleInputChange = (e) => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value,
    });
  };


  const handleAddOrEdit = () => {
    if (!newEntry.subject || !newEntry.date || !newEntry.time) {
      alert("Please fill in all fields before adding.");
      return;
    }

    if (editMode) {
      setTimetable(
        timetable.map((entry) =>
          entry.id === editId ? { ...entry, ...newEntry } : entry
        )
      );
      setEditMode(false);
      setEditId(null);
    } else {
      setTimetable([ ...timetable, { id: Date.now(), ...newEntry } ]);
    }
    setNewEntry({ subject: "", date: "", time: "" });
  };

  const handleDelete = (id) => {
    setTimetable(timetable.filter((entry) => entry.id !== id));
  };


  const handleEdit = (entry) => {
    setNewEntry({ subject: entry.subject, date: entry.date, time: entry.time });
    setEditMode(true);
    setEditId(entry.id);
  };

  return (
    <div className="timetable-container">
      <header>
        <h1 className="header-title">
          {currentUser?.role === "Student" ? "Class TimeTable" : "Timetable Generator"}
        </h1>
      </header>

      <div className="action-buttons">
        {hasPermission("Create") && (
          <button
            onClick={handleAddOrEdit}
            className="action-button"
          >
            {editMode ? "Update Activity" : "Add Activity"}
          </button>
        )}
      </div>

      <div className="form-container">
        <form>
          {hasPermission("Create") && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={newEntry.subject}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <input
                  type="date"
                  name="date"
                  value={newEntry.date}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <input
                  type="time"
                  name="time"
                  value={newEntry.time}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </>
          )}
        </form>
      </div>

      <div className="table-container">
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              {hasPermission("Edit") && <th>Edit</th>}
              {hasPermission("Delete") && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {timetable.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.time}</td>
                <td>{entry.subject}</td>
                <td>{entry.subject}</td>
                <td>{entry.subject}</td>
                <td>{entry.subject}</td>
                <td>{entry.subject}</td>
                {hasPermission("Edit") && (
                  <td>
                    <button
                      onClick={() => handleEdit(entry)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                  </td>
                )}
                {hasPermission("Delete") && (
                  <td>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
