'use strict'

import { refVal, clear } from 'react-util'
import { now } from 'feutil/kit'

/**
 * state & props
 *   - js object
 *   - changes trigger a render update
 * state
 *   - mutable
 *   - private
 * props
 *   - immutable (configuration)
 */

class Hello extends React.Component {
  static defaultProps = {
    initialCount: 10086
  }

  constructor(props) {
    super(props)

    this.state = {
      title: 'hello world',
      count: props.initialCount | 0,
      items: [{
        name: 'a'
      }, {
        name: 'b'
      }, {
        name: 'c'
      }]
    }
  }

  addCount() {
    let add = this::refVal('add') | 0

    this::clear('add')

    this.setState({
      count: this.state.count + add
    })
  }

  render() {
    return (
      <div>
        <p>hello, {now()}</p>
        <p>count:{this.state.count}</p>
        <input ref="add" placeholder="add count" />
        <button onClick={this.addCount.bind(this)}>add</button>
      </div>
    )
  }
}

export { Hello }
