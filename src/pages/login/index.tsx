import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../../stories/Button";
import Cookie from "js-cookie";
// interface LogiDetails {
//   username: string;
//   password: string;
// }

type Username = {
  username: string;
};
type Password = {
  password: string;
};

type LoginDetails = Username & Password;

export default function Login() {
  const [formData, setFormData] = useState<LoginDetails>({
    username: "",
    password: "",
  });
  console.log("token", formData.username);
  const router = useRouter();

  const handleUsername = (e: any) => {
    setFormData({ username: e.target.value, password: "" });
  };
  const handlePassword = (e: any) => {
    setFormData({ username: formData.username, password: e.target.value });
  };
  const handleSubmit = () => {
    // localStorage.setItem("token", formData.username);
    // localStorage.setItem("token", "123");
    Cookie.set("token", "1234");

    router.push("/random-quote-gen");
    // router.reload()
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "97vh",
        border: "1px solid grey",
      }}
    >
      <h3>login form</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50%",
          width: "30%",
          border: "1px solid grey",
          rowGap: "15px",
        }}
      >
        <div>
          <label>username: </label>
          <input
            value={formData.username}
            placeholder="username"
            onChange={handleUsername}
          />
        </div>
        <div>
          <label>password: </label>
          <input
            value={formData.password}
            placeholder="password"
            type="password"
            onChange={handlePassword}
          />
        </div>
        <Button onClick={handleSubmit} label='submit' size='large'/> 
        
      </div>
    </div>
  );
}
