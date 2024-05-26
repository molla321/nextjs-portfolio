"use client";

import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import ProjectCard from "../../components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    catagory: "react js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    catagory: "next js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    catagory: "node js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    catagory: "react js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    catagory: "next js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    catagory: "next js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    catagory: "react js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    catagory: "node js",
    name: "Nexa Website",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing . At, corrupti!",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.catagory)),
];

const Project = () => {
  const [catagorris, setCatagorris] = useState(uniqueCategories);
  const [categary, setCatagory] = useState("all projects");

  const filterData = projectData.filter((project) => {
    // if category all-project retu
    return categary === "all projects"
      ? project
      : project.catagory === categary;
  });
  return (
    <section className="min-h-screen pt12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Project
        </h2>

        {/* tabs */}
        <Tabs defaultValue={categary} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {catagorris.map((categary, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCatagory(categary)}
                  className="capitalize w-[162px] md:w-auto"
                  value={categary}
                  key={index}
                >
                  {categary}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tab content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterData.map((project, index)=>{
                return <TabsContent value={categary} key={index}>
                    <ProjectCard project={project}/>
                </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Project;
