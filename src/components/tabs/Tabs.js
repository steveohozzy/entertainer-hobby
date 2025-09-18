import { useState } from "react";
import Button from "../button/Button";

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(0);
    
  const buttons = children.map((child, index) => (
    <div key={index} className="w-[50%] p-2">
    <Button
        className={`
            w-full shadow-sm hover:shadow-md group inline-flex items-center justify-center font-bold rounded-[40px] text-brandBlue border-[3px] border-brandBlue py-2 px-1 pl-0 transition-all hover:bg-brandBlue hover:text-white hover:scale-105
            ${child.props.className} ${selected === index ? "bg-brandBlue text-white" : "bg-white"} `}
        iconpath={
            child.props.iconpath
        }
        onClick={() => setSelected(index)}
        >{child.props.title}</Button>
    </div>
  ));

  const content = (
    <div key={children} className="container w-full">{children[selected].props.children}</div>
  );

  return [buttons, content];
};

export default Tabs;
