import React from 'react'

export default class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        RESULTS
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}