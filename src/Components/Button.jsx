import scrollToElement from "scroll-to-element";

const Button = () => {
  const handlleScroll = () => {
    scrollToElement("#q1-div", {
      offset: 0,
      ease: "out-bounce",
      duration: 1000,
    });
  };
  return (
    <div className="relative my-[4rem] mb-[10rem]">
      <div className="flex items-center flex-col space-y-4">
        <div className="text-3xl font-extrabold text-white">
          Want to get the travel details ?
        </div>
        <button
          className="font-bold text-white bg-[#FA183E] whitespace-nowrap rounded-2xl py-1 px-5 mx-10 ease-in transition-all duration-400"
          onClick={handlleScroll}
        >
          Try Now {">"}
        </button>
      </div>
    </div>
  );
};

export default Button;
