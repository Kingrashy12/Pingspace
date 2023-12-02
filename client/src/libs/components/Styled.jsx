import { createEffect, createSignal } from "solid-js";

// Define the styled function
const styled = (component) => (styles) => (props) => {
  const [domNode, setDomNode] = createSignal(null);

  // Attach styles to the component
  const StyledComponent = () => {
    const Component = component(props);
    setDomNode(Component);
    return Component;
  };

  // Apply styles to the DOM node
  createEffect(() => {
    if (domNode()) {
      Object.entries(styles).forEach(([property, value]) => {
        domNode().style[property] = value;
      });
    }
  });

  return StyledComponent;
};

export default styled;
