import React, { useState, useEffect } from 'react';
import AttendanceForm from '../components/AttendanceForm';
import AttendanceList from '../components/AttendanceList';
import { fetchAttendance, addAttendance, deleteAttendance, updateAttendance } from '../apis/api';

const AttendancePage = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const data = await fetchAttendance();
      setAttendance(data);
    } catch (error) {
      console.error('Error loading attendance:', error);
    }
  };

  const handleAddAttendance = async (newAttendance) => {
    try {
      await addAttendance(newAttendance);
      loadAttendance();
    } catch (error) {
      console.error('Error adding attendance:', error);
    }
  };

  const handleDeleteAttendance = async (id) => {
    try {
      await deleteAttendance(id);
      loadAttendance();
    } catch (error) {
      console.error('Error deleting attendance:', error);
    }
  };

  const handleUpdateAttendance = async (id, updatedAttendance) => {
    try {
      await updateAttendance(id, updatedAttendance);
      loadAttendance();
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Attendance Records</h1>
      <AttendanceForm onAddAttendance={handleAddAttendance} />
      <AttendanceList
        attendance={attendance}
        onDeleteAttendance={handleDeleteAttendance}
        onUpdateAttendance={handleUpdateAttendance}
      />
    </div>
  );
};

export default AttendancePage;
