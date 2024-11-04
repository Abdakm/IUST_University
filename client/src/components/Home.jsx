import { Navbar, Hero, Information, About, Footer } from "./index"
const Home = () => {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Navbar />
      <Hero />
      <Information />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
