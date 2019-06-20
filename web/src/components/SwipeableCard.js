import React,{Component,useContext} from 'react';
import {Animated,PanResponder,Dimensions,View,Text,Image,TouchableOpacity} from 'react-native'
import { Context } from "../context";

// export class SwipeableCard extends Component {
   
//     translateX = new Animated.Value(0);
//     _panResponder = PanResponder.create({
//       onMoveShouldSetResponderCapture: () => true,
//       onMoveShouldSetPanResponderCapture: () => true,
//       onPanResponderMove: Animated.event([null, {dx: this.translateX}]),
//       onPanResponderRelease: (e, {vx, dx}) => {
//         //const [state, setState] = useContext(Context);

//         const screenWidth = Dimensions.get("window").width;
//         if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
//           Animated.timing(this.translateX, {
//             toValue: dx > 0 ? screenWidth : -screenWidth,
//             duration: 200
//           }).start(this.props.onDismiss);
//           //console.log("yo this element's index was "+this.props.name_first)
//           //setState()
//         } else {
//           Animated.spring(this.translateX, {
//             toValue: 0,
//             bounciness: 10
//           }).start();
//         }
//       }
//     });
//     onPress(){
        
//         //console.log(this.state)
//     }
//     render() {
//     //const [state, setState] = useContext(Context);
//       return (
//         <View>
//             <Animated.View
//                 style={{transform: [{translateX: this.translateX}], height: 75}} {...this._panResponder.panHandlers}
//             >
//                 {/* <Text>
//                     {this.props.title}
//                 </Text> */}
//                 <TouchableOpacity onPress={
//                     console.log(this.props)
                    
//                 }>
//                     <View 
//                     style={{
//                         flex:1,
//                         flexDirection:'row'
//                     }}
//                     >
//                     <View>
//                     <Image
//                         style={{width: 50, height: 50}}
//                         source={{uri: this.props.picture}}
//                     />
//                     </View>
//                     <View>
//                     <Text selectable={false}>
//                         {String(this.props.name_first) +" " +String(this.props.name_last)}
//                     </Text>
//                     <Text selectable={false}>
//                         {this.props.email}
//                     </Text>
//                     </View>
//                     </View>
//                 </TouchableOpacity>
//             </Animated.View>
//         </View>
  
//       );
//     }
//   }

const SwipeableCard = (props) => {
    const [state, setState] = useContext(Context);
    const dismiss= (itemIndex)=>{
      var filtered= []
      for (var i = 0; i<state.data.length; i++){
        if(itemIndex!=i){
          filtered.push({...state.data[i],index:i})
        }
      }
      setState({
        ...state,
        data:[...filtered]
      })
      console.log(state.data)
    }
    //const [userInput,setUserInput,Refs] = useState("")
    const translateX = new Animated.Value(0);
    const _panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, {dx: translateX}]),
      onPanResponderRelease: (e, {vx, dx}) => {
        //const [state, setState] = useContext(Context);

        const screenWidth = Dimensions.get("window").width;
        if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
          Animated.timing(translateX, {
            toValue: dx > 0 ? screenWidth : -screenWidth,
            duration: 200
          // }).start(props.onDismiss);
        }).start(
          
          dismiss(props.index)
          
          );
          //console.log("yo this element's index was "+props.name_first)
          //setState()
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            bounciness: 10
          }).start();
        }
      }
    });
        const onPress=(e)=>{
            console.log(props)
        }
    
      return (
      
            <View>
                <Animated.View
                    style={{transform: [{translateX: translateX}], height: 75}} {..._panResponder.panHandlers}
                >
                    {/* <Text>
                        {props.title}
                    </Text> */}
                    <TouchableOpacity onPress={
                        onPress
                        
                    }>
                        <View 
                        style={{
                            flex:1,
                            flexDirection:'row'
                        }}
                        >
                        <View>
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: props.picture}}
                        />
                        </View>
                        <View>
                        <Text selectable={false}>
                            {String(props.name_first) +" " +String(props.name_last)}
                        </Text>
                        <Text selectable={false}>
                            {props.email}
                        </Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
      
          
      );
};
    
export default SwipeableCard;