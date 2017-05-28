import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

// Components
import ImageCaption from './components/ImageCaption/index';

// Static
import bkgImg from './tile.jpg';
import captionImg from './logo.png';

injectGlobal`
  body {
    background-color: #000;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <ImageCaption bkgImg={bkgImg} captionImg={captionImg} captionTitle="Home and Away" />
      </div>
    );
  }
}

export default App;
