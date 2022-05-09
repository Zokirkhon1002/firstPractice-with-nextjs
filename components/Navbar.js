/* eslint-disable @next/next/link-passhref */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  let router = useRouter();

  const handleClickToHome = ()=> {
    router.push("/")
  }
  
  return (
    <nav>
      <div className="logo">
        <Image src="/ninja.png" onClick={handleClickToHome} alt="logo image" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
