
import { Component } from 'react'

import { add, del } from './action'
import Store from './store'

function noop() {}

const Items = ({items = [], onSwitchItem}) => (
  <div>
    {
      items.map(i => (
        <section key={i.id} onClick={() => onSwitchItem(i.id)}>
          <label>{i.title}</label>
          <span>{i.price}</span>
          <button onClick={() => del(i.id)}>del</button>
        </section>
      ))
    }
  </div>
)

class ItemList extends Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {}
  }

  static defaultProps = {
    onSwitchItem: noop
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
    const { onSwitchItem } = this.props

    return (
      <list>
        <Items items={items} onSwitchItem={onSwitchItem} />
        <div>
          <input value={title} placeholder='title' onChange={
            e => this.setState({title: e.target.value})
          } />
          <input value={price} placeholder='price' onChange={
            e => this.setState({price: e.target.value})
          } />
          <button onClick={() => {
            add({title, price})
            this.setState({title: '', price: ''})
          }}>add</button>
        </div>
      </list>
    )
  }
}

export default ItemList
