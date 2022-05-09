import Link from "next/link";
import styles from "../styles/Ninjas.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  let router = useRouter();

    useEffect(()=> {
        setTimeout(()=>{
          // router.go(-1)
          // router.go(1)
          router.push("/")
        },3000)
    },[router])

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That page can not be found!</h2>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a className={styles.single}>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
