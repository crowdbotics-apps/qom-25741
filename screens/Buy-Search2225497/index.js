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
      <View style={styles.View_209_4} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_209_5}
      />
      <View style={styles.View_209_6} />
      <View style={styles.View_209_7}>
        <Text style={styles.Text_209_7}>Jurrasic Park</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af50/b55e/39f52015f460818f2e57ef25ed994198"
        }}
        style={styles.ImageBackground_209_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
        }}
        style={styles.ImageBackground_209_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_209_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_209_18}
      />
      <View style={styles.View_209_49}>
        <Text style={styles.Text_209_49}>h</Text>
      </View>
      <View style={styles.View_209_50}>
        <Text style={styles.Text_209_50}>H</Text>
      </View>
      <View style={styles.View_212_0}>
        <Text style={styles.Text_212_0}>Jurassic Park</Text>
      </View>
      <View style={styles.View_222_3}>
        <Text style={styles.Text_222_3}>Jurassic Park 5-Movie Collection</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93c1/3f4e/84f3bab16bb86b5d41500f3af65b30e6"
        }}
        style={styles.ImageBackground_217_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4669/938c/c8c5e84d1f536fa3636fea67cb2ae760"
        }}
        style={styles.ImageBackground_212_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4669/938c/c8c5e84d1f536fa3636fea67cb2ae760"
        }}
        style={styles.ImageBackground_222_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/91d4/cd5cbd55d9a8452fb114ae623104a1fd"
        }}
        style={styles.ImageBackground_209_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa11/0546/3141461f6b815758d4070d1f55cc1e5f"
        }}
        style={styles.ImageBackground_217_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5505/4d59/1f6931fb4be5e91e124add444eb7b564"
        }}
        style={styles.ImageBackground_217_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4669/938c/c8c5e84d1f536fa3636fea67cb2ae760"
        }}
        style={styles.ImageBackground_217_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/91d4/cd5cbd55d9a8452fb114ae623104a1fd"
        }}
        style={styles.ImageBackground_217_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa11/0546/3141461f6b815758d4070d1f55cc1e5f"
        }}
        style={styles.ImageBackground_217_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5505/4d59/1f6931fb4be5e91e124add444eb7b564"
        }}
        style={styles.ImageBackground_217_12}
      />
      <View style={styles.View_217_7}>
        <Text style={styles.Text_217_7}>The Lost World: Jurassic Park</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4669/938c/c8c5e84d1f536fa3636fea67cb2ae760"
        }}
        style={styles.ImageBackground_219_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f954/91d4/cd5cbd55d9a8452fb114ae623104a1fd"
        }}
        style={styles.ImageBackground_219_16}
      />
      <View style={styles.View_219_19}>
        <Text style={styles.Text_219_19}>Jurassic Park III</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d25/28c8/5f459477da15626f362fa60b34a8e546"
        }}
        style={styles.ImageBackground_217_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ac3/e14c/82c326c9555b4eb9355b5a57dcd059aa"
        }}
        style={styles.ImageBackground_217_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ac/8690/1f6f38b9ac7c9acf54b4815ee3865ee7"
        }}
        style={styles.ImageBackground_222_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d06/bfec/e1270a1a16bdd95a573c98889b65024d"
        }}
        style={styles.ImageBackground_222_18}
      />
      <View style={styles.View_222_27}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_222_28}
        />
      </View>
      <View style={styles.View_222_29}>
        <Text style={styles.Text_222_29}>o</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_222_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d7e/9aeb/7695f573fc4d61f3b8f1b621d87c2a9d"
        }}
        style={styles.ImageBackground_222_32}
      />
      <View style={styles.View_222_33}>
        <Text style={styles.Text_222_33}>2</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4513/4398/52b3c71a220c9879cae4f02690705728"
        }}
        style={styles.ImageBackground_222_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a61/e515/07d79e48efb4ad2412268439153d8351"
        }}
        style={styles.ImageBackground_222_41}
      />
      <View style={styles.View_222_15}>
        <Text style={styles.Text_222_15}>Jurassic Park Figure Model</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3e/dd0b/bc125fd4257c53f87f07d4e3312b785b"
        }}
        style={styles.ImageBackground_222_14}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_209_4: {
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
  ImageBackground_209_5: {
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
  View_209_6: {
    width: wp("74.8792270531401%"),
    minWidth: wp("74.8792270531401%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("101.77595628415301%"),
    backgroundColor: "rgba(21, 21, 21, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_209_7: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("101.77595628415301%")
  },
  Text_209_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_209_14: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25603864734299%"),
    top: hp("102.18579234972678%"),
    resizeMode: "cover"
  },
  ImageBackground_209_16: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("110.10928961748634%"),
    resizeMode: "cover"
  },
  ImageBackground_209_17: {
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
  ImageBackground_209_18: {
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
  View_209_49: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("113.11475409836065%")
  },
  Text_209_49: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_209_50: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.02898550724638%"),
    top: hp("99.72677595628416%")
  },
  Text_209_50: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  View_212_0: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("14.207650273224044%")
  },
  Text_212_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  View_222_3: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.193236714975846%"),
    top: hp("56.830601092896174%")
  },
  Text_222_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_217_1: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("14.207650273224044%"),
    resizeMode: "cover"
  },
  ImageBackground_212_2: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("19.672131147540984%"),
    resizeMode: "cover"
  },
  ImageBackground_222_4: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("65.30054644808743%"),
    resizeMode: "cover"
  },
  ImageBackground_209_44: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("19.672131147540984%"),
    resizeMode: "cover"
  },
  ImageBackground_217_5: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("20.081967213114755%"),
    resizeMode: "cover"
  },
  ImageBackground_217_6: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("20.081967213114755%"),
    resizeMode: "cover"
  },
  ImageBackground_217_9: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("36.0655737704918%"),
    resizeMode: "cover"
  },
  ImageBackground_217_10: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("36.0655737704918%"),
    resizeMode: "cover"
  },
  ImageBackground_217_11: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.864734299516904%"),
    top: hp("36.47540983606557%"),
    resizeMode: "cover"
  },
  ImageBackground_217_12: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.04347826086957%"),
    top: hp("36.47540983606557%"),
    resizeMode: "cover"
  },
  View_217_7: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("28.005464480874316%")
  },
  Text_217_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_219_15: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("48.90710382513661%"),
    resizeMode: "cover"
  },
  ImageBackground_219_16: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("48.90710382513661%"),
    resizeMode: "cover"
  },
  View_219_19: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("42.48633879781421%")
  },
  Text_219_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_217_8: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("28.688524590163933%"),
    resizeMode: "cover"
  },
  ImageBackground_217_16: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("42.89617486338798%"),
    resizeMode: "cover"
  },
  ImageBackground_222_17: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: hp("95.08196721311475%"),
    resizeMode: "cover"
  },
  ImageBackground_222_18: {
    width: wp("0.0000011719721266457132%"),
    minWidth: wp("0.0000011719721266457132%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.13043478260869%"),
    top: hp("15.027322404371585%")
  },
  View_222_27: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748793%"),
    top: hp("111.47540983606557%")
  },
  ImageBackground_222_28: {
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
  View_222_29: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.55072463768116%"),
    top: hp("112.29508196721312%")
  },
  Text_222_29: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_222_30: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.84541062801932%"),
    top: hp("112.29508196721312%"),
    resizeMode: "cover"
  },
  ImageBackground_222_32: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.3671497584541%"),
    top: hp("99.04371584699454%"),
    resizeMode: "cover"
  },
  View_222_33: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.19806763285024%"),
    top: hp("101.50273224043715%")
  },
  Text_222_33: {
    color: "rgba(244, 240, 226, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  ImageBackground_222_38: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("72.6775956284153%"),
    resizeMode: "cover"
  },
  ImageBackground_222_41: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.88405797101449%"),
    top: hp("80.19125683060109%"),
    resizeMode: "cover"
  },
  View_222_15: {
    width: wp("49.75845410628019%"),
    minWidth: wp("49.75845410628019%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.193236714975846%"),
    top: hp("85.92896174863388%")
  },
  Text_222_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_222_14: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("86.47540983606558%"),
    resizeMode: "cover"
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
