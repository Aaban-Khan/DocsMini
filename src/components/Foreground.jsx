import React from "react";
import Card from "./Card";

const Foreground = () => {
    const data =[
        {
            desc:"this is the data that is shown to the display",
            filesize:".7mb",
            close:true,
            tag:{isOpen:false, tagTitle:"Download Now", tagColor:"green"}
        },
        {
            desc:"this is the data that is shown to the display",
            filesize:".9mb",
            close:true,
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
        },
        {
            desc:"this is the data that is shown to the display",
            filesize:".10mb",
            close:true,
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        },
    ]
  return (
  <div className="z-[3] fixed top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
    {data.map((item, index)=>(
        <Card data={item} />
    ))}
  </div>
  )
};

export default Foreground;
