import Clientele from "@/components/About/Clientele";
import CollaborationGrid from "@/components/About/Collaboration_Grid";
import Founder from "@/components/About/Founder";
import Hero from "@/components/About/Hero";
import Container from "@/components/Reusbale/Container";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Hero />
      <Container>
        <Clientele />
        <CollaborationGrid />
        <Founder />
      </Container>
    </div>
  );
};

export default page;
