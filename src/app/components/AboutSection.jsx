"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Construction Photography</li>
        <li>Weld Inspection Photography</li>
        <li>Events</li>
        <li>Weddings</li>
        <li>Landscapes</li>
        <li>Portraits</li>
        <li>Video Editing</li>
      </ul>
    ),
  },
  {
    title: "Proficiency",
    id: "proficiency",
    content: (
      <ul className="list-disc pl-2">
        <li>Photoshop</li>
        <li>Premiere Pro</li>
        <li>After Effects</li>
        <li>Audition</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/myprofile-4724.jpg" width={500} height={500} alt="myProfile" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Some things</h2>
          <p className="text-base lg:text-lg">
           I am a passionate photographer with a keen eye for detail and a deep appreciation for the stories that every frame holds. Over the years, I have honed my skills across a diverse range of photography genres. From capturing the elegance of real estate properties and the grandeur of commercial architecture to the precision required in weld inspections, my portfolio reflects my versatility and commitment to quality. Every project I undertake is a blend of my technical expertise and creative flair, ensuring that the photos not only look great but also resonate with the emotions and narratives behind them.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("proficiency")}
              active={tab === "proficiency"}
            >
              {" "}
              Proficient{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;