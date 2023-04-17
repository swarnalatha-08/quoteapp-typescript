import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LogoutLayout({ children }: any) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/login") {
      router.push("/login");
    }
    if(router.pathname != "/login"){
       router.push('/login')
    }
  }, []);

  return <div>{children}</div>;
}
