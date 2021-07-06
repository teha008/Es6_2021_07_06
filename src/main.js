import 더하기 from './module1'
import { 곱하기 } from './module2'
import Test from './test'

더하기(3, 4)
곱하기(2, 9)

const str = 'es6'
console.log(`자바스크립트 ${str}`)

let arr = [1, 2, 3, 4]
arr.forEach((el) => {
  console.log(el)
})

console.log(...arr)

const t = new Test()
t.output()

console.log('웹팩 워치')
