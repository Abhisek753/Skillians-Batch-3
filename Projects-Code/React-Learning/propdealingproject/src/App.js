import "./App.css";
import ChildComponent from "./components/ChildComponent";
import GrandChild from "./components/GrandChild";
import Parent from "./components/Parent";
import Home from "./Pages/Home";
import Select from "react-select";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function App() {
  // var value=20;
  // var data=[2,3,4,5,6,7,8,9,10]
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className="App">
      <h2>App Component</h2>
      <Select options={options} />
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
         <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
      </Carousel>
      ;
      {/* <h1>Prop Dealing</h1>
      <p>{value}</p>
      <ChildComponent firstname="Abhisek" lastname="kumar" data={data} /> */}
      {/* <GrandChild value={450}/>
      <Parent/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
