import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return !items || items.length === 0 ? (
    <h1>No Item Available</h1>
  ) : (
    <div>
      {items.map((item, index) => (
        <div>
          <button key={index} onClick={() => handleToggle(index)}>
            {item.titles}
            {openIndex === index ? (
              <FaChevronDown className="right" />
            ) : (
              <FaChevronUp className="right" />
            )}
          </button>
          {openIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
