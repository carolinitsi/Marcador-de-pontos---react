import React, { Component } from "react";
import Bloco from '../bloco/bloco';
import {StyledBoxBlocos} from '../styled/blocos';

class BoxBlocos extends Component {

 
    render() {
      return (
        <StyledBoxBlocos>
            <Bloco color="#f75e5e"/>
            <Bloco color="#8989f5"/>
            <Bloco color="#df83df"/>
        </StyledBoxBlocos>
      );
    }
  }
  
  export default BoxBlocos;