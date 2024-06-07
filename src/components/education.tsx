


const Educations = [
    {
      year: "2022-2026",
      School: "Vellore Institute of Technology, Vellore",
      Stream: "B.Tech, Computer Science and Engineering (Core)",
    },
    {
        year: "2020-2022",
        School: "Pace Junior Science College, Andheri",
        Stream: "XII,PCM",
    
    },
    {
        year: "2014-2020",
        School: "RN Podar School",
        Stream: "X",
    
    },
  ];


  const Education = () => {
    return (
      <section
        className="border-b border-neutral-900 pb-4"
        id="Education"
      >
        <div className="flex justify-center items-center p-10">
      <span className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-md font-medium tracking-tight text-transparent md:text-3xl">Education</span>
      </div>
        {Educations.map((exp, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-white">
                {exp.School} <br/> <span className="text-sm text-neutral-400 ">{exp.Stream}</span>
              </h6>
        
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Education;