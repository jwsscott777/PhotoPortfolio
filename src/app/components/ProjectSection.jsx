"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
//import { redirect } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Elegant Bathroom",
    description: "Black & White Marble",
    image: "/images/projects/Room1.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room1.png",
  },
  {
    id: 2,
    title: "Master Bedroom",
    description: "Golden Accents",
    image: "/images/projects/Room2.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room2.png",
  },
  {
    id: 3,
    title: "Dream Kitchen",
    description: "Plenty of light",
    image: "/images/projects/Room3.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room3.png",
  },
  {
    id: 4,
    title: "Office Luxury",
    description: "Contemplation",
    image: "/images/projects/Room4.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room4.png",
  },
  {
    id: 5,
    title: "Rustic Kitchen",
    description: "Warm and Inviting",
    image: "/images/projects/Room5.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room5.png",
  },
  {
    id: 6,
    title: "Old World Charm",
    description: "Extreme Comfort",
    image: "/images/projects/Room6.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room6.png",
  },
  {
    id: 7,
    title: "Bedroom",
    description: "Soft Pink",
    image: "/images/projects/Room7.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room7.png",
  },
  {
    id: 8,
    title: "Modern Bath",
    description: "Illuminated",
    image: "/images/projects/Room8.png",
    tag: ["All", "Architecture"],
    previewUrl: "/images/projects/Room8.png",
  },
  {
    id: 9,
    title: "Waterfall Stream",
    description: "",
    image: "/images/projects/Landscape1.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/Landscape1.jpg",
  },
  {
    id: 10,
    title: "Table Rock",
    description: "Blue Ridge",
    image: "/images/projects/Landscape2.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/Landscape2.jpg",
  },
  {
    id: 11,
    title: "Stream",
    description: "",
    image: "/images/projects/Landscape3.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/Landscape3.jpg",
  },
  {
    id: 12,
    title: "Stillness",
    description: "",
    image: "/images/projects/Landscape4.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/Landscape4.jpg",
  },
  {
    id: 13,
    title: "Secret Place",
    description: "Everglades",
    image: "/images/projects/landscape5.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/landscape5.jpg",
  },
  {
    id: 14,
    title: "Early Morning Pier",
    description: "",
    image: "/images/projects/landscape6.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projectslandscape6.jpg",
  },
  {
    id: 15,
    title: "Sunrise",
    description: "",
    image: "/images/projects/sunrise1.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/sunrise1.jpg",
  },
  {
    id: 16,
    title: "Sunset",
    description: "",
    image: "/images/projects/Sunset1.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/Sunset1.jpg",
  },
  {
    id: 17,
    title: "Sunset",
    description: "Everglades",
    image: "/images/projects/Sunset2.jpg",
    tag: ["All", "Landscapes"],
    previewUrl: "/images/projects/Sunset2.jpg",
  },
  {
    id: 18,
    title: "OxyFuel",
    description: "",
    image: "/images/projects/Welding1.jpg",
    tag: ["All", "Welding"],
    previewUrl: "/images/projects/Welding1.jpg",
  },
  {
    id: 19,
    title: "Pipe Beveling",
    description: "",
    image: "/images/projects/Welding2.jpg",
    tag: ["All", "Welding"],
    previewUrl: "/images/projects/Welding2.jpg",
  },
  {
    id: 20,
    title: "Stick Welder",
    description: "",
    image: "/images/projects/Welding3.jpg",
    tag: ["All", "Welding"],
    previewUrl: "/images/projects/Welding3.jpg",
  },
  {
    id: 21,
    title: "Sea of Bottles",
    description: "",
    image: "/images/projects/Welding4.jpg",
    tag: ["All", "Welding"],
    previewUrl: "/images/projects/Welding4.jpg",
  },
  {
    id: 22,
    title: "Mig Welder",
    description: "",
    image: "/images/projects/Welding5.jpg",
    tag: ["All", "Welding"],
    previewUrl: "/images/projects/Welding5.jpg",
  },
  {
    id: 23,
    title: "Brazing",
    description: "Artistic Designs",
    image: "/images/projects/Welding6.jpg",
    tag: ["All", "Welding"],
    previewUrl: "/images/projects/Welding6.jpg",
  },
  {
    id: 24,
    title: "Columbia",
    description: "",
    image: "/images/projects/Misc1.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc1.jpg",
  },
  {
    id: 25,
    title: "Love Lock Fence",
    description: "Lake Murray",
    image: "/images/projects/Misc2.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc2.jpg",
  },
  {
    id: 26,
    title: "Old Bridge",
    description: "",
    image: "/images/projects/Misc3.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc3.jpg",
  },
  {
    id: 27,
    title: "Dome",
    description: "",
    image: "/images/projects/Misc4.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc4.jpg",
  },
  {
    id: 28,
    title: "Two Eyes",
    description: "",
    image: "/images/projects/Misc5.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc5.jpg",
  },
  {
    id: 29,
    title: "Watching",
    description: "",
    image: "/images/projects/Misc6.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc6.jpg",
  },
  {
    id: 30,
    title: "Building Project",
    description: "",
    image: "/images/projects/Misc7.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc7.jpg",
  },
  {
    id: 31,
    title: "Miami",
    description: "",
    image: "/images/projects/Misc8.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc8.jpg",
  },
  {
    id: 32,
    title: "Alien Rock",
    description: "",
    image: "/images/projects/Misc9.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc9.jpg",
  },
  {
    id: 33,
    title: "Lorenzo",
    description: "",
    image: "/images/projects/Misc10.png",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc10.png",
  },
  {
    id: 34,
    title: "Sea Life",
    description: "",
    image: "/images/projects/Misc11.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc11.jpg",
  },
  {
    id: 35,
    title: "Mirror Reflection",
    description: "",
    image: "/images/projects/Misc12.jpg",
    tag: ["All", "Misc"],
    previewUrl: "/images/projects/Misc12.jpg",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };


  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
         Projects
      </h2>
      <div className="text-white lg:flex lg:flex-row md:flex md:flex-row sm:flex-none justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Architecture"
          isSelected={tag === "Architecture"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Landscapes"
          isSelected={tag === "Landscapes"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Welding"
          isSelected={tag === "Welding"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Misc"
          isSelected={tag === "Misc"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;