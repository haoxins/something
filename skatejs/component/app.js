
import { define, link, prop, h } from 'skatejs'
import { addCount, addItem } from './store'
import pick from 'lodash.pick'

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
        <p onClick={() => addCount(p.id)} style={{cursor: 'pointer'}}>
          {p.count}
        </p>
      </div>
    ]
  }
})

const Content = define('x-content', {
  props: {
    items: prop.array(),
  },

  render(p) {
    return (
      <content>
        {
          p.items.map(item => (
            <Item {...item} />
          ))
        }
      </content>
    )
  }
})

const Add = define('x-add', {
  props: {
    title: prop.string({attribute: true}),
    price: prop.number({attribute: true}),
  },

  render(p) {
    return (
      <footer>
        <p>
          <input type='text' name='title' onChange={link(p)} />
        </p>
        <p>
          <input type='number' name='price' onChange={link(p)} />
        </p>
        <p>
          <button onClick={() => {
            addItem(pick(p, 'title', 'price'))
          }}>Add</button>
        </p>
      </footer>
    )
  }
})

const Hello = define('x-hello', {
  props: {
    title: prop.string(),
    desc: prop.string(),
    items: prop.array(),
  },

  render(p) {
    return (
      <main>
        <Header title={p.title} desc={p.desc} />
        <Content items={p.items} />
        <Add />
      </main>
    )
  }
})

export default Hello
