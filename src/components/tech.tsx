import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    // const style_logo = "text-5xl text-cyan-400";
    const styles_div = "rounded-2xl border-4 border-neutral-800 p-4";
  
    return (
      <section
        className="border-b border-neutral-800 p-24"
        id="skills"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className={styles_div}>
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </div>
          <div className={styles_div}>
            <TbBrandNextjs className="text-5xl" />
          </div>
          <div className={styles_div}>
            <SiTailwindcss className="text-5xl text-cyan-500" />
          </div>
          <div className={styles_div}>
            <TbBrandFramerMotion className="text-5xl text-cyan-500" />
          </div>
          <div className={styles_div}>
            <FaNodeJs className="text-5xl text-green-500" />
          </div>
          <div className={styles_div}>
            <SiExpress className="text-5xl" />
          </div>
          <div className={styles_div}>
            <GrMysql className="text-5xl" />
          </div>
          <div className={styles_div}>
            <BiLogoPostgresql className="text-5xl text-sky-700" />
          </div>
          <div className={styles_div}>
            <SiMongodb className="text-5xl text-green-500" />
          </div>
          <div className={styles_div}>
            <FaPython className="text-5xl text-sky-800" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  