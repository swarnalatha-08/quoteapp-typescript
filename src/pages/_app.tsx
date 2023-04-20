import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import '../styles/global.css';
import { RecoilRoot } from "recoil";
import LoginLayout from "../Layouts/loginLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LoginLayout>
        <Component {...pageProps} />
      </LoginLayout>
    </RecoilRoot>
  );
}

// import LoginLayout from "../Layouts/loginLayout";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { useEffect, useState } from "react";
// import { RecoilRoot } from "recoil";
// import Login from "./login";
// import LogoutLayout from "../Layouts/logoutLayput";
// import { useRouter } from "next/router";
// import { publicRoutes } from "../routes";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const [isAuth, setIsAuth] = useState<null | string | undefined>(undefined);
//   console.log("isauth", isAuth);
//   useEffect(() => {
//     const isAuth: null | string | undefined = localStorage.getItem("token");
//     setIsAuth(isAuth);
//   }, []);
//   const components = () => {
//     console.log("path", router.pathname);
//     if (publicRoutes.includes(router.pathname)) {
//       return <Component {...pageProps} />;
//     } else {
//       return <Login {...pageProps} />;
//     }
//   };
//   return (
//     <RecoilRoot>
//       {isAuth === undefined ? (
//         <div>check</div>
//       ) : isAuth === null ? (
//         <LogoutLayout>{components()}</LogoutLayout>
//       ) : (
//         <LoginLayout>
//           <Component {...pageProps} />
//         </LoginLayout>
//       )}
//       {/* <LoginLayout>
//           <Component {...pageProps} />
//         </LoginLayout> */}
//     </RecoilRoot>
//   );
// }
