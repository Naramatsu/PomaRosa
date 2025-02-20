import { useContext } from "react";
import { PreferencesContext } from "../context";
import { MdOutlineCancel } from "react-icons/md";

const ModalImage = () => {
  const { image, clearImage } = useContext(PreferencesContext);

  if (image)
    return (
      <section
        onClick={clearImage}
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          bg-black bg-opacity-80
        "
      >
        <MdOutlineCancel
          color="white"
          size={60}
          className="
            fixed top-4 right-4
            bg-black bg-opacity-80
            rounded-full
            hover:cursor-pointer
          "
        />
        <section>
          <img
            src={image}
            loading="lazy"
            alt="modal"
            className="max-w-full max-h-screen p-4 object-contain"
          />
        </section>
      </section>
    );
};

export default ModalImage;
