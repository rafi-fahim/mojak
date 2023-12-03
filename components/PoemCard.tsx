import Image from "next/image";

interface Types {
  title: string;
  author: string;
  imageUrl: string; // Add a prop for the dynamic image URL
  profilePic: string;
}

const PoemCard = ({ title, author, imageUrl, profilePic }: Types) => {
  // Inline styles for the first div with a static gradient and dynamic background image
  const divStyles = {
    backgroundImage: `linear-gradient(to bottom, #181818c5, #1818188e), url('${imageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        style={divStyles}
        className="bg-no-repeat  relative overflow-hidden h-full w-full rounded-md text-white gap-2 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold font-road-rage">{title}</h1>
        <div className="flex w-1/2 text-4xl justify-between items-center">
          <p className="font-kdam-pro">By</p>
          <p className="font-extrabold">{author}</p>
        </div>
        <Image
          className="rounded-full h-[60px] w-[60px]"
          src={profilePic}
          height={60}
          width={60}
          alt="Profile Pic"
        />
      </div>
    </>
  );
};

export default PoemCard;
