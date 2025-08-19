import parse from "html-react-parser";

const BrancheCard = ({branche}) => {
  return (
    <div className="flex flex-wrap max-xl:gap-5 justify-between">
      <div className="w-[48%] max-xl:w-full flex flex-col gap-6 p-[60px] bg-green-700 rounded-2xl">
        <h3 className="text-2xl text-white font-bold">{branche?.name}</h3>
        <p className="text-white text-base font-medium">
          {branche ? parse(branche?.content) : null}
        </p>
      </div>
      <div className="w-[48%] max-xl:w-full rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14838.82258740178!2d39.1317162!3d21.59741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe58e5116516e7c90!2z2KzZhdi52YrYqSDYp9mE2KjYsSDYqNis2K_YqSDYp9mE2YLYs9mFINin2YTYsdis2KfZhNmK!5e0!3m2!1sar!2seg!4v1555512028563!5m2!1sar!2seg"
          allowFullScreen=""
          loading="lazy"
          title="safarymap"
          className="size-full rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default BrancheCard;
