
import { Component } from 'react'

import { getInfo, update } from './action'
import Store from './store'

class ItemInfo extends Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {}
  }

  componentWillReceiveProps({id}) {
    // TODO - use rxjs
    if (id !== this.props.id) {
      getInfo(id)
    }
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
    const { info = {}, desc } = this.state

    return (
      <info>
        <div>{info.desc}</div>
        <div>
          <input onChange={
            e => this.setState({desc: e.target.value})
          } />
          <button onClick={() => update(info.id, {
            desc
          })}>update</button>
        </div>
      </info>
    )
  }
}

export default ItemInfo
