import React from 'react'
import { theme } from 'react-theme'
import View from '../layout/view'

@theme('frame')
export default class Frame extends React.PureComponent {
  render() {
    return (
      <View {...this.props} />
    )
  }
}
