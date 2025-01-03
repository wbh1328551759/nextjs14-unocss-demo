import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const SVG_DIR = path.resolve(__dirname, '../assets')

function generateIndex(dir) {
  let exports = ''

  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir)

    files.forEach(file => {
      const filePath = path.join(currentDir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        traverse(filePath)
      } else if (file.endsWith('.svg')) {
        const relativePath = path.relative(SVG_DIR, filePath)
        const componentName = path.basename(file, '.svg')
          .split('-')  // 分割文件名
          .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())  // 每个部分首字母大写
          .join('')  // 重新组合

        exports += `export { ReactComponent as ${componentName} } from './${relativePath}'\n`
      }
    })
  }

  traverse(dir)

  fs.writeFileSync(
    path.join(SVG_DIR, 'index.ts'),
    exports
  )
}

generateIndex(SVG_DIR)
