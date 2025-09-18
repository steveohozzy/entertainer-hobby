import { useState } from "react";

const Accordion = ({ title, answer, isSubNav, ...otherProps}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <ul {...otherProps}>
      <li
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between items-center w-full p-3 border-b border-b-2 border-brandBlue font-bold ${isSubNav ? 'text-lg pl-6 font-md' : 'text-xl'}`}
      >
        <span>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-brandBlue shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </li>
      <li>
        <ul
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <li className="overflow-hidden">{answer}</li>
        </ul>
      </li>
    </ul>
  );
};

export default Accordion;