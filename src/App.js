import Menu from "./menu/Menu";

const menuItems = [
  {
    id: 1,
    type: 'Cheese',
    price: 2,
    qty: 0
  },
  {
    id: 2,
    type: 'Pepperoni',
    price: 1.5,
    qty: 0
  },
  {
    id: 3,
    type: 'Sausage',
    price: 1.5,
    qty: 0
  },
  {
    id: 4,
    type: 'Mushroom',
    price: 0.75,
    qty: 0
  },
  {
    id: 5,
    type: 'Pepper',
    price: 0.75,
    qty: 0
  },
  {
    id: 6,
    type: 'Olive',
    price: 1.5,
    qty: 0
  },
  {
    id: 7,
    type: 'Pineapple',
    price: 1.5,
    qty: 0
  },
  {
    id: 8,
    type: 'Ham',
    price: 1.5,
    qty: 0
  }
];

function App() {
  return (
    <div>
      {/* <h1>Hello from the App Component</h1> */}
      {/* Passing the menuItems array (Array of objects) as the value for the startingItems prop in the Menu Component */}
      <Menu startingItems={menuItems}/>
    </div>
  );
}

export default App;
