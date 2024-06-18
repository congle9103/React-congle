import { FaRegHeart } from "react-icons/fa"

const ListVideoItem = ({img,title,description}:{img:string,title:string,description:string}) => {
  return (
    <>
    <div className="flex mb-4">
        <img className="mr-2" src={img} alt="" />
        <div className="flex flex-col justify-center mr-40">
            <div className="font-semibold">{title}</div>
            <div className="w-64 font-normal text-gray-500">{description}</div>
        </div>
        <div className="flex items-center"><FaRegHeart className="w-8 h-8"/></div>
    </div>
    </>
  )
}

const ListVideo = () => {
  return (
    <>
    <div><ListVideoItem img="./imgs/Capture2.PNG" title="React: Decumentary" description="The origin stort of React"/></div>
    <div><ListVideoItem img="./imgs/Capture3.PNG" title="Rethinking Best Practices" description="Pete Hunt (2013)"/></div>
    <div><ListVideoItem img="./imgs/Capture4.PNG" title="Introducing React Native" description="Tom Occhino (2015)"/></div>
    <div><ListVideoItem img="./imgs/Capture1.PNG" title="Introducing React Hooks" description="Sophie Alpert and Abramov (2018)"/></div>
    </>
  )
}

export default ListVideo