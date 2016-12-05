
import { Component } from 'react'

import { switchItem } from './action'
import { connect } from 'react.rx'

import Store from './store'

import ItemInfo from './item-info'
import ItemList from './item-list'

@connect(Store)
class App extends Component {
  render() {
    const { currentItemId } = this.props

    return (
      <app>
        <ItemList onSwitchItem={id => switchItem(id)} />
        <ItemInfo id={currentItemId} />
      </app>
    )
  }
}

export default App
