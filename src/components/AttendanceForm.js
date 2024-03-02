import React, { useState } from 'react';

const AttendanceForm = ({ onAddAttendance }) => {
  const [studentName, setStudentName] = useState('');
  const [status, setStatus] = useState('present');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAttendance({ studentName, status });
    setStudentName('');
    setStatus('present');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center mb-2">
        <label className="mr-2">Student Name:</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
        </select>
      </div>
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Attendance
      </button>
    </form>
  );
};

export default AttendanceForm;
