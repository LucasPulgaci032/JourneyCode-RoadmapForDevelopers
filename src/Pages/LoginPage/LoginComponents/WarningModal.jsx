export function WarningModal({ children, onClose }) {
  return (
    <dialog
      open
      className="w-3/4  p-6 rounded-lg text-center text-blue-300 bg-blue-900 animate-glow"
    >
      <p className="mb-4">{children}</p>
      <button
        onClick={onClose}
        className=" bg-blue-300 text-blue-800 px-4 py-2 rounded w-1/2"
      >
        Fechar
      </button>
    </dialog>
  );
}
