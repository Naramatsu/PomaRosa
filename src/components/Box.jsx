const Box = ({ children, className }) => {
  const classNames = className ? className : "";

  return (
    <section
      className={`
        w-full
        flex justify-center items-center
        ${classNames}
      `}
    >
      {children}
    </section>
  );
};

export default Box;
