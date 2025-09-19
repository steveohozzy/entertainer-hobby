import { useNavigate } from "react-router-dom";
const Button = ({children, iconpath, iconalt, link, removeIcons, ...otherProps}) => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate(link);
  };
  return (
    <button onClick={goToLinkHandler} className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all">
        {children}
      </button>
  )
}

export default Button
