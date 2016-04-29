
import Bar from '../component/bar'
import Foo from '../component/foo'

function configRouter(router) {
  router.map({
    '/foo': {
      component: Foo
    },
    '/bar': {
      component: Bar
    }
  })
}

export default configRouter
