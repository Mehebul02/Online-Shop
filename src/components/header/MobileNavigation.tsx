import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react";
import { RiMenu3Fill,  } from "react-icons/ri";

const MobileNavigation = () => {

    let [isOpen, setIsOpen] = useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }

 
    return (
       <>
        <div className="text-2xl md:hidden text-gray-500 hover:text-themeColor duration-200">
         <RiMenu3Fill onClick={toggleMenu}/>
        </div>
        <Dialog open={isOpen} as="div" className="relative z-50 " onClose={close}>
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black/90 w-screen overflow-y-auto">
   
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black border border-l-indigo-300 p-2 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
            <div>
                <h1 className='text-white'>Navigation Menu</h1>
            </div>
            
            </DialogPanel>
      
        </div>
      </Dialog>
       </>
    );
};

export default MobileNavigation;