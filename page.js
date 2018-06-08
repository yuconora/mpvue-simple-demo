var path = require('path')
const mpvueSimple = require('mpvue-simple')
// build for signel Page
function resolve (dir) {
  return path.join(__dirname, '', dir)
}
// or more options
mpvueSimple.build({
  output: './Start/entry',
  entry: {
    counter: resolve('./src/pages/counter/main.js'),
    index: resolve('./src/pages/index/main.js'),
    logs: resolve('./src/pages/logs/main.js')
  }
})
