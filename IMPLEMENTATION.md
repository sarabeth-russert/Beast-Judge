# Implementation

We know we've got a header, a main, and a footer. Let's start there...
Let's take the default App.js and clobber most of it to build this ^^.

Create the 3 main components - Header, Main, Footer and create props for Header and Footer;
Import them all into App


class Main extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.heading}</h2>
          {
           /* {/* this.props.imageUrls.map(imageInfo => imageInfo.title) */}
            this.props.imageUrls.map(imageInfo => <HornedBeast info={imageInfo} />)
          }
        </div>
      );
    }
  }