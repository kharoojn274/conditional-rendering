import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let fooditem = [];
  /*let fooditem = [
    "apple",
    "banana",
    "orange",
    "potato",
    "mango",
    "tomato",
    "peach",
  ];*/
  /*one method if state
  if (fooditem.length === 0) {
    return <h3>I am still hungary</h3>;
  }*/
  //pass is empty in the {}
  //let isempty = fooditem.length === 0 ? <h3>I am still hungary</h3> : null;
  //3rd method is logical operator
  let isnotempty = fooditem.length === 0 && <h3>I am still hungary</h3>;
  return (
    <>
      <h1>Food</h1> <br />
      {isnotempty}
      <ul className="list-group">
        {fooditem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
