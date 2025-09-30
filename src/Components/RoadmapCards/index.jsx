import{
    IoLogoJavascript,
    FaPython
}from '../../Icons/exportIcons'

const languages = [
    {id: 1,
    name:'Roadmap JavaScript',
    logo: <IoLogoJavascript/>,
    description:'A linguagem que domina a web'
},
  

    {id: 2,
    name:'Roadmap Python',
    logo: <FaPython/>,
    description:'A linguagem que domina data science'
    }

]


export function RoadmapCards({...props}){
    return(
        <section {...props} className='w-1/2 flex flex-col gap-4 self-center'>
            {languages.map((item)=>(
                <Card key={item.id}>
                    <h2>{item.name}</h2>
                    <span className='text-3xl'>{item.logo}</span>
                    <p>{item.description}</p>
                </Card>
            ))}
        </section>
    )
}

 function Card({children}){
    return(
        <div className='flex flex-col border border-[--font-color-primary]  h-auto rounded-md p-4'>
            {children}
        </div>
    )
}