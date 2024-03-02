// import React, { useState } from 'react';
// import AttendanceEditForm from './AttendanceEditForm';

// const AttendanceList = ({ attendance, onDeleteAttendance, onUpdateAttendance }) => {
//   const [editingAttendanceId, setEditingAttendanceId] = useState(null);

//   const handleEdit = (id) => {
//     setEditingAttendanceId(id);
//   };

//   const handleCancelEdit = () => {
//     setEditingAttendanceId(null);
//   };

//   return (
//     <ul className="mb-4">
//       {attendance.map((record) => (
//         <li key={record._id} className="mb-2 flex items-center">
//           {editingAttendanceId === record._id ? (
//             <AttendanceEditForm
//               attendance={record}
//               onUpdateAttendance={(updatedAttendance) => {
//                 onUpdateAttendance(record._id, updatedAttendance);
//                 setEditingAttendanceId(null);
//               }}
//               onCancelEdit={handleCancelEdit}
//             />
//           ) : (
//             <>
//               <div>
//                 <strong>{record.studentName}</strong> - {record.status}
//               </div>
//               <div className="ml-2">
//                 <button
//                   onClick={() => handleEdit(record._id)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDeleteAttendance(record._id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default AttendanceList;

import React, { useState } from 'react';
import AttendanceEditForm from './AttendanceEditForm';

const AttendanceList = ({ attendance, onDeleteAttendance, onUpdateAttendance }) => {
  const [editingAttendanceId, setEditingAttendanceId] = useState(null);

  const handleEdit = (id) => {
    setEditingAttendanceId(id);
  };

  const handleCancelEdit = () => {
    setEditingAttendanceId(null);
  };

  return (
    <table className="w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">Student Name</th>
          <th className="border border-gray-400 px-4 py-2">Status</th>
          <th className="border border-gray-400 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map((record) => (
          <tr key={record._id}>
            <td className="border border-gray-400 px-4 py-2">{record.studentName}</td>
            <td className="border border-gray-400 px-4 py-2">{record.status}</td>
            <td className="border border-gray-400 px-4 py-2">
              {editingAttendanceId === record._id ? (
                <AttendanceEditForm
                  attendance={record}
                  onUpdateAttendance={(updatedAttendance) => {
                    onUpdateAttendance(record._id, updatedAttendance);
                    setEditingAttendanceId(null);
                  }}
                  onCancelEdit={handleCancelEdit}
                />
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(record._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteAttendance(record._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceList;

