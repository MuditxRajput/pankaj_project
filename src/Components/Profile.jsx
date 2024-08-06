import React, { useState } from 'react';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <>
      <div className="flex justify-center items-center mt-20 px-4">
        <div className="flex rounded-lg items-center w-full max-w-md">
          <input
            type="text"
            className="py-2 px-4 rounded-l-lg w-full"
            placeholder="Employia"
          />
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-700 flex items-center justify-center"
            >
              P
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-3xl">
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r pr-4 mb-4 md:mb-0">
              <ul>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab('About Me')}
                    className={`text-blue-500 hover:underline ${activeTab === 'About Me' ? 'font-bold' : ''}`}
                  >
                    About Me
                  </button>
                </li>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab('Settings')}
                    className={`text-blue-500 hover:underline ${activeTab === 'Settings' ? 'font-bold' : ''}`}
                  >
                    Settings
                  </button>
                </li>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab('Feedback')}
                    className={`text-blue-500 hover:underline ${activeTab === 'Feedback' ? 'font-bold' : ''}`}
                  >
                    Feedback
                  </button>
                </li>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab('Profile')}
                    className={`text-blue-500 hover:underline ${activeTab === 'Profile' ? 'font-bold' : ''}`}
                  >
                    Profile
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 pl-4">
              {activeTab === 'About Me' && (
                <div>
                  <h2 className="text-2xl mb-4">About Me</h2>
                  <p>This is the About Me section.</p>
                </div>
              )}
              {activeTab === 'Settings' && (
                <div>
                  <h2 className="text-2xl mb-4">Settings</h2>
                  <p>This is the Settings section.</p>
                </div>
              )}
              {activeTab === 'Feedback' && (
                <div>
                  <h2 className="text-2xl mb-4">Feedback</h2>
                  <p>This is the Feedback section.</p>
                </div>
              )}
              {activeTab === 'Profile' && (
                <div>
                  <h2 className="text-2xl mb-4">Profile Form</h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-gray-700">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Gender</label>
                      <select className="w-full px-3 py-2 border rounded-lg">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Age</label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter your age"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                      Close
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
