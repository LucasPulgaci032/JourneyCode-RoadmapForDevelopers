import { stylesForLangsContainer } from "../../Styles/styles";

export function LangsContainer({children}){
    return (
        <div className={stylesForLangsContainer}>{children}</div>
    )
}