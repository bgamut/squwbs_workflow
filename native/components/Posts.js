import React, { useContext } from "react";
import { Context } from "../context";
import Post from "./Post"
import {View} from 'react-native'

//import Swiper from 'react-native-swiper'
//import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
// const panRes = PanResponder.create({
//       onMoveShouldSetPanResponder: (evt, gestureState) => {
//         // const isFirstScreen = this.state.stack.length === 1
//         // const isFarLeft = evt.nativeEvent.pageX < Math.floor(width * 0.25);
  
//         // if (!isFirstScreen && isFarLeft) {
//         //   return true;
//         // }
//         // return false;
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         // this._animatedValue.setValue(gestureState.moveX);
//         console.log(evt.target.key)
//         console.log(gestureState.moveX +" : "+gestureState.moveY)
//       },
//       onPanResponderTerminationRequest: (evt, gestureState) => true,
//       onPanResponderRelease: (evt, gestureState) => {
//         // if (Math.floor(gestureState.moveX) >= width / 2) {
//         //   this.handlePop();
//         // } else {
//         //   Animated.timing(this._animatedValue, {
//         //     toValue: 0,
//         //     duration: 250,
//         //     useNativeDriver: true,
//         //   }).start();
//         // }
//       },
//       onPanResponderTerminate: (evt, gestureState) => {
//         // Animated.timing(this._animatedValue, {
//         //   toValue: 0,
//         //   duration: 250,
//         //   useNativeDriver: true,
//         // }).start();
//       },
//     });
// const gestures = function(){
//     function onSwipeUp(gestureState) {
//         //this.setState({myText: 'You swiped up!'});
//         console.log('up')
//     }
     
//     function onSwipeDown(gestureState) {
//         //this.setState({myText: 'You swiped down!'});
//         console.log('down')
//     }
    
//     function onSwipeLeft(gestureState) {
//         //this.setState({myText: 'You swiped left!'});
//         console.log('left')
//     }
    
//     function onSwipeRight(gestureState) {
//         //this.setState({myText: 'You swiped right!'});
//         console.log('right')
//     }
//     function onSwipe(gestureName, gestureState) {
//         const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
//         //this.setState({gestureName: gestureName});
//         switch (gestureName) {
//           case SWIPE_UP:
//                 console.log('case up')
//             //this.setState({backgroundColor: 'red'});
//             break;
//           case SWIPE_DOWN:
//                 console.log('case down')
//             //this.setState({backgroundColor: 'green'});
//             break;
//           case SWIPE_LEFT:
//                 console.log('case left')
//             //this.setState({backgroundColor: 'blue'});
//             break;
//           case SWIPE_RIGHT:
//                 console.log('case right')
//             //this.setState({backgroundColor: 'yellow'});
//             break;
//         }
//       }
//     const config = {
//         velocityThreshold: 0.3,
//         directionalOffsetThreshold: 80
//       };
    
// }

const Posts = () => {
  const [state] = useContext(Context);
  const { posts } = state;
    var id=0
    return (
        // <GestureRecognizer
        //     onSwipe={(direction, state) => gestures.onSwipe(direction, state)}
        //     onSwipeUp={(state) => gestures.onSwipeUp(state)}
        //     onSwipeDown={(state) => gestures.onSwipeDown(state)}
        //     onSwipeLeft={(state) => gestures.onSwipeLeft(state)}
        //     onSwipeRight={(state) => gestures.onSwipeRight(state)}
        //     config={gestures.config} 
        
        // >
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
                {posts.map(post => (
                //<Post className='post' key={id++} post={post} {...panRes.panHandlers}/>
                <Post key={id++} post={post} style={{margin:1, zIndex:0, paddingTop:26}}/>
                ))}
            </View>
        // </GestureRecognizer>
    );
  
};

export default Posts;