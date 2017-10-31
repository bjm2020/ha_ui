import React from 'react';
import {Text, Slider, View} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';

const RoomDetail = ({ room, reference, status, sliderValue  }) => {
//const { title, artist, thumbnail_image, image, url} = album;
//const {thumbnailStyle,headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;


const updateSlider = (sliderVal) => {
  //JSON?request=controldevicebyvalue&ref=###&value=#
  axios.get('http://192.168.1.146/JSON?user=bjm2020@gmail.com&pass=Gcb!1209a&request=controldevicebyvalue&ref='+reference+'&value='+sliderVal)
  .then(response => console.log(response)); //TODO: Update Status of RoomDetail after change.
};

 const updateProps = (data) => {
   console.log(data);
  this.props.status = data.status;
  this.props.value = data.value;
};
    return (
      <View>
        <Row style={styles.displayRow}>
          <Col size={50}>
              <Text style={styles.textLightSource}>{room}</Text>
          </Col>
          <Col size={50}>
              <Text style={styles.textControl}>Status: {status}</Text>
          </Col>
        </Row>
        <Row style = {styles.displayRow} size={100}>
          <Slider maximumValue={99} onSlidingComplete={ (value) => updateSlider(value)} minimumValue={0} step={1} value={sliderValue} style={{width: '100%'}} />
        </Row>
      </View>
  )
};
    const styles = {
      text: {

      },
      textLightSource: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 20
      },
      textControl: {
        alignSelf: 'flex-end',
        color: 'white',
        fontSize: 20
      },
      displayRow: {
        margin: 30
      }
    };



export default RoomDetail;
