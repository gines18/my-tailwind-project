import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Login() {
 const { getUser, isAuthenticated } = getKindeServerSession();
 const user = await getUser();

  return (
    <div>
      <>
        {!( await isAuthenticated()) ? (
          <div>
            <LoginLink>Sign in / </LoginLink>
            <RegisterLink>Sign up</RegisterLink>
          </div>
        ) : (
          <div>
            <p>Hi, {user?.given_name}</p>
            <LogoutLink>Log out</LogoutLink>
          </div>
        )}
      </>
    </div>
  );
}

export default Login;
