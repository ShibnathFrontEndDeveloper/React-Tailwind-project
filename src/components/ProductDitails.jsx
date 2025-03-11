import React from 'react'
import {Button} from '@material-tailwind/react'
import { FaRupeeSign } from "react-icons/fa";


const productDtls ={
    productDesc: 'This the chair you can take some rest of your free time and feel more relux',
    prodctPrice: 14000.00
}

function ProductDitails() {
  return (
    <section className='py-[20px] px-20 h-dvh'>
        <div className='flex'>
            <img src="./images/almira.jpg" alt=""  className='w-[400px]'/>
            <div className="px-6">
                <p>{productDtls.productDesc}</p>
                <p><FaRupeeSign/>{productDtls.prodctPrice}</p>
                <Button>Add to cart</Button>
            </div>
        </div>
    </section>
  )
}

export default ProductDitails