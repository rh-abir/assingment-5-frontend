import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import Button from "@/components/ui/Button";
import serviceImg1 from "../../assets/img/service/service2.png";

const ServiceSection = () => {
  return (
    <Container>
      <div>
        <SectionTitle
          heading="Our Services"
          text="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-t from-green-400 to-blue-500">
            <img className="mx-auto" src={serviceImg1} alt="" />
            <h4>Corporate event</h4>
            <p>One day pas access all lecture</p>
            <p>Lunch and Snack</p>
            <p>Meet Event Speaker</p>
            <p>Front Seat</p>
            <p>One day pas access all lecture</p>
          </div>
          <div className="bg-gradient-to-t from-green-400 to-blue-500">
            <img src={serviceImg1} alt="" />
            <h4>Corporate event</h4>
            <p>One day pas access all lecture</p>
            <p>Lunch and Snack</p>
            <p>Meet Event Speaker</p>
            <p>Front Seat</p>
            <p>One day pas access all lecture</p>
            <Button clssName="w-full">Check it out </Button>
          </div>
          <div className="bg-gradient-to-t from-green-400 to-blue-500">
            <img src={serviceImg1} alt="" />
            <h4>Corporate event</h4>
            <p>One day pas access all lecture</p>
            <p>Lunch and Snack</p>
            <p>Meet Event Speaker</p>
            <p>Front Seat</p>
            <p>One day pas access all lecture</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
