import { render } from "solid-js/web";
import { createSignal, For } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}

function GutterContainer({rowsToRender: getRowsToRender}) {
  // FIXME - magic number
  const gutterHeight = () => getRowsToRender().length * 30
  console.log("Height", gutterHeight())
  return (
    <div style="will-change: transform; display: flex; transform: translateY(0px);">
      <div class="gutter line-numbers" style={`position: relative; height: ${gutterHeight()}px;`}>
        <div class="line-number dummy" style="visibility: hidden;">
          00
          <div class="icon-right"></div>
        </div>
        <div style={`contain: layout style; position: absolute; top: 0px; height: ${gutterHeight()}px; transform: translateY(0px); width: 67px;`}>
          <For each={getRowsToRender()}>
            {
              (row) =>
                <div class="line-number" style="width: 67px;">
                  {row + 1}
                  <div class="icon-right"></div>
                </div>
            }
          </For>
        </div>
      </div>
    </div>
  );
}

function renderGutterContainer(element) {
  const rowsToRender = createSignal([0]);
  console.log("Created Signal", rowsToRender)
  render(() => <GutterContainer rowsToRender={rowsToRender[0]} />, element);
  return rowsToRender[1]
}

// function renderTextEditor(sel) {
//   render(() => <Counter />, document.querySelector(sel));
// }
//
export {renderGutterContainer}
