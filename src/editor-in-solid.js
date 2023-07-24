import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}

function renderTextEditor(sel) {
  render(() => <Counter />, document.querySelector(sel));
}

export default renderTextEditor
