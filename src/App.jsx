import "./App.css";
import data from "./assets/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {data.map((elem) => {
        // console.log(elem);
        return <Section elem={elem} key={elem.category} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
