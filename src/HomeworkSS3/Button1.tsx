import React, { useState } from 'react';

type TButton1 = {
  label : string,
  classActive? : boolean
  onClick:()=>void
}

const Button1 = ({label,classActive=false,onClick}:TButton1) => {
    return (
      <>
        <button onClick={onClick} className={`btn_active ${classActive?'active':''}`}>{label}</button>
      </>
    );
  };

  const BtnActive = [
    {label:'Hồng'},
    {label:'Xanh'},
    {label:'Đỏ'}
  ]

const ButtonActive = () => {
  const [currentActive,setCurrentActive] = useState(1)
  const HandleClickBtnActive = (index:number) => {
    setCurrentActive(index)
  }
  return (
    <>
      {
        BtnActive.map((BtnActives,index)=>{
          return <Button1 onClick={()=>{HandleClickBtnActive(index)}} classActive={currentActive===index} label={BtnActives.label}/>
        })
      }
    </>
  );
};

export default ButtonActive;