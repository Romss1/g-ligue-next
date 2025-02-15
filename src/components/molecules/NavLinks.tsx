import Link from "next/link";
import React from "react";

const links = [
    { name: "A propos", href: "#" },
    { name: "Clubs", href: "#" },
    { name: "Tournoi", href: "#" },
    { name: "Evenement", href: "#" },
];

interface NavLinksProps {
    ulClassName?: string;
    divClassName?: string;
}

function NavLinks({ ulClassName }: Readonly<NavLinksProps>) {
    return (
        <div className="flex w-1/2 items-center ml-36">
            <ul className={ `flex justify-center ${ulClassName}`}>
                {links.map((link) =>(
                    <li key={link.name} className="justify-between mr-3">
                        <Link href={link.href} className="text-black font-popin">{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NavLinks;