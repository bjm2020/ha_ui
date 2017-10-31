import React from 'react';
import { Text, View } from 'react-native';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSwitch: null }
  }
}

toggleSwitch = (switchValue) => {
  this.setState({
    activeSwitch: switchValue
  })
}

renderSwitch = () => {
  for (i=0; i < this.props.switches; i++) {

  }

render() {
  return(
    {renderSwitch}
  );
}

export default ToggleSwitch;
