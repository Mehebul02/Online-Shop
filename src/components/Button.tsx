import { twMerge } from "tailwind-merge";

const Button = ({children,className}) => {
    return (
        <div>
            <button className={twMerge("flex items-center gap-1 bg-themeWhite text-black rounded-md w-32  px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200",className)}>{children}</button>
        </div>
    );
};

export default Button;