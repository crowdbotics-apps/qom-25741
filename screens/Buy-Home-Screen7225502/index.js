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
      <View style={styles.View_9_56} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_9_57}
      />
      <View style={styles.View_9_87}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
          }}
          style={styles.ImageBackground_I9_87_1_104}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_9_89}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_9_90}
      />
      <View style={styles.View_16_1}>
        <Text style={styles.Text_16_1}>h</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_16_2}
      />
      <View style={styles.View_16_4}>
        <Text style={styles.Text_16_4}>
          Complete the Trilogy! Marvel Studios Thor: Ragnarok
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e810/6fc4/cd2a4af0deb4e6a879f403f7b5f4fbd1"
        }}
        style={styles.ImageBackground_16_26}
      />
      <View style={styles.View_17_4}>
        <Text style={styles.Text_17_4}>^</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d7e/9aeb/7695f573fc4d61f3b8f1b621d87c2a9d"
        }}
        style={styles.ImageBackground_40_83}
      />
      <View style={styles.View_40_84} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af50/b55e/39f52015f460818f2e57ef25ed994198"
        }}
        style={styles.ImageBackground_40_85}
      />
      <View style={styles.View_40_87}>
        <Text style={styles.Text_40_87}>Search</Text>
      </View>
      <View style={styles.View_40_94}>
        <Text style={styles.Text_40_94}>2</Text>
      </View>
      <View style={styles.View_40_98} />
      <View style={styles.View_40_100}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_40_101}
        />
      </View>
      <View style={styles.View_40_110}>
        <Text style={styles.Text_40_110}>o</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_9_56: {
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
  ImageBackground_9_57: {
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
  View_9_87: {
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
  ImageBackground_I9_87_1_104: {
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
  ImageBackground_9_89: {
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
  ImageBackground_9_90: {
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
  View_16_1: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("113.11475409836065%")
  },
  Text_16_1: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_16_2: {
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
  View_16_4: {
    width: wp("62.80193236714976%"),
    minWidth: wp("62.80193236714976%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.59903381642512%"),
    top: hp("77.04918032786885%")
  },
  Text_16_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_16_26: {
    width: wp("111.35265700483092%"),
    minWidth: wp("111.35265700483092%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.830917874396135%"),
    top: hp("27.322404371584703%"),
    resizeMode: "cover"
  },
  View_17_4: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908212%"),
    top: hp("21.721311475409834%")
  },
  Text_17_4: {
    color: "rgba(244, 240, 226, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_40_83: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%"),
    top: hp("98.08743169398907%"),
    resizeMode: "cover"
  },
  View_40_84: {
    width: wp("74.8792270531401%"),
    minWidth: wp("74.8792270531401%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("100.68306010928963%"),
    backgroundColor: "rgba(21, 21, 21, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  ImageBackground_40_85: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.22222222222221%"),
    top: hp("101.09289617486338%"),
    resizeMode: "cover"
  },
  View_40_87: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("100.95628415300546%")
  },
  Text_40_87: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_40_94: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("100.5464480874317%")
  },
  Text_40_94: {
    color: "rgba(244, 240, 226, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_40_98: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    top: hp("110.79234972677597%")
  },
  View_40_100: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748793%"),
    top: hp("111.33879781420765%")
  },
  ImageBackground_40_101: {
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
  View_40_110: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908212%"),
    top: hp("112.56830601092895%")
  },
  Text_40_110: {
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
