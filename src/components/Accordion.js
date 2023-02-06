import React from "react";
import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

const Accordion = ({ items }) => {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleExpand = (id) => {
    setExpand((prev) => !prev);
    setSelected(id);
  };
  return (
    <div className="accordion">
      {items.map((item) => {
        return (
          <>
            <div key={item.id} className="accordion bg-slate-200">
              <p
                onClick={() => toggleExpand(item.id)}
                className="flex pt-2 pb-2"
              >
                {item.label}
                {expand && selected === item.id ? (
                  <MdOutlineExpandLess />
                ) : (
                  <MdOutlineExpandMore />
                )}
              </p>
              {expand && selected === item.id && (
                <p className="bg-slate-50"> {item.content}</p>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
