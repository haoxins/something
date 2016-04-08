'use strict'

import { Hello } from '../component/hello'

window.init = () => {
  React.render(<Hello></Hello>, document.body)
}
