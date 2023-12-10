"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

/*
INFO: WHY WE CREATED AuthProvider component ? 

- SessionProvider uses ContextAPI under the hood.
- ContextAPI can only be used in client side rendering.
- If we set our layout.js file as client side, we cannot use metadata files because
metadata can be used only in server side.
- So we create this AuthProvider component, declare it as CSR, and call it in a SSR.
*/
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
