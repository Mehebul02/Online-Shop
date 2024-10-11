import { logo } from "@/assets";
import Image from "next/image";

const MainLoader = () => {
    return (
        <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center z-50">
            <div className="w-40 p-4 rounded-lg  flex items-center justify-center relative">
                <Image src={logo} alt="loadingLogo" className="w-48 object-contain" ></Image>
            </div>
            <span className="w-14 h-14 border-8 border-white rounded-full relative">
                <span className="w-14 h-14 border-8 border-sky-700 border-b-white border-t-white border-l-white rounded-full absolute -top-2 -left-2 animate-spin"></span>

            </span>
            <h1 className="text-md font-jost">Loading....</h1>
        </div>
    );
};

export default MainLoader;