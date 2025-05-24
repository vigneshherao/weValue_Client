import React from "react";

const StudentAssessment = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/notebook-and-pen-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--note-book-pencil-school-education-pack-illustrations-4526309.png"
          alt="No assessment"
          className="w-48 h-48 mb-6"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No Assessment Scheduled
        </h2>
        <p className="text-gray-500">
          You're all caught up! We'll notify you when a new assessment is
          available.
        </p>
      </div>
    </div>
  );
};

export default StudentAssessment;
