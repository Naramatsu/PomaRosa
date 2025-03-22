import Title from "./Title";

const Box = ({ children, className, bordered, title }) => {
  const classNames = className ? className : "";
  const isBordered = bordered ? "border-2 border-brown  rounded-sm sm:p-5" : "";

  return (
    <section
      className={`
        w-full
        flex justify-center items-center
        ${isBordered}
        ${classNames}
      `}
    >
      {title && (
        <section
          className="
          bg-beige
            w-fit px-4 -mt-[48px]
          "
        >
          <Title subTitle>{title}</Title>
        </section>
      )}
      {children}
    </section>
  );
};

export default Box;
