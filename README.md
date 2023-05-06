
<p align="center">
  <a href="https://blufra.me">
    <img style="margin: 0 auto" width="200" src="https://snowflakes.blufra.me/sites/blufra.me/img/BluFrameLogo512.png" />
  </a>
</p>

# Blu Frame React Components and Hooks

Blu Frame provides a collection of React UI Components and Hooks to enhance your web development experience.

## Blu Blocks

### UI React Components by Blu Frame

[Blu Blocks](./blublocks/README.md) is a set of UI building blocks that provide simple, elegant, and themed UI components for your web applications. Check out the [Blu Blocks README](./blublocks/README.md) for more information.

## Grapple

### React Hooks by Blu Frame

[Grapple](./grapple/README.md) is our collection of  reusable React Hooks, designed to help you write shorter and more efficient code. Explore the [Grapple README](./grapple/README.md) to learn more.

## How to Install

If you are using `yarn`:

```sh
yarn add @bluframe/blublocks
yarn add @bluframe/grapple
```

And if you are using `npm`:

```sh
npm i @bluframe/blublocks
npm i @bluframe/grapple
```

## How to import

You can import the components and hooks individually or together, depending on your needs:

```js
import Button from "@bluframe/blublocks/Button";
import usePrevious from "@bluframe/grapple/usePrevious";
```

Or import multiple components and hooks at once:

```js
import { Button, InputText } from "@bluframe/blublocks";
import { usePrevious, useOnScreen } from "@bluframe/grapple";
```

## Contributing

We welcome contributions to improve BluFrame React Components and Hooks! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them to your branch.
4. Submit a pull request with a detailed description of your changes.

Please ensure that your code follows our coding style and passes all tests.

## License

BluFrame React Components and Hooks are [MIT licensed](LICENSE).
