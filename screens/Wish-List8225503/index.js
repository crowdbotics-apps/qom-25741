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
      <View style={styles.View_17_9} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_17_10}
      />
      <View style={styles.View_17_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
          }}
          style={styles.ImageBackground_I17_14_1_104}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_17_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_17_17}
      />
      <View style={styles.View_17_18}>
        <Text style={styles.Text_17_18}>h</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_17_19}
      />
      <View style={styles.View_17_25}>
        <Text style={styles.Text_17_25}>
          Whatever It Takes - Evolve Imagine Dragons
        </Text>
      </View>
      <View style={styles.View_21_1}>
        <Text style={styles.Text_21_1}>The Lost World: Jurassic Park</Text>
      </View>
      <View style={styles.View_40_76}>
        <Text style={styles.Text_40_76}>Subtotal</Text>
      </View>
      <View style={styles.View_40_77}>
        <Text style={styles.Text_40_77}>Transmission</Text>
      </View>
      <View style={styles.View_40_78}>
        <Text style={styles.Text_40_78}>Tax</Text>
      </View>
      <View style={styles.View_40_79}>
        <Text style={styles.Text_40_79}>Total</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d25/28c8/5f459477da15626f362fa60b34a8e546"
        }}
        style={styles.ImageBackground_20_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9691/e236/587d536b79b2f6fe292d7b046d340a8f"
        }}
        style={styles.ImageBackground_21_0}
      />
      <View style={styles.View_19_0}>
        <Text style={styles.Text_19_0}>$1.29</Text>
      </View>
      <View style={styles.View_21_2}>
        <Text style={styles.Text_21_2}>$13.99</Text>
      </View>
      <View style={styles.View_21_3}>
        <Text style={styles.Text_21_3}>$15.28</Text>
      </View>
      <View style={styles.View_40_80}>
        <Text style={styles.Text_40_80}>$0.95</Text>
      </View>
      <View style={styles.View_40_81}>
        <Text style={styles.Text_40_81}>$1.32</Text>
      </View>
      <View style={styles.View_40_82}>
        <Text style={styles.Text_40_82}>$17.55</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f9/4522/ab845c0017f841045fa4a5c0ac1e6e30"
        }}
        style={styles.ImageBackground_19_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a14/a569/1932b6ba908620de4299ab21d47f9b30"
        }}
        style={styles.ImageBackground_17_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad1/5ecd/b620d1c8a17c585b000ab93392617e85"
        }}
        style={styles.ImageBackground_40_75}
      />
      <View style={styles.View_40_104}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_40_105}
        />
      </View>
      <View style={styles.View_40_112}>
        <Text style={styles.Text_40_112}>o</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_17_9: {
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
  ImageBackground_17_10: {
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
  View_17_14: {
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
  ImageBackground_I17_14_1_104: {
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
  ImageBackground_17_16: {
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
  ImageBackground_17_17: {
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
  View_17_18: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.560386473429952%"),
    top: hp("113.11475409836065%")
  },
  Text_17_18: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_17_19: {
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
  View_17_25: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.120772946859905%"),
    top: hp("19.94535519125683%")
  },
  Text_17_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_21_1: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.08695652173913%"),
    top: hp("35.10928961748634%")
  },
  Text_21_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_76: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.072463768115945%"),
    top: hp("51.36612021857923%")
  },
  Text_40_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_77: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99516908212561%"),
    top: hp("56.830601092896174%")
  },
  Text_40_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_78: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%"),
    top: hp("62.295081967213115%")
  },
  Text_40_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_79: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.25120772946859%"),
    top: hp("67.75956284153006%")
  },
  Text_40_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_20_1: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("35.79234972677596%"),
    resizeMode: "cover"
  },
  ImageBackground_21_0: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782608%"),
    top: hp("20.62841530054645%"),
    resizeMode: "cover"
  },
  View_19_0: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.40096618357488%"),
    top: hp("23.90710382513661%")
  },
  Text_19_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_21_2: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%"),
    top: hp("37.43169398907104%")
  },
  Text_21_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_21_3: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.26086956521739%"),
    top: hp("50.95628415300546%")
  },
  Text_21_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_80: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46859903381642%"),
    top: hp("56.4207650273224%")
  },
  Text_40_80: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_81: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.64251207729468%"),
    top: hp("61.885245901639344%")
  },
  Text_40_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_40_82: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%"),
    top: hp("67.34972677595628%")
  },
  Text_40_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_19_1: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("35.79234972677596%"),
    resizeMode: "cover"
  },
  ImageBackground_17_27: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782608%"),
    top: hp("20.62841530054645%"),
    resizeMode: "cover"
  },
  ImageBackground_40_75: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.98550724637681%"),
    top: hp("96.58469945355192%"),
    resizeMode: "cover"
  },
  View_40_104: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    top: hp("111.33879781420765%")
  },
  ImageBackground_40_105: {
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
  View_40_112: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.792270531400966%"),
    top: hp("112.56830601092895%")
  },
  Text_40_112: {
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
