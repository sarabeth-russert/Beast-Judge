import { Component } from 'react';


class Main extends Component {
    render() {
      return (
        <header>
          <h2>{this.props.heading}</h2>
          <p>{JSON.stringify(this.props.imgUrls)}</p>
        </header>
      );
    }
  }

  export default Main;