


function Description({children, justifyStart = false}){
    return (
        <h2 className={`animate-bounce p-8 ${justifyStart ? "self-start" : "self-center"} `}>{children}</h2>
    )
}

export default Description

//justify start é uma forma de usar uma prop opcional, onde se escolhe