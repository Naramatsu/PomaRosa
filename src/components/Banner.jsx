const Banner = ({ img = "" }) => {
  if (img)
    return (
      <section
        role="banner"
        className="
        rounded-md
        w-full h-[300px] my-2 p-2
        border-2 border-dashed border-white
      "
      >
        <section
          className="
          w-full h-full
          bg-cover bg-position-center bg-no-repeat
          rounded-sm
        "
          style={{ backgroundImage: `url(${img})` }}
        />
      </section>
    );
};

export default Banner;
