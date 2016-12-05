
import { Component } from 'react'

import { getInfo, update } from './action'
import { connect } from '../../lib'
import Store from './store'

@connect(Store)
class ItemInfo extends Component {
  componentWillReceiveProps({id}) {
    // TODO - use rxjs
    if (id !== this.props.id) {
      getInfo(id)
    }
  }

  state = {}

  render() {
    const { info = {} } = this.props
    const { desc } = this.state

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
