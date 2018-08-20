'use strict'

class HelloController {
  render({ request, view }) {
    return view.render('hello')
  }
}

module.exports = HelloController
