import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/home");
  };
  return (
    <div>
      <button onClick={handleHome}>Home</button>
      <h3>Profile</h3>
    </div>
  );
}
