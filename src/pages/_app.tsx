import LoginLayout from "@/Layouts/loginLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Login from "./login";
import LogoutLayout from "@/Layouts/logoutLayput";


export default function App({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState<string | null>("");
  console.log("isauth in app", isAuth);
  useEffect(() => {
    const auth = localStorage.getItem("username");
    if (auth != null) {
      setIsAuth(auth);
    }

    console.log("check", auth);
  }, []);
  return (
    <RecoilRoot>
      {isAuth ? (
        <LoginLayout>
          <Component {...pageProps} />
        </LoginLayout>
      ) : (
        <LogoutLayout>
          <Login />
        </LogoutLayout>
      )}
    </RecoilRoot>
  );
}
