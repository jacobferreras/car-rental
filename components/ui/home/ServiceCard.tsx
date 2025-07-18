interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="card bg-base-100 w-auto md:h-70  lg:h-90 md:w-106 shadow-md shadow-red-500/50 hover:shadow-xl">
      <figure className="px-10 pt-10">
        <i
          className={`${props.icon} text-red-600 text-xl md:text-3xl xl:text-5xl`}
        ></i>
      </figure>
      <div className="card-body items-center text-center">
        <h1
          className="font-family-mono
         sm:text-sm md:text-md xl:text-xl font-bold"
        >
          {props.title}
        </h1>
        <p className="font-family-sans sm:text-sm md:text-md lg:text-lg xl:text-xl text-justify ">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
