import React, { ReactNode } from 'react'
import { FaShoppingCart, FaPhoneAlt } from 'react-icons/fa'

type TButtonCartItem = {
    bg:string,
    icon:ReactNode,
    text:string
}
const ButtonCartItem = ({bg,icon,text}:TButtonCartItem) => {
    return (
      <button className={`flex-row rounded px-9 py-3 mb-4 mr-2 ${bg}`}>
        <div className="flex items-center">
          <span className="mr-2 mb-1">{icon}</span>
          <span className='w-36'>{text}</span>
        </div>
      </button>
    )
}

const attrb = [
    {
        bg:'bg-orange-600 text-white',
        icon:<FaShoppingCart className=' mt-1 mr-2'/>,
        text:'Thêm giỏ hàng'
    },
    {
        bg:'bg-gray-800 text-white',
        icon:<FaPhoneAlt  className=' mt-1 mr-2'/>,
        text:'Gọi tư vấn'
    }
] 

const ButtonCart = () => {
  return (
    <>
      {attrb.map((attrbs, index)=>{
          return <ButtonCartItem key={index} bg={attrbs.bg} icon={attrbs.icon} text={attrbs.text}/>
      })}
    </>
  )
}

export default ButtonCart
