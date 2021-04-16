import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_22_1} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_22_2}
      />
      <View style={styles.View_22_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
          }}
          style={styles.ImageBackground_I22_6_1_104}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_22_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_22_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_22_10}
      />
      <View style={styles.View_22_15}>
        <Text style={styles.Text_22_15}>
          1. Dirty Paws 2. King and Lionheart 3. Mountain Sound 4. Slow and
          Steady 5. From Finner 6. Little Talks 7. Six Weeks 8. Love Love Love
          9. Your Bones 10. Sloom 11. Lakehouse 12. Yellow Light
        </Text>
      </View>
      <View style={styles.View_22_17}>
        <Text style={styles.Text_22_17}>
          4:38 4:33 3:35 5:01 3:43 4:26 5:34 3:58 4:09 4:43 4:35 4:52
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0306/28be/6a1b56c9bb96644f7b1c968e2e5b3e26"
        }}
        style={styles.ImageBackground_22_18}
      />
      <View style={styles.View_22_19}>
        <Text style={styles.Text_22_19}>
          Of Monsters and Men My Head is an Animal 2011
        </Text>
      </View>
      <View style={styles.View_22_20}>
        <Text style={styles.Text_22_20}>$9.99</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad1/5ecd/b620d1c8a17c585b000ab93392617e85"
        }}
        style={styles.ImageBackground_22_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cda/01cd/8a0b34d866b2a17a442aed217406123a"
        }}
        style={styles.ImageBackground_22_22}
      />
      <View style={styles.View_22_23}>
        <Text style={styles.Text_22_23}>Permissions</Text>
      </View>
      <View style={styles.View_22_24}>
        <Text style={styles.Text_22_24}>
          Plays: Unlimited Shares: Squad Customization: No
        </Text>
      </View>
      <View style={styles.View_22_25}>
        <Text style={styles.Text_22_25}>
          Platform: Qom Devices: Any Ownership: Transferable
        </Text>
      </View>
      <View style={styles.View_22_50}>
        <Text style={styles.Text_22_50}>Single</Text>
      </View>
      <View style={styles.View_40_106}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_40_107}
        />
      </View>
      <View style={styles.View_40_113}>
        <Text style={styles.Text_40_113}>o</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_22_1: {
    width: wp("101.69082125603866%"),
    minWidth: wp("101.69082125603866%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("109.28961748633881%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0,
    borderColor: "rgba(14, 13, 13, 1)",
    borderWidth: 1.5
  },
  ImageBackground_22_2: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.05797101449275%"),
    top: hp("0.819672131147541%"),
    resizeMode: "cover"
  },
  View_22_6: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637681%"),
    top: hp("110.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I22_6_1_104: {
    flexGrow: 1,
    width: wp("23.67149758454106%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_22_8: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("1.639344262295082%"),
    resizeMode: "cover"
  },
  ImageBackground_22_9: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("6.420765027322404%"),
    resizeMode: "cover"
  },
  ImageBackground_22_10: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05314009661835%"),
    top: hp("112.56830601092895%"),
    resizeMode: "cover"
  },
  View_22_15: {
    width: wp("61.35265700483091%"),
    minWidth: wp("61.35265700483091%"),
    minHeight: hp("52.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("28.415300546448087%")
  },
  Text_22_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_22_17: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.8792270531401%"),
    top: hp("28.415300546448087%")
  },
  Text_22_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_22_18: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("49.86338797814208%")
  },
  View_22_19: {
    width: wp("75.36231884057972%"),
    minWidth: wp("75.36231884057972%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("16.120218579234972%")
  },
  Text_22_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_22_20: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("99.86338797814209%")
  },
  Text_22_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  ImageBackground_22_21: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.36231884057972%"),
    top: hp("96.85792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_22_22: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("96.85792349726776%"),
    resizeMode: "cover"
  },
  View_22_23: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95652173913043%"),
    top: hp("78.41530054644808%")
  },
  Text_22_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_22_24: {
    width: wp("42.028985507246375%"),
    minWidth: wp("42.028985507246375%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("82.37704918032787%")
  },
  Text_22_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  View_22_25: {
    width: wp("40.09661835748793%"),
    minWidth: wp("40.09661835748793%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%"),
    top: hp("82.37704918032787%")
  },
  Text_22_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  View_22_50: {
    width: wp("10.38647342995169%"),
    minWidth: wp("10.38647342995169%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.65217391304348%"),
    top: hp("103.9617486338798%")
  },
  Text_22_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  View_40_106: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748793%"),
    top: hp("110.79234972677597%")
  },
  ImageBackground_40_107: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_40_113: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.55072463768116%"),
    top: hp("111.6120218579235%")
  },
  Text_40_113: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2: { height: 896 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
