import { useRouter } from "next/router";
import cookie from "js-cookie";
import { use, useEffect, useState } from "react";
import { Button } from "../components/atoms/button/Button";
import btnStyles from "../components/atoms/button/button.module.css";
export default function LoginLayout({ children }: any) {
  //   const [isAuth, setIsAuth] = useState<string | null>("");
  const [cke, setCke] = useState(true);
  const [layout, setLayout] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    // localStorage.removeItem("token");
    cookie.remove("token");
    router.push("/login");
    setCke(true);
    setLayout(true);
    // router.reload()
  };

  useEffect(() => {
    cookie.get("token");
  }, []);
  useEffect(() => {
    if (cookie.get("token")) {
      setCke(false);
    }
  });
  const handleProfile = () => {
    router.push("/profile");
  };

  return (
    <div>
      {cke ? (
        <div></div>
      ) : (
        <div className="loginLayout">
          <h3>Quotes</h3>
          <div style={{ display: "flex", gap: "8px" }}>
            {/* <button onClick={handleProfile}>Profile</button>
            <button onClick={handleLogout} disabled={cke ? true : false}>
              logout
            </button> */}
            <Button
              onClick={handleProfile}
              variant={`${btnStyles["primary-button"]}`}
            >
              Profile
            </Button>
            <Button
              onClick={handleLogout}
              variant={`${btnStyles["primary-button"]}`}
              disabled={cke ? true : false}
            >
              logout
            </Button>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
