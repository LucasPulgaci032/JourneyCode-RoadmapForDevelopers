import { useContext } from "react";
import { stylesForDivCode1, stylesForDivCode2 } from "../../Styles/styles";
import { ThemeProvider } from "../../Provider/ContextProvider";

export function SectionCode({ children, ...props }) {
  const { color } = useContext(ThemeProvider);
  return (
    <section
      className={color ? stylesForDivCode1 : stylesForDivCode2}
      {...props}
    >
      {children}
    </section>
  );
}
