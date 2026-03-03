function Description({ children, justifyStart = false }) {
  return (
    <h2
      className={` p-8 text-xl ${!justifyStart ? "self-start animate-bounce" : "self-center"} `}
    >
      {children}
    </h2>
  );
}

export default Description;

//justify start é uma forma de usar uma prop opcional, onde se escolhe
