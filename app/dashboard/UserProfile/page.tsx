import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from 'react';
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

async function fetchUser() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return user;
}

const UserProfile = async () => {
  const user = await fetchUser();

  return (
    <div>
      <div>Welcome!</div>
      <div>{user?.email || "No user found"}</div>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
}

export default UserProfile;