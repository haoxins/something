
import { Component } from 'react'

import { switchItem } from './action'
import Store from './store'

import ItemInfo from './item-info'
import ItemList from './item-list'

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
    const { currentItemId } = this.state

    return (
      <app>
        <ItemList onSwitchItem={id => switchItem(id)} />
        <ItemInfo id={currentItemId} />
      </app>
    )
  }
}

export default App
