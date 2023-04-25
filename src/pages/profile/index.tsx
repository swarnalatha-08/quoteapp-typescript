import { useRouter } from "next/router";
import { Button } from "../../components/atoms/button/Button";
import btnStyles from '../../components/atoms/button/button.module.css';
export default function Profile() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/home");
  };
  return (
    <div>
      {/* <button onClick={handleHome}>Home</button> */}
      <Button onClick={handleHome}  variant={`${btnStyles["primary-button"]}`}>Home</Button>
      <h3>Profile</h3>
    </div>
  );
}
