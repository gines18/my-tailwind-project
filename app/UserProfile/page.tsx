import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react';
import WeatherPage from '../Weather/page'

async function fetchUser() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return user;
}

const UserProfile = async () => {
  const user = await fetchUser();
  if (!user) {
    return <section className="flex bg-slate-400">No user found</section>;
  }


  return (
    <>
  <section className="max-w-md mx-auto p-4 my-8 bg-white rounded shadow-md">
      <div className="flex flex-col items-center">
        
        <h2 className="text-lg font-bold">{user.given_name} {user.family_name}</h2>
        <p className="text-gray-600">{user.email}</p>
        {/* Add more user profile information here */}
       
      </div>
    </section>
    <section>
      <WeatherPage />
    </section>
    </>
  );
}

export default UserProfile;