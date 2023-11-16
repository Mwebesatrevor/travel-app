import Link from "next/link";  // import the link component
import Image from "next/image";  // import the image component
import { NAV_LINKS } from "@/constants"; // import the constant
import Button from "./Button"; // import the button component

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">

        {/* logo on the navbar */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

        {/* navbar links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href} // href is the link to the page
            key={link.key} // key is the unique identifier
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
        
        {/* button on the navbar */}
      <div className="lg:flexCenter hidden">
        <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
        />
      </div>

        {/* hamburger menu on the navbar */}
        <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  );
};

export default Navbar;
