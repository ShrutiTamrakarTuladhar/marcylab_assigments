# Tic-Tac-Toe React App (Learning React)

## What is React?

- React is declarative JS library to make user interfaces by making componenets. Small pieces of reusable code.
- Library vs FrameWork : library is more felxable

### Types of componenets

- Componenets are used to tell UI based on DATA and will re-render if data changes

- Subclasses using React.Component

```JSX
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

```

- ShoppingList is a react component type that returns a React Element using the render method.

- components can take in parameters called props - properties that represent the data.

- babel will transplies the JSX syntax to JS so

```JavaScript
  < div/>

  return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);

```

## EACH REACT ELEMENT IS A JAVASCRIPT OBJECT THAT CAN BE STORED IN A VARIABLE OR PASSED WITH IN THE PROGRAM

each component is encapsulated mean its made into a class/api that restrict functionality and access.

Also components are independent

### Relating to example

Starter code consists of 3 components: Square, Board, Game

Props are given to the component in the front tag before the value is put

```JSX
<ExampleComponent space for the props data here/>

<SecondExampleComponent props> Value here<SecondExampleComponent/>

```

In React props are the only way data should be flowing from parent to child. Also the data flow is only one way and no data should be passed from child to parent
