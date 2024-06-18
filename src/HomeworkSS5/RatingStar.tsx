import React, { ReactNode, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const RatingStarItem = ({ icon, id, onHover }: { icon: ReactNode, id: number, onHover: (id: number) => void }) => {
  return <div onMouseEnter={() => onHover(id)} onMouseLeave={() => onHover(0)} className="inline-block">{icon}</div>;
};

const stars = [
  { id: 1, icon: <FaRegStar className="size-10" /> },
  { id: 2, icon: <FaRegStar className="size-10" /> },
  { id: 3, icon: <FaRegStar className="size-10" /> },
  { id: 4, icon: <FaRegStar className="size-10" /> },
  { id: 5, icon: <FaRegStar className="size-10" /> },
];

const RatingStar = () => {
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  const handleOnHover = (id: number) => {
    setHoveredStar(id);
  };

  return (
    <>
      {stars.map((star) => (
        <RatingStarItem
          key={star.id}
          id={star.id}
          onHover={handleOnHover}
          icon={hoveredStar >= star.id ? <FaStar className="size-10" /> : <FaRegStar className="size-10" />}
        />
      ))}
    </>
  );
};

export default RatingStar;
