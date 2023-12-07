import Image from "next/image";

interface Types {
  title: string;
  author: string;
  imageUrl: string; // Add a prop for the dynamic image URL
  profilePic: string;
}

const PoemCard = ({
  title,
  author,
  imageUrl,
  profilePic,
}: Types) => {
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
        className="bg-no-repeat p-2 text-center hover:-translate-y-4 transition-transform relative overflow-hidden h-full w-full rounded text-white gap-2 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="flex text-2xl justify-center gap-4 items-center">
          <p className="font-light">By</p>
          <p className="font-medium">{author}</p>
        </div>
        <Image
          className="rounded-full border-2 border-theme-2 h-[60px] w-[60px]"
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

