import { useContext } from "react";
import { stylesForLangsContainer } from "../../Styles/styles";
import { ThemeProvider } from "../../Provider/ContextProvider";

export function LangsContainer({ children }) {
  const { color } = useContext(ThemeProvider);
  return (
    <div
      className={` border-2 ${stylesForLangsContainer} ${color ? "border-[--font-color-secundary]" : "border-[--font-color-primary]"} `}
    >
      {children}
    </div>
  );
}
