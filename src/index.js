const originalLoad = require('module')._load;
const { Emitter, Disposable, CompositeDisposable } =  require('event-kit')
const { Point, Range } =  require('text-buffer')

const {pulsarTextEditor} = require('./text-editor/index');

const myAtomObject = {
  Emitter, Disposable, CompositeDisposable,
  Point, Range
};
require('module')._load = function(request, parent, isMain) {
  if (request === 'atom') {
    return myAtomObject;
  }
  return originalLoad(request, parent, isMain);
};


const TextEditor = require('./text-editor')
const Clipboard = require('./clipboard')
const TextBuffer = require('text-buffer')
const {superstring} = require('superstring')

TextEditor.setClipboard(new Clipboard())
function createEditor() {
  const buffer = new TextBuffer()
  return new TextEditor({buffer})
}

function editorKeyDown(editor) {
  return (evt) => {
    const {ctrlKey, altKey, shiftKey, code} = evt
    console.log("CODE", code)
    switch(code) {
    case("Backspace"):
      if(ctrlKey) editor.deleteToBeginningOfWord()
      else editor.backspace()
      break;
    case("Enter"):
      editor.insertNewline()
      break;
    case("ArrowUp"):
      editor.moveUp()
      break;
    case("ArrowDown"):
      editor.moveDown()
      break;
    case("ArrowLeft"):
      if(ctrlKey) editor.moveToBeginningOfWord()
      else editor.moveLeft()
      break;
    case("ArrowRight"):
      if(ctrlKey) editor.moveToBeginningOfNextWord()
      else editor.moveRight()
      break;
    }
  }
}

async function main() {
  await superstring
  // const editor = createEditor()
  const pane = document.querySelector('atom-pane')
  // editor.element.onkeydown = editorKeyDown(editor)
  // pane.appendChild(editor.element)
  pulsarTextEditor.default('atom-pane')
}
main()
