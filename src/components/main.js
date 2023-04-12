import { Component } from 'react';

class Main extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.heading}</h2>
          {
            this.props.imageUrls.map(imageInfo => <HornedBeast info={imageInfo} />)
          }
        </div>
      );
    }
  }


class HornedBeast extends Component {
  render() {
    return (
      <div>
        <p>{this.props.info.title}</p>
        <p>Either yay or nay</p>
      </div>
    );
  }
}
  export default Main;