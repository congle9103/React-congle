import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import './ButtonRemove.css'

const ButtonRemoveItem = ({text,onClick}:{text:string,onClick:()=>void}) => {
    return (
      <>
      <button onClick={onClick} className={`btnAccess flex justify-center rounded-md w-24 py-1 mr-2`} >{text}<IoClose className='size-6'/></button>
      </>
    )
  }

  type TTags = {text:string,id:number}

const ButtonRemove = () => {
  const [isTag,setIsTag] = useState<TTags[]>([
    {id: 1 ,text:'Angular'},
    {id: 2 ,text:'Svelte'},
    {id: 3 ,text:'NextJS'},
  ])

  const handleRemoveTag = (idToRemove: number) => {
    setIsTag(isTag.filter((tag) => tag.id !== idToRemove));
  };
  
  return (
    <div className='flex'>
      
    {isTag.map((tag)=>{
      return(
        <ButtonRemoveItem onClick={() => handleRemoveTag(tag.id)} key={tag.id} text={tag.text}/>
      )
    })}
    </div>
  )
}

export default ButtonRemove