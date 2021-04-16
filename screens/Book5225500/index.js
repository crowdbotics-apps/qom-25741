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
      <View style={styles.View_50_14}>
        <Text style={styles.Text_50_14}>o</Text>
      </View>
      <View style={styles.View_50_24}>
        <Text style={styles.Text_50_24}>
          Bella smiles, willing away her tears. “It is, in a way,” she whispers,
          thinking about her father’s letter, which had arrived two days ago. In
          it, Henry described how overjoyed he and Gustava were upon learning of
          her intent to marry. We love you so much, dear Bella. Your Jakob is a
          good soul, that boy, with a fine family. We will celebrate, all of us,
          when we are together again. Rather than show the letter to Jakob right
          away, Bella had slipped it under her pillow and decided she’d let him
          read it later that evening, once they’d returned to their apartment, a
          married couple.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_50_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_50_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_50_27}
      />
      <View style={styles.View_50_29} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2040/69d8/23fb2fca14742750ff0d88a3a34ff6db"
        }}
        style={styles.ImageBackground_50_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7122/1330/808ee5c62f1843482da31dc4995e04b7"
        }}
        style={styles.ImageBackground_50_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e719/7a6f/d7c586dd8f3f926518da385a457c97ed"
        }}
        style={styles.ImageBackground_50_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a33/1884/72a40327f1caa3af74650a4cc39a72e4"
        }}
        style={styles.ImageBackground_50_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc87/a88a/5aec66fabbd54fb2160a0d08df350223"
        }}
        style={styles.ImageBackground_52_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b46/dd0f/dece4c9f486c002aac37e7bcd6ce91da"
        }}
        style={styles.ImageBackground_52_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/366e/500c/f46d282658551807e51cb2067c3cbaa5"
        }}
        style={styles.ImageBackground_52_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8655/0853/2497dd62894702d9a3517ad1a451e9a9"
        }}
        style={styles.ImageBackground_52_0}
      />
      <View style={styles.View_53_8} />
      <View style={styles.View_53_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/9171/a7a9e431e131ef1ef174eab500e13697"
          }}
          style={styles.ImageBackground_I53_9_1_103}
        />
        <View style={styles.View_I53_9_9_49}>
          <Text style={styles.Text_I53_9_9_49}>s</Text>
        </View>
      </View>
      <View style={styles.View_53_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
          }}
          style={styles.ImageBackground_I53_10_1_104}
        />
      </View>
      <View style={styles.View_53_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_53_12}
        />
      </View>
      <View style={styles.View_53_13}>
        <Text style={styles.Text_53_13}>o</Text>
      </View>
      <View style={styles.View_53_7}>
        <Text style={styles.Text_53_7}>X</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_50_14: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.54106280193237%"),
    top: hp("112.1584699453552%")
  },
  Text_50_14: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_50_24: {
    width: wp("85.5072463768116%"),
    minWidth: wp("85.5072463768116%"),
    minHeight: hp("87.1584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("19.672131147540984%")
  },
  Text_50_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_50_25: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.05797101449275%"),
    top: hp("1.366120218579235%"),
    resizeMode: "cover"
  },
  ImageBackground_50_26: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("2.185792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_50_27: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("6.693989071038252%"),
    resizeMode: "cover"
  },
  View_50_29: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    top: hp("61.20218579234973%"),
    backgroundColor: "rgba(244, 240, 226, 1)"
  },
  ImageBackground_50_33: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.70048309178745%"),
    top: hp("63.25136612021858%"),
    resizeMode: "cover"
  },
  ImageBackground_50_30: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.59420289855072%"),
    top: hp("60.245901639344254%")
  },
  ImageBackground_50_32: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.79710144927537%"),
    top: hp("62.841530054644814%"),
    resizeMode: "cover"
  },
  ImageBackground_50_34: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.830917874396135%"),
    top: hp("69.53551912568307%"),
    resizeMode: "cover"
  },
  ImageBackground_52_3: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922705%"),
    top: hp("72.54098360655738%")
  },
  ImageBackground_52_4: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.4927536231884%"),
    top: hp("71.72131147540983%")
  },
  ImageBackground_52_5: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.84057971014492%"),
    top: hp("71.72131147540983%")
  },
  ImageBackground_52_0: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.52657004830918%"),
    top: hp("70.90163934426229%"),
    resizeMode: "cover"
  },
  View_53_8: {
    width: wp("101.69082125603866%"),
    minWidth: wp("101.69082125603866%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7246376811594203%"),
    top: hp("109.8360655737705%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0,
    borderColor: "rgba(14, 13, 13, 1)",
    borderWidth: 1.5
  },
  View_53_9: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("111.33879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_9_1_103: {
    flexGrow: 1,
    width: wp("18.115942028985508%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I53_9_9_49: {
    flexGrow: 1,
    width: wp("6.763285024154589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830917%"),
    top: hp("2.5956284153005527%")
  },
  Text_I53_9_9_49: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_53_10: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.405797101449274%"),
    top: hp("110.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_10_1_104: {
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
  View_53_11: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.05314009661835%"),
    top: hp("111.74863387978142%")
  },
  ImageBackground_53_12: {
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
  View_53_13: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.54106280193237%"),
    top: hp("112.8415300546448%")
  },
  Text_53_13: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_53_7: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.58454106280193%"),
    top: hp("112.97814207650273%")
  },
  Text_53_7: {
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
