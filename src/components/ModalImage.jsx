import { useContext } from "react";
import { PreferencesContext } from "../context";

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
        <section>
          <img src={image} alt="modal" className="max-w-full max-h-full p-4" />
        </section>
      </section>
    );
};

export default ModalImage;
