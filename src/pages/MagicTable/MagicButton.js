import React from 'react';

import './magicbutton.scss';

class MagicButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isRender:true};
    }
  
    deleteMe() {
      this.setState({
        isRender: false
      });
    }
  
    render() {
      if(this.state.isRender){
        return (
          <button onClick={(e) => this.deleteMe(e)}>
            Delete me
          </button>
        );
      } else {
        return null;
      }
    }
}

export default MagicButton;