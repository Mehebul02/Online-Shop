import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
    children: React.ReactNode;
    className?: string;
    href: string;
    onclick?: any;
}
const Button = ({ children, className, href }:Props) => {
    return (
        <>
            {
                href ? <Link href={href} className={twMerge("flex items-center gap-1 bg-themeWhite text-black rounded-md w-32  px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200", className)}>{children}</Link> :<button className={twMerge("flex items-center gap-1 bg-themeWhite text-black rounded-md w-32  px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200",className)}>{children}</button>
        }

        </>
    );
};

export default Button;