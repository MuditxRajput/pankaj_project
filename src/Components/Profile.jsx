import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    gender: '',
    country: '',
    state: '',
    language: '',
    timeZone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 px-4">
        <div className="relative w-full md:w-[650px]">
          <input
            type="text"
            className="py-4 px-6 rounded-full w-full bg-gray-200 font-bold text-purple-900 text-xl"
            value="Employia"
            readOnly
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-700 flex items-center justify-center"
          >
            <CgProfile className="text-3xl" />
          </button>
        </div>
        <div className="ml-3 bg-purple-600 px-6 py-1 text-white rounded-xl">
          Credits
          <p>100</p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-lg md:max-w-3xl">
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r pr-4 mb-4 md:mb-0">
              <p className="font-bold text-xl">Profile</p>
              <hr className="font-bold mt-4 text-black" />
              <ul>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab("About Me")}
                    className="text-black hover:bg-slate-300 rounded-lg px-2 py-1 w-full text-left"
                  >
                    About Me
                  </button>
                </li>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab("Settings")}
                    className="text-black hover:bg-slate-300 rounded-lg px-2 py-1 w-full text-left"
                  >
                    Settings
                  </button>
                </li>
                <li className="py-2">
                  <button
                    onClick={() => setActiveTab("Feedback")}
                    className="text-black hover:bg-slate-300 rounded-lg px-2 py-1 w-full text-left"
                  >
                    Feedback
                  </button>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 pl-4">
              {activeTab === "About Me" && (
                <div>
                  <h2 className="text-2xl mb-4">About Me</h2>
                  <p>This is the About Me section.</p>
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "Settings" && (
                <div>
                  <h2 className="text-2xl mb-4">Settings</h2>
                  <p>This is the Settings section.</p>
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "Feedback" && (
                <div>
                  <h2 className="text-2xl mb-4">Feedback</h2>
                  <p>This is the Feedback section.</p>
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "Profile" && (
                <div>
                  <div className="flex items-center mb-6">
                    <CgProfile className="text-4xl mr-3" />
                    <div>
                      <h2 className="text-xl font-bold">Guy Hawkins</h2>
                      <p className="text-gray-600">willie.jennings@example.com</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Shahid"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Kapoor"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Display Name</label>
                        <input
                          type="text"
                          name="displayName"
                          value={formData.displayName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="ShahidKapoor"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Gender</label>
                        <input
                          type="text"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Male"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="India"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Tamil Nadu"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Language</label>
                        <input
                          type="text"
                          name="language"
                          value={formData.language}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="Tamil"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Time Zone</label>
                        <input
                          type="text"
                          name="timeZone"
                          value={formData.timeZone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-lg"
                          placeholder="IST"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end mt-6">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                      >
                        Save
                      </button>
                    </div>
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
