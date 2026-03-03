import { useContext } from "react";
import { ThemeProvider } from "../../Provider/ContextProvider";
import { stylesForMenuLinks } from "../../Styles/styles";

function ChangeBodyTheme({ children, ...props }) {
  const { changeColor } = useContext(ThemeProvider);

  return (
    <button {...props} className={stylesForMenuLinks} onClick={changeColor}>
      {children}
    </button>
  );
}

export default ChangeBodyTheme;
