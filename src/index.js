const originalLoad = require('module')._load;
const { Emitter, Disposable, CompositeDisposable } =  require('event-kit')
const { Point, Range } =  require('text-buffer')

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

async function main() {
  await superstring
  const editor = createEditor()
  const pane = document.querySelector('atom-pane')
  pane.appendChild(editor.element)
  // console.log()
}
main()
// console.log(superstring)
// console.log(createEditor())
