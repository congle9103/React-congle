import React, { useState } from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const ButtonLike = () => {
    const [isLike,setIsLike] = useState(false)
    const handleOnclick = () => {
        setIsLike(!isLike)
    }
    
  return (
    <>
    {isLike === false ? <button onClick={handleOnclick}><AiOutlineLike className='size-10'/></button> : <button onClick={handleOnclick}><AiFillLike className='size-10'/></button>}
    </>
  )
}

export default ButtonLike