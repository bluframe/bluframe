<p  align="center">

<a  href="https://blufra.me">

<img style="margin: 0 auto" width="200" src="https://snowflakes.blufra.me/sites/blufra.me/img/BluFrameLogo512.png" />

</a>

</p>

  

# BluFrame UI Building Blocks

  

BluFrame UI Building Blocks provides a collection of customizable React components to speed up your web development process.

  

## How to Install

  

If you are using `yarn`:

  

```sh

yarn add @bluframe/blublocks

```

  

And if you are using `npm`:

  

```sh

npm i @bluframe/blublocks

```

  

## How to import

  

You can import the components individually:

  

```js

import  Button  from  "@bluframe/blublocks/Button";

```

  

Or import multiple components at once:

  

```js

import { Button, InputText } from  "@bluframe/blublocks";

```

  

## Components

  

### Button

  

A simple button component that can be styled to all needs
  

### Inputs

  

- InputText

- Select

- Radio

- RadioGroup

- Checkbox

  

All our input components support ARIA attributes.

### InputText

A customizable input text component that supports ARIA attributes.

#### Props

- `inputId`: (optional) string - The id attribute for the input element.
- `label`: string - The label for the input text.
- `name`: string - The name attribute for the input element.
- `onChange`: function - The callback that is fired when the input text value changes.
- `value`: string - The value of the input text.

#### Usage

```js
import InputText from "@bluframe/blublocks/InputText";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <InputText
      inputId="name-input"
      label="Name"
      name="name"
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
- `label`: React$Node - The label for the select.
- `name`: string - The name attribute for the input element.
- `onSelect`: function - The callback that is fired when an option is selected.
- `options`: Option[] - An array of options for the select. Each option should have a `label` and a `value`.
- `placeholder`: (optional) string - The placeholder text to display when no option is selected.
- `selected`: (optional) number | string | null - The currently selected value in the select. If not provided, the first option will be selected by default.

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

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <Select
      label="Fruit"
      name="fruit"
      onSelect={handleSelect}
      options={options}
      placeholder="Select a fruit"
      selected={selectedValue}
    />
  );
}
```


### Radio

A customizable radio component that supports ARIA attributes.

#### Props

- `inputId`: (optional) string - The id attribute for the input element.
- `isChecked`: boolean - Determines whether the radio is checked or not.
- `label`: React$Node - The label for the radio.
- `name`: string - The name attribute for the input element.
- `onChange`: function - The callback that is fired when the radio is clicked.
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

A customizable radio group component that supports ARIA attributes and automatically selects the first option if no selected option is provided.

#### Props

- `className`: (optional) string - The class name for the radio group wrapper.
- `label`: React$Node - The label for the radio group.
- `name`: string - The name attribute for the input elements.
- `onChange`: function - The callback that is fired when a radio within the group is clicked.
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

A customizable checkbox component that supports ARIA attributes.

#### Props

- `inputId`: (optional) string - The id attribute for the input element.
- `isChecked`: boolean - Determines whether the checkbox is checked or not.
- `label`: React$Node - The label for the checkbox.
- `name`: string - The name attribute for the input element.
- `value`: OptionValue - The value of the checkbox.
- `onChange`: function - The callback that is fired when the checkbox is clicked.

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

  

Beautiful and customizable typography components.

  

### Loading

  

A lightweight, 100% CSS spinner component.

  

### Content

  

A versatile component that accepts markdown and beautifully displays it on your page.
  


### Hamburger

A classic Hamburger component made with 100% CSS.

#### Props

- `isMenuExpanded`: (optional) boolean - Determines whether the menu is expanded or not. Defaults to `false`.
- `menuId`: (optional) string - The id attribute for the menu that the Hamburger controls.
- `onClick`: (optional) function - The callback that is fired when the Hamburger is clicked.

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

  

We welcome contributions to improve BluFrame UI Building Blocks! If you'd like to contribute, please follow these steps:

  

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Make your changes and commit them to your branch.

4. Submit a pull request with a detailed description of your changes.

  

Please ensure that your code follows our coding style and passes all tests.

  

## License

  

BluFrame UI Building Blocks is [MIT licensed](LICENSE).

