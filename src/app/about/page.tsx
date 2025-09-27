import React, { Fragment } from "react";
import AboutHero from "@/components/Heros/AboutHero";
import OurTeam from "@/components/OurTeam";
import OurMission from "@/components/OurMission";

const AboutPage = () => {
  return (
    <Fragment>
      <AboutHero />
      <OurTeam />
      <OurMission/>
    </Fragment>
  );
};
export default AboutPage;
