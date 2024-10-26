const Title = ({ children, subTitle }) => {
  const size = subTitle ? "text-2xl" : "text-3xl uppercase";
  const showBorder = subTitle ? "" : "border-b-2 border-dashed border-beige";
  return (
    <section
      className={`
        lexend uppercase
        w-full py-3
        text-beige text-center
        ${showBorder}
      `}
    >
      <h3 className={`${size}`}>{children}</h3>
    </section>
  );
};

export default Title;
