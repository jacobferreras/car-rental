interface CoreValueCardProps {
  title: string;
  description: string;
  iconClass: string;
}

const CoreValueCard = (props: CoreValueCardProps) => {
  return (
    <>
      <div className="card bg-[#303a49] w-auto md:h-110 xl:h-90 lg:w-120 xl:w-100 shadow-sm">
        <div className="card-header flex justify-center items-center pt-8">
          <i
            className={`${props.iconClass} text-2xl text-[#93c5fd] md:text-3xl xl:text-5xl`}
          ></i>
        </div>

        <div className="card-body items-center text-center">
          <h1 className="font-bold font-family-mono text-md md:text-lg xl:text-3xl">
            {props.title}
          </h1>
          <p className="font-family-sans text-xs md:text-lg xl:text-xl">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CoreValueCard;
