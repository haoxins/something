
import { define, prop, h } from 'skatejs'

define('x-header', {
  props: {
    title: prop.string(),
    desc: prop.string()
  },

  render(elem) {
    return (
      <header>
        <h3>{elem.title}</h3>
        <p>{elem.desc}</p>
      </header>
    )
  }
})

define('x-item', {
  props: {
    title: prop.string(),
    price: prop.number()
  },

  render(elem) {
    console.log(elem, elem.title, elem.price)
    return (
      <div onClick={() => console.info('click:', elem.title)}>
        <p>{elem.title}</p>
        <p>{elem.price}</p>
      </div>
    )
  }
})

define('x-content', {
  props: {
    items: skate.prop.array()
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

define('x-hello', {
  render() {
    const items = [{
      title: 'one',
      price: 123
    }, {
      title: 'two',
      price: 456
    }, {
      title: 'three',
      price: 789
    }]

    return (
      <main>
        <x-header title='hello' desc='bingo' />
        <x-content items={items} />
      </main>
    )
  }
})
