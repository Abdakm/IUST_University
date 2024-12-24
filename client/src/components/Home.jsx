import { Navbar, Hero, Information, About, Footer, Section1, Section2 } from "./index"
const Home = () => {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Navbar />
      <Hero />
      <Information />
      <About />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Home;
