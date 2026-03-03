import { useContext } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "../../Icons/exportIcons.js";
import { ThemeProvider } from "../../Provider/ContextProvider.jsx";
import ReactMarkdown from "react-markdown";

export function ToggleSectionCode({ code }) {
  return (
    <section className="flex flex-col gap-4 ">
      {" "}
     
      {code == null ? <h1>null</h1> : <ToggleSection code={code} />}
    </section>
  );
}

export function ToggleSection({ code }) {
  const { toggleSection, hiddenSection } = useContext(ThemeProvider);

  if (code.length >= 500) {
    return (
      <>
        <ToggleArrow
          onClick={() => toggleSection(code)}
          isOpen={hiddenSection === code}
        />
        {hiddenSection === code && <ReactMarkdown>{code}</ReactMarkdown>}
      </>
    );
  }
  return (
    <>
      <ReactMarkdown>{code}</ReactMarkdown>
    </>
  );
}

export function ToggleArrow({ onClick, isOpen }) {
  return (
    <button className="self-end text-3xl hover:text-4xl" onClick={onClick}>
      {isOpen ? (
        <IoIosArrowUp />
      ) : (
        <IoIosArrowDown />
      )}
    </button>
  );
}
