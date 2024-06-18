import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const ButtonHeart = () => {
    const [isHeart,setIsHeart] = useState(0)
    const HandleOnclick = () => {
        setIsHeart(isHeart+1)
    }
  return (
    <div className='flex'>
    <button className='mr-2' onClick={HandleOnclick}><FaHeart/></button>
    <div>{isHeart}</div>
    </div>
  )
}

export default ButtonHeart