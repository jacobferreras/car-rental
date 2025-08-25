interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="card bg-[#303a49] w-auto md:h-70  lg:h-90 md:w-106 shadow-md shadow-blue-600/50 hover:shadow-xl">
      <figure className="px-10 pt-10">
        <i className={`${props.icon} text-[#93c5fd] text-5xl`}></i>
      </figure>
      <div className="card-body items-center text-center">
        <h1
          className="font-family-mono
         text-lg xl:text-xl font-bold"
        >
          {props.title}
        </h1>
        <p className="font-family-sans text-md lg:text-lg xl:text-xl">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
