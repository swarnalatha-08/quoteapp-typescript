import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [username, setusername] = useState<string>("");
  const [password, setPasswrod] = useState<string>("");
  console.log(password);
  const router = useRouter();
  //     interface loginDetials {
  //       username: string;
  //       password: number;
  //     }

  const handleUsername = (e: any) => {
    setusername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPasswrod(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem("username", username);
    router.push("/home");
    window.location.reload()
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        value={username}
        placeholder="username"
        onChange={handleUsername}
      />
      <input
        value={password}
        placeholder="password"
        type="password"
        onChange={handlePassword}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
