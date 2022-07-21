import { signIn } from "next-auth/react";
import Image from "next/image";


export default function LoginPage () {

  

  return (
    <div className="grid place-items-center">
      <Image src="https://links.papareact.com/t4i" height={400} width={400} objectFit="contain" alt="logo" />
      <h1 onClick={() => signIn()} className="p-5 rounded-full bg-blue-500 text-white text-center cursor-pointer">Login with Facebook</h1>
    </div>
  );
}
