import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import ChangeBodyTheme from "../body/ChangeBodyThemeButton";
import { stylesForMenuLinks } from "../../Styles/styles";
import { useLocation , useNavigate} from "react-router-dom";

const urls = [
  { id: 1, name: "Inicio", path: "/roadmaps" },
  { id: 2, name: "Sobre", path: "/about" },
  
];


export function BtnMenu({ onClick, ...props }) {
  const locationButton = useLocation();


  return (
    <button
      onClick={onClick}
      className={`flex justify-end  text-4xl p-4 right-2 mr-8 fixed  hover:text-5xl ${onClick ? "text-[--font-color-primary]" : "text-[--font-color-secundary]"} ${locationButton.pathname == "/" ? "bottom-5" : "bottom-0"}`}
    >
      <CiMenuBurger />
    </button>
  );
}

export function Menu({ ...props }) {
    const navigate = useNavigate()

const handleLogout = () =>{
  localStorage.removeItem("token");
  navigate('/')
}
  return (
    <nav {...props}>
      <ChangeBodyTheme>Alterar tema</ChangeBodyTheme>
      {urls.map((item, index) => (
        <Link className={stylesForMenuLinks} key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
      <button onClick={handleLogout} className={stylesForMenuLinks}>Sair</button>
    </nav>
  );
}
