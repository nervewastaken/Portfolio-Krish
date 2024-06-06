export const EXPERIENCE = [
    {
      year: "June 2024 - Current",
      role: "Software Analyst Intern",
      company: "Talent Corner HR Services Pvt. Ltd.",
      description: `Reviewing, analysing and deploying enterprise servies for HR solutions. Reviewed progress of Web Development team for the Job Portal.`,
      skiils: ["Software Analysis", "Software Development", "Web Development",],

    },
    {
      year: "Apr 2023 - Current",
      role: "Software Team",
      company: "Team Ardra",
      description: `Designing Machine Learning software to be used in autonomous drones.`,
      skiils: ["Python", "Tensorflow", "Scikit-learn", "Pytorch"],
    },

    {
        year:"Feb 2024 - Mar 2024",
        role: "Fest Organiser",
        company:"Yantra 4.0",
        description:"Reported directly to Office of Students' Welfare, VIT. Organised 60 events (Hackathons, Tech Talks, Workshops, etc) over the course of a week (17th March - 24th March).",
        skiils:["Communication","Critical Thinking","Event Organising"]
    },
    {
        year: "Jan 2024 - Feb 2024",
        role: "Sponsorship Volunteer",
        company: "Riviera, VIT University",
        description: "Contacting potential sponsors for college fest, handling current sponsors and maintaining relationship with sponsors",
        skiils: ["Communication"] 
      },
   
  ];

const Experience = () => {
  return (
    <section
      className="border-b border-neutral-900 pb-4"
      id="Experience"
    >
      <h2 className="my-16 text-white text-center text-4xl">Experience</h2>
      {EXPERIENCE.map((exp, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap justify-center"
        >
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400 mr-10">{exp.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold text-white">
              {exp.role} - <span className="text-sm text-white">{exp.company}</span>
            </h6>
            <p className="mb-4 text-neutral-400">{exp.description}</p>
            {exp.skiils.map((tech, idx) => (
              <span
                key={idx}
                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
