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
      <View style={styles.View_1_54} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf26/0d79/0322f5afe2d681ffc9d08674b67d6601"
        }}
        style={styles.ImageBackground_1_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/412a/b155/c217d6531630949f40547985f202dd70"
        }}
        style={styles.ImageBackground_1_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b715/517f/d352946f0ed58b0b094f3f5d8a52a80d"
        }}
        style={styles.ImageBackground_1_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe95/c323/a2418960611b329dc1c831e1d2d30bfd"
        }}
        style={styles.ImageBackground_1_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a4a/9568/76faa786916f9e233d8a17c6658bcb77"
        }}
        style={styles.ImageBackground_1_59}
      />
      <View style={styles.View_1_60} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e58/7268/33cbc1b2fbb7f19308409869fce92c23"
        }}
        style={styles.ImageBackground_1_61}
      />
      <View style={styles.View_1_62}>
        <Text style={styles.Text_1_62}>Search</Text>
      </View>
      <View style={styles.View_1_63}>
        <Text style={styles.Text_1_63}>Recent</Text>
      </View>
      <View style={styles.View_1_64}>
        <Text style={styles.Text_1_64}>Folders</Text>
      </View>
      <View style={styles.View_1_65}>
        <Text style={styles.Text_1_65}>Starred</Text>
      </View>
      <View style={styles.View_1_66}>
        <Text style={styles.Text_1_66}>Little Talks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9386/9ed1/988dc2a7828f385a7d402d6ac1c86ef7"
        }}
        style={styles.ImageBackground_1_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f9/4522/ab845c0017f841045fa4a5c0ac1e6e30"
        }}
        style={styles.ImageBackground_1_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62e4/0e0e/42ef19e22f0a6ef1e4c6346666d1ab0b"
        }}
        style={styles.ImageBackground_1_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9890/6271/334813f43bf2cebc5b3a712e68e572a3"
        }}
        style={styles.ImageBackground_1_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_1_71}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/7922/2b24a4842772c99921206ae92554357f"
        }}
        style={styles.ImageBackground_1_72}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/7922/2b24a4842772c99921206ae92554357f"
        }}
        style={styles.ImageBackground_1_73}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3270/29aa/81e85702f2cb437be26534e43317916f"
        }}
        style={styles.ImageBackground_1_74}
      />
      <View style={styles.View_1_75}>
        <Text style={styles.Text_1_75}>Thor</Text>
      </View>
      <View style={styles.View_1_76}>
        <Text style={styles.Text_1_76}>Pawn</Text>
      </View>
      <View style={styles.View_1_77}>
        <Text style={styles.Text_1_77}>Dice</Text>
      </View>
      <View style={styles.View_1_78}>
        <Text style={styles.Text_1_78}>Evolve</Text>
      </View>
      <View style={styles.View_1_79}>
        <Text style={styles.Text_1_79}>21 Pilots</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/446b/1efe/bc34b7e71406007753b44a3c112b0b64"
        }}
        style={styles.ImageBackground_1_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/446b/1efe/bc34b7e71406007753b44a3c112b0b64"
        }}
        style={styles.ImageBackground_1_81}
      />
      <View style={styles.View_1_82}>
        <Text style={styles.Text_1_82}>House</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/446b/1efe/bc34b7e71406007753b44a3c112b0b64"
        }}
        style={styles.ImageBackground_1_83}
      />
      <View style={styles.View_1_84}>
        <Text style={styles.Text_1_84}>Music</Text>
      </View>
      <View style={styles.View_1_85}>
        <Text style={styles.Text_1_85}>Movies</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06dd/fcfc/cdda979df81971c416476709cf5a7011"
        }}
        style={styles.ImageBackground_1_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_1_87}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7672/3490/8b6b73aa543d3fb39c8200658371ae50"
        }}
        style={styles.ImageBackground_1_88}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_1_89}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8538/cca9/6c6604b587451a4d4332be5d0c6cea0c"
        }}
        style={styles.ImageBackground_1_90}
      />
      <View style={styles.View_9_51}>
        <Text style={styles.Text_9_51}>Dark Mode</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_54: {
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
    borderColor: "rgba(188, 197, 179, 1)",
    borderWidth: 1
  },
  ImageBackground_1_55: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("0.6830601092896175%"),
    resizeMode: "cover"
  },
  ImageBackground_1_56: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88405797101449%"),
    top: hp("1.639344262295082%"),
    resizeMode: "cover"
  },
  ImageBackground_1_57: {
    width: wp("25.120772946859905%"),
    minWidth: wp("25.120772946859905%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.43961352657005%"),
    top: hp("110.79234972677597%"),
    resizeMode: "cover"
  },
  ImageBackground_1_58: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.8792270531401%"),
    top: hp("111.88524590163935%"),
    resizeMode: "cover"
  },
  ImageBackground_1_59: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("110.79234972677597%"),
    resizeMode: "cover"
  },
  View_1_60: {
    width: wp("80.67632850241546%"),
    minWidth: wp("80.67632850241546%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("101.77595628415301%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  ImageBackground_1_61: {
    width: wp("7.246376811594203%"),
    minWidth: wp("7.246376811594203%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88405797101449%"),
    top: hp("101.91256830601093%"),
    resizeMode: "cover"
  },
  View_1_62: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("101.77595628415301%")
  },
  Text_1_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_63: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("73.49726775956285%")
  },
  Text_1_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_64: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("47.26775956284153%")
  },
  Text_1_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_65: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("19.808743169398905%")
  },
  Text_1_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99516908212561%"),
    top: hp("93.98907103825137%")
  },
  Text_1_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_67: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("79.23497267759562%"),
    resizeMode: "cover"
  },
  ImageBackground_1_68: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("80.05464480874316%"),
    resizeMode: "cover"
  },
  ImageBackground_1_69: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.410628019323674%"),
    top: hp("79.23497267759562%"),
    resizeMode: "cover"
  },
  ImageBackground_1_70: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.85507246376811%"),
    top: hp("80.19125683060109%"),
    resizeMode: "cover"
  },
  ImageBackground_1_71: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908212%"),
    top: hp("80.05464480874316%"),
    resizeMode: "cover"
  },
  ImageBackground_1_72: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%"),
    top: hp("80.19125683060109%"),
    resizeMode: "cover"
  },
  ImageBackground_1_73: {
    width: wp("5.072463768115942%"),
    minWidth: wp("5.072463768115942%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  ImageBackground_1_74: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.33816425120773%"),
    top: hp("25.546448087431695%"),
    resizeMode: "cover"
  },
  View_1_75: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%"),
    top: hp("93.98907103825137%")
  },
  Text_1_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_76: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.19806763285024%"),
    top: hp("93.30601092896174%")
  },
  Text_1_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_77: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("38.66120218579235%")
  },
  Text_1_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_78: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.30434782608695%"),
    top: hp("38.66120218579235%")
  },
  Text_1_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_79: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.91304347826086%"),
    top: hp("38.52459016393443%")
  },
  Text_1_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_80: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("55.32786885245902%"),
    resizeMode: "cover"
  },
  ImageBackground_1_81: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("55.73770491803278%"),
    resizeMode: "cover"
  },
  View_1_82: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("61.885245901639344%")
  },
  Text_1_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_83: {
    width: wp("27.77777777777778%"),
    minWidth: wp("27.77777777777778%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("55.73770491803278%"),
    resizeMode: "cover"
  },
  View_1_84: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.77294685990339%"),
    top: hp("61.885245901639344%")
  },
  Text_1_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_85: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072463768115942%"),
    top: hp("61.885245901639344%")
  },
  Text_1_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_86: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("26.50273224043716%"),
    resizeMode: "cover"
  },
  ImageBackground_1_87: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.30434782608695%"),
    top: hp("26.09289617486339%"),
    resizeMode: "cover"
  },
  ImageBackground_1_88: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.8792270531401%"),
    top: hp("25.683060109289617%"),
    resizeMode: "cover"
  },
  ImageBackground_1_89: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545893%"),
    top: hp("26.09289617486339%"),
    resizeMode: "cover"
  },
  ImageBackground_1_90: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.89371980676329%"),
    top: hp("61.065573770491795%"),
    resizeMode: "cover"
  },
  View_9_51: {
    width: wp("42.7536231884058%"),
    minWidth: wp("42.7536231884058%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.468599033816425%"),
    top: hp("6.693989071038252%")
  },
  Text_9_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
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
