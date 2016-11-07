
import { define, prop, h } from 'skatejs'
import items from '../fixture/item'

const cache = {}
const Style = (props, chren) => {
  if (!cache[props.css]) {
    const tmp = cache[props.css] = document.createElement('template')
    tmp.innerHTML = `<style>${props.css}</style>`
    ShadyCSS.prepareTemplate(tmp, props.for.tagName.toLowerCase())
  }
  ShadyCSS.applyStyle(props.for)
  return <style>{props.css}</style>
}

function onclick(id) {
  console.debug('click:', id)

  items.forEach(i => {
    if (i.id === id) {
      i.count++
    }
  })
}

const Header = define('x-header', {
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

const Item = define('x-item', {
  props: {
    id: prop.number(),
    title: prop.string(),
    price: prop.number(),
    count: prop.number(),
  },

  render(p) {
    return [
      <Style for={p} css={`
        div {
          display: flex;
          align-items: center;
          width: 240px;
          font-style: var(--font-style);
        }

        div p {
          width: 80px;
        }
      `} />,
      <div>
        <p>{p.title}</p>
        <p>{p.price}</p>
        <p onClick={() => onclick(p.id)} style={{cursor: 'pointer'}}>
          {p.count}
        </p>
      </div>
    ]
  }
})

const Content = define('x-content', {
  props: {
    items: prop.array()
  },

  render(elem) {
    return (
      <content>
        {
          elem.items.map(item => (
            <Item {...item} />
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
        <Header title={p.title} desc={p.desc} />
        <Content items={p.items} />
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
