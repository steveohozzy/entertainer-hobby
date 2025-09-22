import { useState } from "react";

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0);
    
  const buttons = children.map((child, index) => (
    <div key={index} className="w-[50%] p-2">
    <button
        className={`
            w-full group inline-flex items-center justify-center font-bold rounded-[40px] text-gray-100 border-[3px] border-brandBlue py-2 px-1 pl-0 transition-all  hover:scale-105
            ${child.props.className} ${selected === index ? "shadow-text-blue" : "bg-black"} `}
        iconpath={
            child.props.iconpath
        }
        onClick={() => setSelected(index)}
        >{child.props.title}</button>
    </div>
  ));

  const content = (
    <div key={children} className="container w-full">{children[selected].props.children}</div>
  );

  return [buttons, content];
};

export default Tabs;
