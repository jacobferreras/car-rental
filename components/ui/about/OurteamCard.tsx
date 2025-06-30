interface OurteamCardProps {
  imageUrl?: string;
  name?: string;
  position?: string;
  description?: string;
}

const OurteamCard = (props: OurteamCardProps) => {
  return (
    <>
      <div className="card bg-base-100 w-auto shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="rounded-full w-32 h-32 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.position}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default OurteamCard;
