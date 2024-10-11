import { FiShoppingCart } from "react-icons/fi";


const Sidebar = () => {
    return (
        <div className="absolute right-2 bottom-56 flex flex-col border text-2xl border-blue-200 bg-white rounded-md overflow-hidden">
            <button className="p-2 hover:bg-[#11405A] hover:text-white"> <FiShoppingCart/> </button>
        </div>
    );
};

export default Sidebar;