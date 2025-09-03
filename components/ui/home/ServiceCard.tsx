interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="card bg-[#303a49] w-auto md:h-90 md:w-106 lg:h-112 xl:h-90 shadow-md shadow-blue-600/50 hover:shadow-xl">
      <figure className="px-10 pt-10">
        <props.icon className="text-[#93c5fd] text-5xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="font-family-mono text-lg xl:text-xl font-bold mb-4">
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
