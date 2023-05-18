import { login } from "../../actions/auth";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const Login = () => {
  const router = useRouter();

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <button onClick={() => login("Google").then(() => router.push("/"))}>
        Google | Login
      </button>
      <button onClick={() => login("Facebook").then(() => router.push("/"))}>
        Facebook | Login
      </button>
    </div>
  );
};

export default Login;
