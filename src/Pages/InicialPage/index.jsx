
import ChangeBodyTheme from '../../Components/body/index'
import StartComponents from '../../Components'
import { useState } from 'react'

function InicialPage() {


const [color,setColor] = useState(true)

function changeColor(){
  setColor(!color)
}

  return (
    <div className={`flex flex-col p-4  ${color ? "bg-white text-[--font-color-primary]" : "bg-[#040727] text-[--font-color-secundary]"}`}>
      <StartComponents/>
      <section className='w-1/5 flex flex-col self-end'>
      <ChangeBodyTheme onClick = {changeColor}>alterar cor</ChangeBodyTheme>
     </section>
  </div>
  )
}

export default InicialPage
