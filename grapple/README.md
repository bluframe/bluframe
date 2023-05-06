
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

### useOnScreen

Uses `IntersectionObserver` and notifies when an element appears on screen.

### useToggle

Creates a `boolean` value and an easy toggle function.

### useTrimText

Trims text to a maximum number of characters and adds `...` when content exceeds the limit.

## Contributing

We welcome contributions to improve BluFrame React Hooks! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them to your branch.
4. Submit a pull request with a detailed description of your changes.

Please ensure that your code follows our coding style and passes all tests.

## License

BluFrame React Hooks is [MIT licensed](LICENSE).
