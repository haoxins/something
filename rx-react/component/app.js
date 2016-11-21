
import { Component } from 'react'

import { addItem, delItem } from './action'
import Store from './store'

const Items = ({items = []}) => (
  <div>
    {
      items.map(i => (
        <section key={i.id}>
          <label>{i.title}</label>
          <span>{i.price}</span>
          <button onClick={() => delItem(i.id)}>del</button>
        </section>
      ))
    }
  </div>
)

class App extends Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {}
  }

  componentWillUnmount() {
    Store.unsubscribe(this.subscribe)
  }

  componentDidMount() {
    Store.subscribe(this.subscribe)
  }

  subscribe = up => {
    this.setState({...up})
  }

  render() {
    const { items, title, price } = this.state

    return (
      <div>
        <Items items={items} />
        <div>
          <input value={title} onChange={
            e => this.setState({title: e.target.value})
          } />
          <input value={price} onChange={
            e => this.setState({price: e.target.value})
          } />
          <button onClick={() => {
            addItem({title, price})
            this.setState({title: '', price: ''})
          }}>add</button>
        </div>
      </div>
    )
  }
}

export default App
