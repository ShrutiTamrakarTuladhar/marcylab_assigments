# Tic Tac Toe

- [App.js is needed and auto updates compared to index.js](https://github.com/facebook/create-react-app/issues/9984)

- This is a issue with NPM it seems

- Question to ask - this.props is a property from React.Component for class componenets?

- Notice how with onClick={() => alert('click')}, we’re passing a function as the onClick prop. React will only call this function after a click. Forgetting () => and writing onClick={alert('click')} is a common mistake, and would fire the alert every time the component re-renders.

Inorder for squares components to "remeber" that it got clicked => componenets use **state.**

In class componets constructors start with super(props)

this.state is how you can access the state in React class components

this.setState()being called on the onClick handler that calls for the Square componement to re-render

The value is being set inside the square construtor by defult to null

this.handleClick

- [Handling Events](https://reactjs.org/docs/handling-events.html)

- Two values are being passed by Board to Square: value and onClick.

- onClick is a function that can be called by Square components
  and data can be accessed by square via the props value

```JSX
// The construstor is no longer need because board is keeping track of state instead
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }

```

onClick prop on the built in DOM button component sets up a click event listener

1. button clicked -> calls on Square render() onclick method

2. square render onClick method calls this.props.onClick() which loops for the onClick function in the properties of the componenet - if the function has been speificted in the prop (direct parent or grandparent)

3. Since the Board component has speficted the onClick function as this.handleChick(i) the square will call handleClick(i) when clicked

Since the Square components no longer maintain state, the Square components receive values from the Board component and inform the Board component when they’re clicked. In React terms, the Square components are now controlled components. The Board has full control over them.

## Immutability Is Important

- Why do we use .slice() to create a copy of the array instead of changing the input squares array. Becuase of immutablity.

- There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes.

- **Immutability makes complex features much easier to implement**

  - example: undo and redo functions are easier to implement if you have previous versions stored.

- **Detecing changes**

  - It is hard to dectect change in a object that is modified directly as dectection requires objects to be compared to pervious copies and the entire.

  In Immutable object changes are easier to detect. If the immutable object that is being refrenced is different that the previoius one, the object has been changed.

- **Determining when to re-render in react**

  - Main benefit of immutablitity is it helps to build pure components in React which helps to determine when a componet requires re-rendering.

Streact pratice - **shouldComponentUpdate()** and how you can build pure components by reading [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html#examples).

## Function Components

- a simpler way to write componets with only the render mehtod and no state of their own.

- Funcation components take in props as input and return what should be rendered.

```JSX

class Square extends React.Component {

  render() {
    return (
      <button className="square"
      onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

// As a functional componenet

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

```

render () is not required and this.props is replaced by the input props

```JSX

onClick={() => this.props.onClick()}

onClick={props.onClick}

```
