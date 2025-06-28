interface MissionAndVisionCardProps {
  title: string;
  description: string;
  iconClass: string;
}

const MissionAndVisionCard = (props: MissionAndVisionCardProps) => {
  return (
    <div className="card bg-base-100 w-auto md:h-70 xl:h-90 lg:w-96 shadow-sm">
      <figure className="px-10 pt-4">
        <i
          className={`${props.iconClass} text-xl text-red-600 md:text-3xl xl:text-5xl`}
        ></i>
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="font-family-mono text-md md:text-lg xl:text-xl font-bold">
          {props.title}
        </h1>
        <p className="font-family-sans text-xs md:text-md xl:text-lg text-justify ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default MissionAndVisionCard;
