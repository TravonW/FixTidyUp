import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../assets/styles/styles";
import Graphic from '../assets/images/ScanGraphic.png'
import Phone from '../assets/images/PhoneGraphic.png'
import Exit from '../assets/images/Exit.png'

export default function ScanModal({ navigation }) {



    return (
        <View style={styles.ScanContainer}>
            <View style={styles.GraphicContainer} >
                <Image source={Graphic} style={styles.ScanGraphic} />
            </View>
            <View style={styles.GraphicContainer} >
                <Image source={Phone} style={styles.PhoneGraphic} />
            </View>
            <View>
                <Text style={styles.Instructions} > Hold Near Tag </Text>
            </View>
            <View style={styles.BottomTab}>
                <TouchableOpacity onPress={() => navigation.navigate('.')} style={{ width: 10, height: 10 }}>
                    <Image source={Exit} style={styles.Exit} />
                </TouchableOpacity>
            </View>
        </View>
    )
}