import React, { ReactNode } from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { PiKeyReturnFill } from 'react-icons/pi';


type TProductPolicyItem = {
    content:string,
    title:string,
    icon:ReactNode 
}
const ProductPolicyItem = ({content,title,icon}:TProductPolicyItem) => {
    return (
      <div className='flex'>{icon}{title}{content}</div>
    )
  }

const Attrb = [
    {
    icon:<FaCheckSquare className='mt-1'/>,
    title:'Bộ sản phẩm gồm: ' ,
    content:'Hộp, sách hướng dẫn, cáp, cây lấy sim'
    },
    {
        icon:<MdOutlineSecurity className='mt-1'/>,
        title:'Bảo hành: ' ,
        content:'Chính hãng 12 tháng'
    },
    {
        icon:<PiKeyReturnFill className='mt-1'/>,
        title:'Đổi trả: ' ,
        content:'Hư gì đổi nấy'
    },
]

const ProductPolicy = () => {
    return (
        <>
            {Attrb.map((attrbs) => (
                    <ProductPolicyItem icon={attrbs.icon} title={attrbs.title} content={attrbs.content} />
                ))}
        </>
    );
};

export default ProductPolicy