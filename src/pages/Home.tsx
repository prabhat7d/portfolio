import Hero from "../sections/Hero";
import Stats from "../sections/Stats";

import FeaturedProjects from "../sections/FeaturedProjects";
import WhatIDo from "../sections/WhatIDo";
import ExperienceAndStack from "../sections/ExperienceAndStack";
import WorkTogether from "../sections/WorkTogether";

const sections = [
  Hero,
  Stats,
  FeaturedProjects,
  WhatIDo,
  ExperienceAndStack,
  WorkTogether,
];

const Home = () => {
  return (
    <>
      {sections.map((Section) => (
        <Section key={Section.name} />
      ))}
    </>
  );
};

export default Home;
