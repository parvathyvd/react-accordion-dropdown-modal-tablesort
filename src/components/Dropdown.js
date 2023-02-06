import { useEffect, useRef, useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import Panel from "./UI/Panel";
const Dropdown = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const onSelectClick = () => {
    setShowOptions((prev) => !prev);
  };
  const closeDropdown = (label) => {
    setShowOptions(false);
    setSelectedOption(label);
    console.log(selectedOption);
  };
  const dropdownEl = useRef();

  console.log(dropdownEl);

  useEffect(() => {
    //call click handler on document
    const handler = (e) => {
      console.log(e.target);
      if (dropdownEl.current.contains(e.target)) {
        console.log("clicked on drop");
      } else {
        console.log("clicked else ");
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="dropdown mt-5" ref={dropdownEl}>
      {console.log("show options", showOptions)}
      <Panel className="flex justify-between" onClick={onSelectClick}>
        {selectedOption ? selectedOption : "Select...."}
        {!showOptions ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
      </Panel>
      {showOptions &&
        options.map((option) => {
          return (
            <Panel
              className="flex"
              key={option.value}
              onClick={() => closeDropdown(option.label)}
            >
              {option.label}
            </Panel>
          );
        })}
      <div className="mt-3 p-3">
        {selectedOption && <p>Selected item is: {selectedOption}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
