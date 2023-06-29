<p  align="center">

<a  href="https://blufra.me">

<img style="margin: 0 auto" width="200" src="https://snowflakes.blufra.me/sites/blufra.me/img/BluFrameLogo512.png" />

</a>

</p>

  

# Blu Frame UI Building Blocks 🚀

Blu Frame UI Building Blocks provides a collection of customizable React components to speed up your web development process. 🎨

## How to Install 📦

If you are using `yarn`:

```sh
yarn add @bluframe/blublocks
```

And if you are using `npm`:

```sh
npm i @bluframe/blublocks
```

## How to import 🧬

You can import the components individually:

```js
import  Button  from  "@bluframe/blublocks/Button";
```

Or import multiple components at once:

```js
import { Button, InputText } from  "@bluframe/blublocks";
```

## Components 🧩

### Badge

This is a Badge component, often used to highlight a certain feature or aspect of a product or a piece of information.

#### Props

- `className`: (optional) string - The class name for the badge wrapper.
- `color`: (optional) $Keys<Palette> - Defaults to `"primary"`. The color of the badge. Colors are defined in our Palette type.
- `label`: string - The text to display on the badge.

#### Usage

```js
  import Badge from "./Badge"
  
  function App() {
    return (
      <Badge 
        className="custom-class"
        color="secondary"
        label="Apples"
      />
    )
  }
```

### Button

A simple button component that can be styled to all needs.

#### Props

- `bold`: (optional) boolean - If `true`, the button label will be displayed in bold. Defaults to `false`.
- `className`: (optional) string - The class name for the button wrapper.
- `disabled`: (optional) boolean - If `true`, the button will be displayed in a disabled state. Defaults to `false`.
- `expanded`: (optional) boolean - If `true`, the button will expand to fill its container's width. Defaults to `false`.
- `iconEnd`: (optional) React$Node - The icon to display at the end of the button label. 🔚
- `iconStart`: (optional) React$Node - The icon to display at the beginning of the button label. 🔜
- `icon`: (optional) React$Node - The icon to display when `iconOnly` is `true`. 🎯
- `iconOnly`: (optional) boolean - If `true`, the button will only display an icon. Defaults to `false`.
- `label`: string - The label for the button. 🏷️
- `loading`: (optional) boolean - If `true`, a loading spinner will be displayed at the end of the button. Defaults to `false`.
- `noHoverHighlight`: (optional) boolean - If `true`, the button will not have a hover effect. Defaults to `false`.
- `onClick`: (optional) function - The callback that is fired when the button is clicked. 🖱️
- `outlined`: (optional) boolean - If `true`, the button will be displayed with an outlined style. Defaults to `false`.
- `padded`: (optional) boolean - If `true`, the button will have extra padding. Defaults to `false`.
- `secondary`: (optional) boolean - If `true`, the button will be displayed with a secondary color. Defaults to `false`.
- `small`: (optional) boolean - If `true`, the button will be displayed in a smaller size. Defaults to `false`.
- `transparent`: (optional) boolean - If `true`, the button will be displayed with a transparent background. Defaults to `false`.
- `type`: (optional) string - The type attribute for the button element. Defaults to `"button"`.

#### Usage

```js
import Button from "@bluframe/blublocks/Button";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Button
      bold={true}
      buttonType="button"
      disabled={false}
      expanded={false}
      iconEnd={<Icon name="IoArrowForward" />}
      iconStart={<Icon name="IoArrowBack" />}
      label="Click me"
      loading={false}
      noHoverHighlight={false}
      onClick={handleClick}
      outlined={false}
      padded={true}
      secondary={false}
      small={false}
    />
  );
}
```

### Inputs

- InputText
- Select
- Radio
- RadioGroup
- Checkbox

All our input components support ARIA attributes. 💯

### InputText

A customizable input text component that supports ARIA attributes.

#### Props

