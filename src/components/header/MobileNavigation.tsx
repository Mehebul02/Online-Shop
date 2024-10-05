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
        <div className="text-2xl md:hidden text-gray-50 hover:text-themeColor duration-200">
         <RiMenu3Fill/>
        </div>
        <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p>
              <div className="mt-4">
              
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
       </>
    );
};

export default MobileNavigation;