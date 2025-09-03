import ServiceCard from "./ServiceCard";
import { Service } from "../../../lib/constant";

const ServiceBenifits = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 lg:gap-8 mt-4 px-4">
      {Service.map((item) => (
        <ServiceCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default ServiceBenifits;