- `className`: (optional) string - The class name for the input text wrapper.
- `defaultValue`: (optional) string - The default value attribute for the input element. 📝
- `error`: (optional) boolean - If `true`, the input text field will be displayed in an error state. Defaults to `false`. ⚠️
- `helperText`: (optional) string - The helper text to display below the input text field. If the 'error' prop is `true`, this text will be displayed in the error color. 🆘
- `inputId`: (optional) string - The id attribute for the input element. 🆔
- `isFullBorder`: (optional) boolean - If `true`, the input text field will have a full border instead of just a bottom border. Defaults to `false`.
- `label`: string - The label for the input text. 🏷️
- `name`: string - The name attribute for the input element.
- `onBlur`: (optional) function - The callback that is fired when the input text loses focus. 💨
- `onChange`: function - The callback that is fired when the input text value changes. 🔀
- `required`: (optional) boolean - If `true`, the input will have the "required" attribute. Defaults to `false`.
- `step`: (optional) string - The step attribute for the input element. This is applicable when the input type is `number`. 📊
- `type`: (optional) string - The type attribute for the input element. Defaults to `text`.
- `value`: string - The value of the input text.

#### Usage

```js
import InputText from "@bluframe/blublocks/InputText";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleBlur = (event) => {
    if (event.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputText
      error={error}
      helperText={error ? "This field is required" : ""}
      inputId="name-input"
      label="Name"
      name="name"
      required
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
    />
  );
}
```

### Select

A customizable select component that supports ARIA attributes, automatically selects the first option if no selected option is provided, and provides a dropdown with a list of options.

#### Props

- `className`: (optional) string - The class name for the select wrapper.
- `defaultValue`: (optional) string - The default value of the select component. 📝
- `label`: React$Node - The label for the select. 🏷️
- `name`: string - The name attribute for the input element.
- `onBlur`: (optional) function - The callback that is fired when the select loses focus. 💨
- `onChange`: function - The callback that is fired when an option is selected.
- `options`: Option[] - An array of options for the select. Each option should have a `label` and a `value`.
- `placeholder`: (optional) string - The placeholder text to display when no option is selected. 💭
- `value`: (optional) string - The currently selected value in the select. If not provided, the first option will be selected by default.

#### Usage

```js
import Select from "@bluframe/blublocks/Select";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    {
      label: "Apple",
      value: "apple"
    },
    {
      label: "Orange",
      value: "orange"
    },
    // ... more options
  ];

  const handleBlur = () => {
    console.log("Select lost focus");
  };

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <Select
      label="Fruit"
      name="fruit"
      onBlur={handleBlur}
      onChange={handleChange}
      options={options}
      placeholder="Select a fruit"
      value={selectedValue}
    />
  );
}
```

### Radio

A customizable radio component that supports ARIA attributes. 📻

#### Props

- `inputId`: (optional) string - The id attribute for the input element. 🆔
- `isChecked`: boolean - Determines whether the radio is checked or not. ✅
- `label`: React$Node - The label for the radio. 🏷️
- `name`: string - The name attribute for the input element.
- `onChange`: function - The callback that is fired when the radio is clicked. 🖱️
- `value`: OptionValue - The value of the radio.

#### Usage

```js
import Radio from "@bluframe/blublocks/Radio";

function App() {
  const [selectedValue, setSelectedValue] = useState("apple");

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <>
      <Radio
        inputId="apple-radio"
        isChecked={selectedValue === "apple"}
        label="Apple"
        name="fruit"
        onChange={handleChange}
        value="apple"
      />
      <Radio
        inputId="orange-radio"
        isChecked={selectedValue === "orange"}
        label="Orange"
        name="fruit"
        onChange={handleChange}
        value="orange"
      />
    </>
  );
}
```

### RadioGroup

A customizable radio group component that supports ARIA attributes and automatically selects the first option if no selected option is provided. 🎛️

#### Props

- `className`: (optional) string - The class name for the radio group wrapper.
- `label`: React$Node - The label for the radio group. 🏷️
- `name`: string - The name attribute for the input elements.
- `onChange`: function - The callback that is fired when a radio within the group is clicked. 🖱️
- `options`: Option[] - An array of options for the radio group. Each option should have a `label` and a `value`.
- `selected`: (optional) OptionValue | null - The currently selected value in the radio group. If not provided, the first option will be selected by default.

#### Usage

```js
import RadioGroup from "@bluframe/blublocks/RadioGroup";

function App() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
  };

  const options = [
    {
      label: "Apple",
      value: "apple"
    },
    {
      label: "Banana",
      value: "banana"
    }
  ];

  return (
    <RadioGroup
      label="Select a fruit"
      name="fruit"
      onChange={handleChange}
      options={options}
      selected={selectedValue}
    />
  );
}
```

