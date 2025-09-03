import Image from "next/image";

interface OurteamCardProps {
  imageUrl: string;
  name: string;
  position?: string;
  description?: string;
}

const OurteamCard = ({
  imageUrl,
  name,
  position,
  description,
}: OurteamCardProps) => {
  return (
    <>
      <div className="card bg-[#303a49] w-auto md:h-150 lg:w-106  lg:h-120 xl:w-70 xl:h-144 shadow-sm">
        <figure className="px-10 pt-10">
          <Image
            src={imageUrl}
            alt={name}
            className="rounded-full w-52 h-52 object-cover lg:w-35 lg:h-35 border-4 border-[#558cd2]"
            width={970}
            height={647}
            loading="lazy"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div>
            {" "}
            <h2 className="card-title font-bold font-family-mono">{name}</h2>
          </div>

          <div className="mb-4">
            <p className="text-[#558cd2] font-bold font-family-mono text-lg">
              {position}
            </p>
          </div>

          <div>
            <p className="font-family-sans text-lg">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurteamCard;
