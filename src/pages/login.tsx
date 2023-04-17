import { useRouter } from "next/router";
import { useState } from "react";

interface LogiDetails {
  username: string;
  password: string;
}

export default function Login() {
  //   const [username, setusername] = useState<string>("");
  //   const [password, setPasswrod] = useState<string>("");
  const [formData, setFormData] = useState<LogiDetails>({
    username: "",
    password: "",
  });
  //   console.log(password);
  const router = useRouter();

  const handleUsername = (e: any) => {
    // setusername(e.target.value);
    setFormData({ username: e.target.value, password: "" });
  };
  const handlePassword = (e: any) => {
    // setPasswrod(e.target.value);
    setFormData({ username: formData.username, password: e.target.value });
  };
  const handleSubmit = () => {
    // localStorage.setItem("username", username);
    localStorage.setItem("username", formData.username);
    router.push("/home");
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
        // value={username}
        value={formData.username}
        placeholder="username"
        onChange={handleUsername}
      />
      <input
        // value={password}
        value={formData.password}
        placeholder="password"
        type="password"
        onChange={handlePassword}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
