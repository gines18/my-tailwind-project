import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react';


async function fetchUser() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return user;
}

const UserProfile = async () => {
  const user = await fetchUser();

  return (
    <section className="flex bg-slate-400">
    <div className="flex flex-col ">
      <div>Welcome!</div>
      <div>{user?.email || "No user found"}</div>
    </div>
    </section>
  );
}

export default UserProfile;