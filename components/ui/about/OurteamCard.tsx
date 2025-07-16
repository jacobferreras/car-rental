interface OurteamCardProps {
  imageUrl?: string;
  name?: string;
  position?: string;
  description?: string;
}

const OurteamCard = (props: OurteamCardProps) => {
  return (
    <>
      <div className="card bg-base-100 w-auto lg:w-120 xl:w-150 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="rounded-full w-52 h-52 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold font-family-mono">
            {props.name}
          </h2>
          <p className="text-red-600 font-bold font-family-mono text-lg">
            {props.position}
          </p>
          <p className="text-justify font-family-sans text-lg">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default OurteamCard;
