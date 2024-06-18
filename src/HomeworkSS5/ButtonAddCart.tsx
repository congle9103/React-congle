import React, { ReactNode, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

type TButtonAddCartItem = {
    bg:string,
    icon:ReactNode,
    text:string,
    onClick:()=>void
}
const ButtonAddCartItem = ({bg,icon,text,onClick}:TButtonAddCartItem) => {
    return (
      <button onClick={onClick} className={`flex-row rounded px-9 py-3 mb-4 mr-2 ${bg}`}>
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
    }
] 

const ButtonAddCart = () => {
    const [isShow,setIsShow] = useState(false)
    const onClickShow = ()=>{
       setIsShow(!isShow)
    }
    
  return (
    <div>
      {attrb.map((attrbs, index)=>{
          return <ButtonAddCartItem onClick={onClickShow} key={index} bg={attrbs.bg} icon={attrbs.icon} text={attrbs.text}/>
      })}
      {isShow&&(<div className='text-white bg-orange-600 py-3 w-72 text-center'>Đã thêm vào giỏ hàng thành công !</div>)}
    </div>
  )
}

export default ButtonAddCart
