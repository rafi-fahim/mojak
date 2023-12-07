"use client"
import React from "react";
import AboutCard from "./AboutCard";

interface aboutData {
  name: string;
  imgURL: string;
  work: string;
  bio: string;
  facebookLink: string;
  websiteLink: string;
  instaLink: string;
  contactEmail: string;
  title: string;
}

const RenderAboutCards = () => {
  const aboutData: aboutData[] = [
    {
      name: "Nafiul Karim Santo",
      work: "STUDENT 👨‍🎓 | Designer 🎨 | Founder of MOJAK 🔴🔵🟢🟡",
      bio: "Hello ! I am Santo. A student & a skilled graphics designer 🎨🖌 . I am skilled at Photoshop, Illustrator & Canva. I use Canva for most of my projects. If you want any work related to graphics design then contact 📞 me.",
      facebookLink: "https://web.facebook.com/profile.php?id=100089204100325",
      imgURL: "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fsanto.png?alt=media&token=559bfd39-6c2e-4a32-95a3-0fe88abbcfca",
      instaLink: "https://www.instagram.com/nafiul.santo/s",
      websiteLink: "https://fsrportfolio.netlify.app/",
      contactEmail: "nafiul.santo1234@gmail.com",
      title:"Founder",
    },
    {
      name: "Fahim Shakil",
      work: "STUDENT 👨‍🎓 | Web developer 🕸 | Founder of FSR SOFT 💻",
      bio: "Hello World! I am a student 👨‍🎓 of Cantonment Public School & College, Saidpur As well as a self-taught || skilled full-stack web-develper 💻 & founder of FSR SOFT🤵. I use the latest technology to make website blazingly fast ⚡ & mobile responsive 📱. You can contact 📞 me for any web development related issue.",
      facebookLink: "https://www.facebook.com/rafi.fahim.9237",
      imgURL: "https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Ffahim-shakil.png?alt=media&token=09329202-ee68-49c5-b63a-d870cc5c11fb",
      instaLink: "#",
      websiteLink: "https://fsrportfolio.netlify.app/",
      contactEmail: "fsrafisocial18@gmail.com",
      title:"Developer",
    },
  ];

  return (
    <div 
     className="flex flex-col items-center justify-center gap-4 p-4"
    >
      <AboutCard
        bio={aboutData[0].bio}
        name={aboutData[0].name}
        work={aboutData[0].work}
        facebookLink={aboutData[0].facebookLink}
        imgURL={aboutData[0].imgURL}
        instaLink={aboutData[0].instaLink}
        websiteLink={aboutData[0].websiteLink}
        contactEmail={aboutData[0].contactEmail}
        title={aboutData[0].title}
      />
      <AboutCard
        bio={aboutData[1].bio}
        name={aboutData[1].name}
        work={aboutData[1].work}
        facebookLink={aboutData[1].facebookLink}
        imgURL={aboutData[1].imgURL}
        instaLink={aboutData[1].instaLink}
        websiteLink={aboutData[1].websiteLink}
        contactEmail={aboutData[1].contactEmail}
        title={aboutData[1].title}
      />
    </div>
  );
};

export default RenderAboutCards;
