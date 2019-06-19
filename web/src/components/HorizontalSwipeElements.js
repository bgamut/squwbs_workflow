import React, {memo} from 'react'
import {Text,View,Dimensions,ScrollView,PanResponder,Animated} from 'react-native'
const width = Dimensions.get('window').width
const _animatedValue = new Animated.Value(0);
const _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      //const isFirstScreen = this.state.stack.length === 1
      const isFarLeft = evt.nativeEvent.pageX < Math.floor(width * 0.25);
    console.log(evt.nativeEvent)
    //   if (!isFirstScreen && isFarLeft) {
    //     return true;
    //   }
      return false;
    },
    onPanResponderMove: (evt, gestureState) => {
      _animatedValue.setValue(gestureState.moveX);
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      if (Math.floor(gestureState.moveX) >= width / 2) {
          console.log('handler fuction fired')
        
      } else {
        Animated.timing(_animatedValue, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    },
    onPanResponderTerminate: (evt, gestureState) => {
      Animated.timing(_animatedValue, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    },
  });
const HorizontalSwipeElements = () => (
<ScrollView {..._panResponder.panHandlers} horizontal = {true} style={{height:Dimensions.get('window').height/15,backgroundColor:'transparent',flexDirection:'row',marginLeft:15,marginRight:15}}>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'white',flex:1,flexDirection:'column',marginRight:2,marginLeft:3}}>
        <Text selectable={false}>one</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'lightgrey',flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>two</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'darkgrey',flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>three</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'black',flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>four</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'white', flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>one</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'lightgrey',flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>two</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'darkgrey',flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>three</Text>
    </View>
    <View style={{height:Dimensions.get('window').height/15,width:(Dimensions.get('window').height)/12,backgroundColor:'black',flex:1,flexDirection:'column',marginRight:2,marginLeft:2}}>
        <Text selectable={false}>four</Text>
    </View>
</ScrollView>
)

export default memo(HorizontalSwipeElements)