import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-[#3a3935]">
      <Container className="">
        <footer className="footer p-10 text-white ">
          <aside>
            <a className="font-semibold text-xl">
              Event <span className="text-primary-color">360</span>
            </a>
          </aside>
          <nav>
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Overview</a>
            <a className="link link-hover">Browse</a>
            <a className="link link-hover">Accessibility</a>
          </nav>
          <nav>
            <h6 className="footer-title">Solutions</h6>
            <a className="link link-hover">Brainstorming</a>
            <a className="link link-hover">Ideation</a>
            <a className="link link-hover">Wireframing</a>
            <a className="link link-hover">Research</a>
          </nav>

          <nav>
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Tutorials</a>
            <a className="link link-hover">FAQs</a>
          </nav>

          <nav>
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Developers</a>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Integrations</a>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Press</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">Request Demo</a>
          </nav>
        </footer>
        <div className="py-2">
          <hr className=" " />
        </div>
        <footer className="footer items-center p-4 text-neutral-content">
          <aside className="items-center grid-flow-col">
            <p> @ 2024. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>Terms</a>
            <a>Privacy</a>
            <a>Contact</a>
            <a>EN</a>
            <a>EUR</a>
            <a>Terms</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
