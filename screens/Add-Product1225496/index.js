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
      <View style={styles.View_39_0} />
      <View style={styles.View_32_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_32_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/9171/a7a9e431e131ef1ef174eab500e13697"
        }}
        style={styles.ImageBackground_32_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
        }}
        style={styles.ImageBackground_32_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_32_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_32_24}
      />
      <View style={styles.View_32_55}>
        <Text style={styles.Text_32_55}>h</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad1/5ecd/b620d1c8a17c585b000ab93392617e85"
        }}
        style={styles.ImageBackground_37_0}
      />
      <View style={styles.View_37_1}>
        <Text style={styles.Text_37_1}>Upload</Text>
      </View>
      <View style={styles.View_39_1} />
      <View style={styles.View_40_115} />
      <View style={styles.View_39_2}>
        <Text style={styles.Text_39_2}>Title</Text>
      </View>
      <View style={styles.View_40_116} />
      <View style={styles.View_40_117}>
        <Text style={styles.Text_40_117}>Album</Text>
      </View>
      <View style={styles.View_39_4}>
        <Text style={styles.Text_39_4}>Music</Text>
      </View>
      <View style={styles.View_40_119}>
        <Text style={styles.Text_40_119}>Album 1</Text>
      </View>
      <View style={styles.View_40_121}>
        <Text style={styles.Text_40_121}>Permissions &amp; Price</Text>
      </View>
      <View style={styles.View_39_3}>
        <Text style={styles.Text_39_3}>Type</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dea/bfee/dd4c9e4135a0ca694df4a646dc8fc5c6"
        }}
        style={styles.ImageBackground_40_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dea/bfee/dd4c9e4135a0ca694df4a646dc8fc5c6"
        }}
        style={styles.ImageBackground_40_118}
      />
      <View style={styles.View_40_124} />
      <View style={styles.View_40_125}>
        <Text style={styles.Text_40_125}>Standard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dea/bfee/dd4c9e4135a0ca694df4a646dc8fc5c6"
        }}
        style={styles.ImageBackground_40_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_40_14}
      />
      <View style={styles.View_53_0}>
        <Text style={styles.Text_53_0}>x</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_39_0: {
    width: wp("53.3816425120773%"),
    minWidth: wp("53.3816425120773%"),
    height: hp("30.191256830601095%"),
    minHeight: hp("30.191256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.42995169082126%"),
    top: hp("16.256830601092894%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  View_32_11: {
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
  ImageBackground_32_12: {
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
  ImageBackground_32_21: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748793%"),
    top: hp("110.92896174863387%"),
    resizeMode: "cover"
  },
  ImageBackground_32_22: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39613526570048%"),
    top: hp("110.10928961748634%"),
    resizeMode: "cover"
  },
  ImageBackground_32_23: {
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
  ImageBackground_32_24: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("4.644808743169399%"),
    resizeMode: "cover"
  },
  View_32_55: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%"),
    top: hp("113.11475409836065%")
  },
  Text_32_55: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_37_0: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("28.142076502732237%"),
    resizeMode: "cover"
  },
  View_37_1: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("21.721311475409834%")
  },
  Text_37_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_39_1: {
    width: wp("73.18840579710145%"),
    minWidth: wp("73.18840579710145%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("56.4207650273224%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  View_40_115: {
    width: wp("73.18840579710145%"),
    minWidth: wp("73.18840579710145%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.251207729468598%"),
    top: hp("69.80874316939891%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  View_39_2: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("64.34426229508196%")
  },
  Text_39_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_40_116: {
    width: wp("73.18840579710145%"),
    minWidth: wp("73.18840579710145%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.009661835748794%"),
    top: hp("82.92349726775956%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  View_40_117: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("77.45901639344262%")
  },
  Text_40_117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_39_4: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.014492753623188%"),
    top: hp("57.377049180327866%")
  },
  Text_39_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_40_119: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.014492753623188%"),
    top: hp("83.87978142076503%")
  },
  Text_40_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_40_121: {
    width: wp("83.81642512077295%"),
    minWidth: wp("83.81642512077295%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("91.2568306010929%")
  },
  Text_40_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_39_3: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("49.72677595628415%")
  },
  Text_39_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  ImageBackground_40_0: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("58.19672131147541%"),
    resizeMode: "cover"
  },
  ImageBackground_40_118: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("85.10928961748634%"),
    resizeMode: "cover"
  },
  View_40_124: {
    width: wp("73.18840579710145%"),
    minWidth: wp("73.18840579710145%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.009661835748794%"),
    top: hp("97.40437158469946%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  View_40_125: {
    width: wp("37.19806763285024%"),
    minWidth: wp("37.19806763285024%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.014492753623188%"),
    top: hp("98.36065573770492%")
  },
  Text_40_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_40_126: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("99.59016393442623%"),
    resizeMode: "cover"
  },
  ImageBackground_40_14: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("112.29508196721312%"),
    resizeMode: "cover"
  },
  View_53_0: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("113.52459016393443%")
  },
  Text_53_0: {
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
