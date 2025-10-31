
import axios from "axios";
import React, { useState } from "react";

const GetUser = () => {
  const [profile, setProfile] = useState(null);

  async function handleSubmit() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
        { withCredentials: true }
      );
     
       console.log(res?.data);
     
      setProfile(res.data); 
     
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  return (
    <div className="p-5">
      <button
        onClick={handleSubmit}
        className="bg-red-300 px-4 py-2 rounded hover:bg-red-400"
      >
        Get User Profile
      </button>

      {profile && (
        <div className="mt-3 bg-gray-100 p-3 rounded">
          <h3 className="font-semibold">User Profile</h3>
        </div>
      )}
    </div>
  );
};

export default GetUser;
