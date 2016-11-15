
import { store } from './component/store'
import Hello from './component/app'

const hello = new Hello()

hello.title = 'hello'
hello.desc = 'world'
hello.items = []

document.body.appendChild(hello)

store.subscribe(state => {
  console.info('updated:', state)
  hello.items = [...state.items]
})
