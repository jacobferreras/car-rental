interface OurteamCardProps {
  imageUrl?: string;
  name?: string;
  position?: string;
  description?: string;
}

const OurteamCard = (props: OurteamCardProps) => {
  return (
    <>
      <div className="card bg-[#303a49] w-auto lg:w-70 lg:h-140 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="rounded-full w-52 h-52 object-cover lg:w-35 lg:h-35 border-4 border-[#558cd2]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div>
            {" "}
            <h2 className="card-title font-bold font-family-mono">
              {props.name}
            </h2>
          </div>

          <div className="mb-4">
            <p className="text-[#558cd2] font-bold font-family-mono text-lg">
              {props.position}
            </p>
          </div>

          <div>
            <p className="font-family-sans text-lg">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurteamCard;
