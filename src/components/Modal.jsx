import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import DataItems from './DataItems'
import {Button,Dialog,DialogHeader,DialogBody,DialogFooter,} from "@material-tailwind/react";

function Modal() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className="px-3 fixed top-0 left-0">
      <Button onClick={handleOpen} variant="gradient">
        Open Modal
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
    
    // <div className='fixed top-0 left-0 w-full backdrop-blur-2xl  flex items-center justify-center h-dvh z-[10000] ' open={open}>
    //   <div className="max-w-4xl mx-auto bg-white flex justify-center flex-col py-8 px-10 rounded-2xl">
    //     <div className="flex justify-end bg-blue-60 text-stone-950 text-2xl cursor-pointer" onClick={handleOpen}><MdClose/></div>
    //     <div className="flex gap-1 mt-5 flex-col md:flex-row">
    //       <div className="flex-1">
    //         <h1 className='text-3xl font-bold mb-3'>Best Seller</h1>
    //         <p className='mb-10 text-justify pr-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ratione facere nesciunt inventore eos, saepe sunt architecto reprehenderit repudiandae tenetur et ipsum labore soluta deleniti velit placeat consectetur possimus delectus?</p>
    //         <button className='bg-blue-700 text-white rounded-[5px] px-[18px] py-[5px]'>Buy Now</button>

    //       </div>
    //       <div className="flex-1">
    //         <img src="./images/almira.jpg" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Modal