export function LangTopics({children}){
    return (
        <ul className="flex flex-wrap gap-10 max-w-[90%]">
          {children.map((topic,idx) => (
            <LangLineTopics key={idx}>
                {topic}
            </LangLineTopics>
          ))}
        </ul>
    )
}
export function LangLineTopics({children}){
    return (<li>{children}</li>)
}