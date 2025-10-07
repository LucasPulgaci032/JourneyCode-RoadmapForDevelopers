

function ChangeBodyTheme({children,...props}){
    return(
            <button {...props} className=" text-black bg-blue-300 rounded-lg w-1/6 font-[Orbitron] tracking-wide" >{children}</button>
    )
}

export default ChangeBodyTheme