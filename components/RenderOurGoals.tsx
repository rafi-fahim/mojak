import OurGoalsCard from "./OurGoalsCard";

interface GoalObj {
  text: string;
  imgUrl: string;
  key: number;
  heading: string;
}

const RenderOurGoals = () => {
  const goalProps: GoalObj[] = [
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fgoals-1.jpg?alt=media&token=8188b3ab-8acc-4dfa-ae58-9bffe3c1efe0",
      heading: "Make it Easy",
      key: 1,
      text: "Explore the world of poetry effortlessly on our user-friendly platform. Navigating through the diverse collection of poems is a seamless experience, ensuring that readers can easily discover and enjoy a wide range of creative expressions with just a few clicks.",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fweb-img.jpg?alt=media&token=d666b0f4-080f-4298-8e40-6762869225e7",
      heading: "Make it Reliable",
      key: 2,
      text: "Your reading experience is our priority. Count on our platform's reliability to deliver a consistent and smooth journey through the poems you love. Trust that our robust system ensures a dependable performance, allowing readers to immerse themselves in the beauty of poetry without interruptions or uncertainties.",
    },
  ];
  return (
    <>
      {goalProps.map((item) => {
        return (
          <OurGoalsCard
            index={item.key}
            imgUrl={item.imgUrl}
            text={item.text}
            key={item.key}
            heading={item.heading}
          />
        );
      })}
    </>
  );
};

export default RenderOurGoals;
