import React from "react";
import ProjectCard from "../sub/ProjectCard";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Matrimonial WebApp"
          description="A smart matchmaking platform with real-time chat, profile verification, and a seamless user experience. Built with a modern tech stack for efficiency."
        />

        <ProjectCard
          src="/CardImage.png"
          title="Payzorr.com – B2B Bill Payments"
          description="A secure and fast B2B payment solution designed to simplify transactions for businesses, ensuring seamless cash flow management and efficiency."
        />

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Payzorr.in – B2C Bill Payment"
          description="A user-friendly B2C payment platform for BBPS, recharges, and bills. Offers instant processing, security, and a hassle-free experience."
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        <ProjectCard
          src="/script.png"
          title="Advanced Scripting & Scraping"
          description="Automate web data extraction with powerful scripts to collect, process, and analyze information with precision and efficiency."
        />

        <ProjectCard
          src="/reverse.png"
          title="Reverse Engineering"
          description="Analyze and enhance software security with advanced reverse engineering to understand, debug, and improve applications."
        />

        <ProjectCard
          src="/automation.png"
          title="Web Automation"
          description="Automate repetitive web tasks like form submissions, data extraction, and bot development to optimize workflow and efficiency."
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        <ProjectCard
          src="/cybersecurity.png"
          title="Cybersecurity Specialist"
          description="Secure networks, prevent cyber threats, and protect digital assets using advanced cybersecurity protocols and defense strategies."
        />

        <ProjectCard
          src="/api.png"
          title="API Development"
          description="Build robust and scalable RESTful or GraphQL APIs for seamless integration, high performance, and secure data exchange."
        />

        <ProjectCard
          src="/cross.png"
          title="Cross-Platform Software"
          description="Develop high-performance apps for iOS, Android, Windows, Linux, and macOS with a unified, efficient, and scalable approach."
        />
      </div>
    </div>
  );
};


export default Projects;
