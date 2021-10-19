import FsExtra from 'fs-extra'
import * as Babaylon from 'babylon'
import Path from 'path'


const codeParsePath = Path.resolve('./src/babylon-demo/code-parse.json')

const codeStr = "const a = 1"

const codeParse = Babaylon.parse(codeStr, {
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: false,
  // allowSuperOutsideMethod,
  sourceType: "module",
  sourceFilename: '',
  plugins: []
})

// console.log('=====> codeParse.program.body', codeParse.program.body)

if (!FsExtra.existsSync(codeParsePath)) {
  FsExtra.createFile(codeParsePath)
}

FsExtra.writeFileSync(codeParsePath, JSON.stringify(codeParse))





