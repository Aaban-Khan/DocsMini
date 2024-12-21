import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

let Card = ({ data }) => {
  return (
    <motion.div drag className="flex-shrink-0 relative w-52 h-64 rounded-[40px] bg-zinc-900/90 text-white py-8 px-6 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer w-full absolute bottom-0 left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-2">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 cursor-pointer flex justify-center items-center bg-zinc-600 rounded-full">
            {data.close ? <IoMdClose /> : <LuDownload size="0.8rem" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
