import Container from "@/components/Container";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import heorImg from "../../assets/img/hero.png";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, type: "spring", bounce: 0.5 },
    },
  };

  return (
    <div className="bg-[#f5f6f7] ">
      <Container className="h-screen">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row text-center md:text-left"
        >
          <motion.div
            variants={introChildren}
            className="mt-10 md:mt-0 md:w-[50%]"
          >
            <h1
              className=" text-4xl sm:text-2xl font-semibold  md:font-extrabold 
             md:text-5xl lg:text-6xl text-primary"
            >
              Best Event management firm
            </h1>
            <Button clssName=" text-white py-2 px-14   mt-4 mb-10  md:py-3 md:px-16  md:mt-4 md:mb-7  lg:py-4 lg:px-20  lg:mt-6 lg:mb-10 ">
              Explore
            </Button>
          </motion.div>
          <motion.div variants={introChildren} className="w-[100%] md:w-[50%] ">
            <p className="text-justify md:text-left lg:max-w-[520px] mt-7  ml-auto text-primary text-xl">
              Lore m ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
            </p>
          </motion.div>
        </motion.div>
        <div className="w-[1276px] h-[430px] ">
          <img className="h-full w-full" src={heorImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
