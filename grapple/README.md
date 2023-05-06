<p  align="center">
  <a  href="https://blufra.me">
    <img style="margin: 0 auto" width="200" src="https://snowflakes.blufra.me/sites/blufra.me/img/BluFrameLogo512.png" />
  </a>
</p>

# BluFrame React Hooks

BluFrame React Hooks is a collection of useful and reusable hooks to enhance your React development experience.

## How to Install

If you are using `yarn`:

```sh
yarn add @bluframe/grapple
```

And if you are using `npm`:

```sh
npm i @bluframe/grapple
```

## How to import

You can import the hooks individually:

```js
import usePrevious from "@bluframe/grapple/usePrevious";
```

Or import multiple hooks at once:

```js
import { usePrevious, useOnScreen } from "@bluframe/grapple";
```


## Hooks

### usePrevious

Stores the previous value of a constant.

#### Usage

```js
import usePrevious from "@bluframe/grapple/usePrevious";

function App() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### useOnScreen

Uses `IntersectionObserver` and notifies when an element appears on screen.

#### Usage

```js
import useOnScreen from "@bluframe/grapple/useOnScreen";

function App() {
  const [isVisible, ref] = useOnScreen("0px");

  return (
    <div ref={ref}>
      {isVisible ? "Element is on screen" : "Element is not on screen"}
    </div>
  );
}
```

### useToggle

Creates a `boolean` value and an easy toggle function.

#### Usage

```js
import useToggle from "@bluframe/grapple/useToggle";

function App() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <p>{isToggled ? "Toggled" : "Not Toggled"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

### useTrimText

Trims text to a maximum number of characters and adds `...` when content exceeds the limit.

#### Usage

```js
import useTrimText from "@bluframe/grapple/useTrimText";

function App() {
  const text = "This is a long text that needs to be trimmed.";
  const trimmedText = useTrimText(text, 10);

  return <div>{trimmedText}</div>;
}
```

### prepareComponent

Receives Props, transforms them into ComponentProps, and returns a Component with ComponentProps. The hook also provides the ability to control when the component should render and update.

#### Usage

```js
import prepareComponent from "@bluframe/grapple/prepareComponent";

function ExampleComponent({ text }) {
  return <div>{text}</div>;
}

const usePrepareComponent = (props) => {
  return {
    text: props.text.toUpperCase(),
  };
};

const options = {
  onlyRenderIf: (props) => props.text.length > 3,
  onlyUpdate: ["text"],
};

const PreparedExampleComponent = prepareComponent(usePrepareComponent, options)(
  ExampleComponent
);

function App() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <PreparedExampleComponent text={text} />
    </div>
  );
}
```

In this example, `prepareComponent` is used to create a new `PreparedExampleComponent`. The `usePrepareComponent` function transforms the `text` prop to uppercase. The `options` object controls the rendering and updating behavior:

- `onlyRenderIf`: Only renders the component if the `text` prop has a length greater than 3.
- `onlyUpdate`: Only updates the component if the `text` prop changes.

The `App` component demonstrates how the `PreparedExampleComponent` is used in conjunction with an input field.

## Contributing

We welcome contributions to improve BluFrame React Hooks! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them to your branch.
4. Submit a pull request with a detailed description of your changes.

Please ensure that your code follows our coding style and passes all tests.

## License

BluFrame React Hooks is [MIT licensed](LICENSE).
