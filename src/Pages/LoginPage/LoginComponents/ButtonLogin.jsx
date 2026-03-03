export function ButtonLogin({ children, ...props }) {
  return (
    <button className="bg-blue-800 rounded-lg hover:bg-blue-700 " {...props}>
      {children}
    </button>
  );
}
