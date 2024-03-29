// flow-typed signature: ffbe262652c2690829aaf72cb827a910
// flow-typed version: 9d326d4ede/@storybook/react_v6.x.x/flow_>=v0.142.x

type NodeModule = typeof module

declare module "@storybook/react" {
  declare type Context = {|
    +argTypes: { [key: string]: any, ... },
    +args: { [key: string]: any, ... },
    +globals: { [key: string]: any, ... },
    +hooks: { [key: string]: any, ... },
    +id: string,
    +kind: string,
    +name: string,
    +parameters: { [key: string]: any, ... },
    +story: string
  |}
  declare type Renderable =
    | string
    | number
    | React$Element<any>
    | Iterable<?Renderable>
  declare type RenderCallback = (context: Context) => Renderable
  declare type RenderFunction = () => Renderable

  declare type StoryDecorator = (
    story: RenderFunction,
    context: Context
  ) => Renderable

  declare type DecoratorParameters = { [key: string]: any, ... }

  declare type Story<T> = {
    args: T,
    [[call]](
      args: T
    ): React$Element<(T) => React$Node> | React$Element<React$ComponentType<T>>
  }

  declare interface StoryObject {
    name: string;
    render: RenderFunction;
  }

  declare interface StoryBucket {
    kind: string;
    filename: string;
    stories: Array<StoryObject>;
  }

  declare function addDecorator(decorator: StoryDecorator): void
  declare function addParameters(parameters: DecoratorParameters): void
  declare function clearDecorators(): void
  declare function configure(fn: () => void, module: NodeModule): void
  declare function setAddon(addon: { [key: string]: any, ... }): void
  declare function storiesOf<T>(name: string, module: NodeModule): Story<T>
  declare function forceReRender(): void

  declare function getStorybook(): Array<StoryBucket>
}
