import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LoginLayout({ children }: any) {
  const [isAuth, setIsAuth] = useState<string | null>("");
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/");
  };
  useEffect(() => {
    if (router.pathname != "/login" || router.pathname === "/login") {
      router.push("/home");
    }
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("username");
    setIsAuth(auth);
  });

  return (
    <div>
      {isAuth && (
        <div className="loginLayout">
          <h3>Quotes</h3>
          <button onClick={handleLogout}>logout</button>
        </div>
      )}

      {children}
    </div>
  );
}
