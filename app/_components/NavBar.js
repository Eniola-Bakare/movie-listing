import Image from "next/image";
import logo from '/@app/../public/logo.png';

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-end gap-6  ">
      <Image
        src={logo}
        alt="logo of a movie companie"
        className=" rounded-full w-20"
      />
      <p>Movie Loun_ge</p>
    </nav>
  );
}
