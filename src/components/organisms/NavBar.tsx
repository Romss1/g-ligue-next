import Image from "next/image";
import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";

function NavBar() {
    return (
        <nav className="bg-white size-16 flex w-full">
            <Logo width={64} height={64}/>
            <NavLinks/>
        </nav>
    );
}

export default NavBar;