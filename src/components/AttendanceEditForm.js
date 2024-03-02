import React, { useState } from 'react';

const AttendanceEditForm = ({ attendance, onUpdateAttendance, onCancelEdit }) => {
  const [updatedAttendance, setUpdatedAttendance] = useState(attendance);

  const handleInputChange = (e) => {
    setUpdatedAttendance({ ...updatedAttendance, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAttendance(updatedAttendance);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <div className="flex items-center">
        <strong>{attendance.studentName}</strong> -
        <select
          name="status"
          value={updatedAttendance.status}
          onChange={handleInputChange}
          className="border rounded px-2 py-1 ml-2"
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
        </select>
      </div>
      <div className="mt-2">
        <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2">
          Save
        </button>
        <button onClick={onCancelEdit} className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AttendanceEditForm;
