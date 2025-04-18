const Banner = ({ img = "", visible = true }) => {
  if (img && visible)
    return (
      <section
        role="banner"
        className="
          relative
          rounded-md
          w-full h-[300px] my-2 p-2
          border-2 border-dashed border-brown
        "
      >
        <section className="w-full h-full relative">
          <section
            className="
            absolute top-0 left-0
            w-full h-full z-[1]
            bg-center bg-no-repeat bg-cover rounded-sm
            blur-sm brightness-[0.3]
          "
            style={{ backgroundImage: `url(${img})` }}
          />
          <section
            className="
            absolute top-0 left-0
            w-full h-full z-[2]
            bg-contain bg-center bg-no-repeat
            rounded-sm
          "
            style={{ backgroundImage: `url(${img})` }}
          />
        </section>
      </section>
    );
};

export default Banner;
