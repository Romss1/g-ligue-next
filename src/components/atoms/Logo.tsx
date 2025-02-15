import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
    width: number;
    height: number;
    className?: string;
}
function Logo({ width, height, className }: Readonly<LogoProps>) {
    return (
        <Link href="/" className="flex items-center pace-x-3 rtl:space-x-reverse">
            <Image src="/images/logo.svg" alt="logo" width={width} height={height} className={className} />
            <span className="self-center text-xs whitespace-nowrap text-gray-700 p-1 font-popin leading-tight">Club <br />Arena</span>
        </Link>
    );
}

export default Logo;