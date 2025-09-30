



export function HowToUse({children}){
    return(
        <ul className="justify-center font-extrabold">
          {children}
        </ul>
    )
}

export function LinesHTU({children,...props}){

  return(
    <li {...props}>
        {children}
    </li>
  )
}