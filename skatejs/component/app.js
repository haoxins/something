
import { define, prop, h } from 'skatejs'
import items from '../fixture/item'

function onclick(id) {
  console.debug('click:', id)

  items.forEach(i => {
    if (i.id === id) {
      i.count++
    }
  })
}

define('x-header', {
  props: {
    title: prop.string(),
    desc: prop.string()
  },

  render(p) {
    return (
      <header>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </header>
    )
  }
})

define('x-item', {
  props: {
    id: prop.number(),
    title: prop.string(),
    price: prop.number(),
    count: prop.number(),
  },

  render(p) {
    return (
      <div>
        <p>{p.title}</p>
        <p>{p.price}</p>
        <p onClick={() => onclick(p.id)} style={{cursor: 'pointer'}}>
          {p.count}
        </p>
      </div>
    )
  }
})

define('x-content', {
  props: {
    items: prop.array()
  },

  render(elem) {
    return (
      <content>
        {
          elem.items.map(item => (
            <x-item {...item} />
          ))
        }
      </content>
    )
  }
})

const Hello = define('x-hello', {
  props: {
    title: prop.string(),
    desc: prop.string(),
    items: prop.array()
  },

  render(p) {
    return (
      <main>
        <x-header title={p.title} desc={p.desc} />
        <x-content items={p.items} />
      </main>
    )
  }
})

const hello = new Hello()

setInterval(() => {
  hello.title = `hello ${Date.now() % 1000}`
  hello.desc = `world ${Math.random() * 1000 % 1000 | 0}`
  hello.items = [...items]
}, 1000)

document.body.appendChild(hello)
