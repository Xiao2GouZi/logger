/*
 * @Author: your name
 * @Date: 2021-10-18 23:13:43
 * @LastEditTime: 2022-01-20 22:49:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /demo/src/index.ts
 */
const nameS: { [key: string]: string } = {
  "1-pvoucher-qweqjwke": "12:12",
  "1-pvoucher-qweqwe": "12312312",
  "1-pvoucher-remark": "123123123",
  "1-pvoucher-teamStatus": "2",
  "2-pvoucher-qweqjwke": "12:12",
  "2-pvoucher-qweqwe": "qweqwe",
  "2-pvoucher-remark": "qweqwe",
  "2-pvoucher-teamStatus": "1"
}

console.log(nameS)
let targetNameS: { [key: string]: {}[] } = {}
for (const key in nameS) {
  const item: { [key: string]: string } = {}
  const firstChart = key.charAt(0) as string
  const targetKey = key.split("-").slice(-1)[0]
  item[targetKey] = nameS[key]
  if (targetNameS[firstChart]) {
    targetNameS[firstChart] = [...targetNameS[firstChart], item]
  } else {
    targetNameS[firstChart] = [item]
  }
  console.log(targetNameS)
}


console.log(new Buffer('\e645'))
