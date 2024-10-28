
'use client'

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";


const Sidebar = () => {
    return (
        <div className="absolute right-2 bottom-44 flex flex-col border text-2xl border-blue-200 bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
            <button className="p-2 hover:bg-[#11405A] hover:text-white duration-200"> <FiShoppingCart /> </button>
            <button className="p-2 hover:bg-[#11405A] hover:text-white"> <LuEye /> </button>
            <button className="p-2 hover:bg-[#11405A] hover:text-white"> <FiHeart /> </button>
        </div>
    );
};

export default Sidebar;