### Checkbox

A customizable checkbox component that supports ARIA attributes. ☑️

#### Props

- `inputId`: (optional) string - The id attribute for the input element. 🆔
- `isChecked`: boolean - Determines whether the checkbox is checked or not. ✅
- `label`: React$Node - The label for the checkbox. 🏷️
- `name`: string - The name attribute for the input element.
- `value`: OptionValue - The value of the checkbox.
- `onChange`: function - The callback that is fired when the checkbox is clicked. 🖱️

#### Usage

```js
import Checkbox from "@bluframe/blublocks/Checkbox";

function App() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (value) => {
    setIsChecked(!isChecked);
  };

  return (
    <Checkbox
      inputId="apple-checkbox"
      isChecked={isChecked}
      label="Apple"
      name="fruit"
      value="apple"
      onChange={handleChange}
    />
  );
}
```

### Typography

Beautiful and customizable typography components. ✍️

#### Components

- H1
- H2
- H3
- H4
- H5
- H6
- Paragraph
- SubtitleH1
- SubtitleH2
- SubtitleH3

#### Usage

```js
import H1 from "@bluframe/blublocks/Typography/H1";
import SubtitleH1 from "@bluframe/blublocks/Typography/SubtitleH1";

function App() {
  return (
    <>
      <H1>This is a Heading</H1>
      <SubtitleH1>This is a Subtitle</SubtitleH1>
    </>
  );
}
```

#### Customization

BluFrame UI Building Blocks makes it easy to customize the styling of the typography components according to your needs. You can override the default styles using styled-components and theming. 🎨

Here's an example of how to create a custom H1 component with your own styles:

```js
// CustomH1.js
import styled from "styled-components";
import H1 from "@bluframe/blublocks/Typography/H1";

const CustomH1 = styled(H1)`
  color: #ff0000;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-weight: 400;
`;

export default CustomH1;
```

And then you can use your custom H1 component in your app:

```js
import CustomH1 from "./CustomH1";

function App() {
  return <CustomH1>This is a custom Heading</CustomH1>;
}
```

### Content

A versatile component that accepts markdown and beautifully displays it on your page. 📄

#### Props

- `className`: (optional) string - The class name for the content wrapper.
- `components`: (optional) ContentComponents - Custom components to override default markdown components.
- `content`: string - The markdown content to be displayed.
- `max`: (optional) number - The maximum number of characters to display from the content. Defaults to `Infinity`. 📏
- `paragraphAs`: (optional) string - The HTML tag to use for rendering paragraphs. Defaults to `"p"`.
- `stripMarkdown`: (optional) boolean - If `true`, all markdown formatting will be stripped from the content. Defaults to `false`.

#### Usage

```js
import Content from "@bluframe/blublocks/Content";

function App() {
  const markdownContent = `
    # This is a heading

    This is a paragraph with **bold** and *italic* text.

    - This is a list item
    - Another list item
  `;

  return (
    <Content
      className="custom-class"
      content={markdownContent}
      max={100}
      paragraphAs="div"
      stripMarkdown={false}
    />
  );
}
```

### Hamburger

A classic Hamburger component made with 100% CSS. 🍔

#### Props

- `isMenuExpanded`: (optional) boolean - Determines whether the menu is expanded or not. Defaults to `false`.
- `menuId`: (optional) string - The id attribute for the menu that the Hamburger controls. 🆔
- `onClick`: (optional) function - The callback that is fired when the Hamburger is clicked. 🖱️

#### Usage

```js
import Hamburger from "@bluframe/blublocks/Hamburger";

function App() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <Hamburger
      isMenuExpanded={isMenuExpanded}
      menuId="main-navigation"
      onClick={handleHamburgerClick}
    />
  );
}
```

## Contributing

We welcome contributions to improve Blu Frame UI Building Blocks! If you'd like to contribute, please follow these steps: 🤝

1. Fork the repository. 🍴
2. Create a new branch for your feature or bugfix. 🌿
3. Make your changes and commit them to your branch. 📝
4. Submit a pull request with a detailed description of your changes. 📬
  
Please ensure that your code follows our coding style and passes all tests. 🔎

## License

Blu Frame UI Building Blocks is [MIT licensed](LICENSE).
