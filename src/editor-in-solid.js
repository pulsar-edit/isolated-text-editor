import { render } from "solid-js/web";
import { createStore } from "solid-js/store";
import { For } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}

function GutterContainer({state, textEditor}) {
  const gutterHeight = () => state.rowsToRender.length * state.lineHeightInPixels

  return (
    <div style="will-change: transform; display: flex; transform: translateY(0px);">
      <div class="gutter line-numbers" style={`position: relative; height: ${gutterHeight()}px;`}>
        <div class="line-number dummy" style="visibility: hidden;">
          00
          <div class="icon-right"></div>
        </div>
        <div style={`contain: layout style; position: absolute; top: 0px; height: ${gutterHeight()}px; transform: translateY(0px); width: 67px;`}>
          <For each={state.rowsToRender}>
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

function renderGutterContainer(element, textEditor) {
  const store = createStore({
    rowsToRender: [0],
    lineHeightInPixels: 0
  });
  render(() =>
    <GutterContainer state={store[0]} />,
    element);
  return store[1]
}

export {renderGutterContainer}
