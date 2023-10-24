import Image from "next/image";
export const Logo = () => {
    return(
        <Image
        height={500}
        width={1200}
        alt="logo"
        src="/logo.svg"
        />
    )
} 