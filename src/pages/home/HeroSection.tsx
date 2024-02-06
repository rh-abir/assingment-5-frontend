import Container from "@/components/Container";

import { Button } from "@/components/ui/button";
import heorImg from "../../assets/img/hero.png";

const HeroSection = () => {
  return (
    <div className="bg-[#f5f6f7] ">
      <Container className="h-screen ">
        <div>
          <div>
            <h1>Best Event management firm</h1>
            <Button className="bg-primary-color hover:bg-primary-color-deep">
              {" "}
              Explore
            </Button>
          </div>
          <div></div>
        </div>
        <div className=" h-[608px]">
          <img className="" src={heorImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
