const Modal = ({ title, message, onConfirm, btnText }) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>
        <button className="btn btn-outline btn-error" onClick={onConfirm}>
          {btnText}
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};
export default Modal;
