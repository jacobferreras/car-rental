interface MissionAndVisionCardProps {
  title: string;
  description: string;
  iconClass: string;
}

const MissionAndVisionCard = (props: MissionAndVisionCardProps) => {
  return (
    <>
      <div className="card bg-base-100 w-auto md:h-100 xl:h-90 lg:w-110 xl:w-130 shadow-sm">
        <div className="card-header flex justify-center items-center pt-8">
          <i
            className={`${props.iconClass} text-xl text-red-600 md:text-3xl xl:text-5xl`}
          ></i>
        </div>

        <div className="card-body items-center text-center">
          <h1 className="font-family-mono text-md md:text-lg xl:text-3xl font-bold">
            {props.title}
          </h1>
          <p className="font-family-sans text-xs md:text-lg xl:text-xl text-justify ">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default MissionAndVisionCard;
