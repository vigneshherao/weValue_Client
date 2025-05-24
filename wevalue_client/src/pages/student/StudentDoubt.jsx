import React from "react";
import {
  FaImage,
  FaVideo,
  FaHeart,
  FaRegComment,
  FaShare,
} from "react-icons/fa";
import { HiMiniHandRaised } from "react-icons/hi2";
import { MdMoreVert } from "react-icons/md";

const StudentDoubt = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Hello Vignesh
      </h1>
      <p className="text-gray-600 mt-1">
        What's new with you? Would you like to share something with community?
        <span>😊</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <input
              type="textarea"
              className="w-full h-24 p-3 border border-gray-200 rounded-lg text-gray-500 "
              placeholder="Share your thoughts..."
            />{" "}
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1 cursor-pointer">
                <FaImage /> Image
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <FaVideo /> Video
              </div>
              <button className="ml-auto px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                Publish
              </button>
            </div>
          </div>
          {[12, 13, 14].map((i) => (
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="Lucia"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Lucia Schaefer</p>
                    <p className="text-xs text-gray-400">5 mins ago · Public</p>
                  </div>
                </div>
                <MdMoreVert className="text-gray-500 text-lg cursor-pointer" />
              </div>
              <p className="text-gray-700 mt-4">
                👋 Hi, I am a beginner interior designer and I am looking for
                someone who would like to work on a project together. Someone
                willing? 😊
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
                <div className="flex items-center gap-1">
                  <HiMiniHandRaised className="text-red-500" /> 187 Rasied
                </div>
                <div className="flex items-center gap-1">
                  <FaRegComment /> 24 Thoughts
                </div>
                <div className="flex items-center gap-1">
                  <FaShare /> 3 Tags
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex gap-6 mb-4">
              <button className="text-sm font-semibold text-blue-600 border-b-2 border-blue-600">
                Trending topic
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-1">Ongoing event</p>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
              Physics Clearing Section
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              if you have any doubts regarding the physics subject, please feel
              free to ask. I will be available for the next 2 hours.
            </p>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Details</p>
              <p className="text-sm text-gray-500">📋 Task: Physcis Doubt</p>
              <p className="text-sm text-gray-500">Ready to reply</p>
              <div className="flex mt-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/30?img=${i}`}
                    alt=""
                    className="w-7 h-7 rounded-full -ml-2 border-2 border-white"
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button className="mt-4 w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-teal-600">
                Participate Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDoubt;
