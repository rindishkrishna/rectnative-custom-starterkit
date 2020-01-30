import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,

    Text, Image,TouchableOpacity
} from 'react-native';
import { DrawerActions } from 'react-navigation';
export default class Header extends Component {

    render() {
        return (<View style={"main"}>

            <View
                style={styles.head}
            >

<TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                <Image
                    source={require('../assets/menu.png')}
                    style={[{ width: 30, height: 30,marginLeft:20,marginTop:10}, { tintColor: 'pink' }]}
                />
    </TouchableOpacity>
    <Text style={{ fontSize: 30, fontWeight: '500',marginTop:6 }}>   Trio</Text>


            </View>

        </View>);
    }
}
const styles = StyleSheet.create({
main:{
    flex:1,

},
    btn: {


        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    head:{
        flexDirection:'row',
        height:50,
        marginBottom:10,

    }
});
