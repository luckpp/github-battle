import React from 'react';
import { battle } from '../utils/api';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      looser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    const { playerOne, playerTwo } = this.props;
    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          looser: players[1],
          error: null,
          loading: false
        })
      }).catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        })
      });
  }

  render() {
    return (
      <div>
        RESULTS
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}