import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Login() {
  try {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    return (
      <div>
        <>
          {!(await isAuthenticated()) ? (
            <div>
              <LoginLink>Sign in / </LoginLink>
              <RegisterLink>Sign up</RegisterLink>
            </div>
          ) : (
            <div>
              <a href="/UserProfile">
                <p>Hi, {user?.given_name}</p>
              </a>
              <LogoutLink>Log out</LogoutLink>
            </div>
          )}
        </>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Error:Please try again later</p>
      </div>
    );
  }
}

export default Login;
