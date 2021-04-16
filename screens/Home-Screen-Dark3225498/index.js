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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6122/25b1/a08a056a86537a0ca58edeec1f3b924f"
        }}
        style={styles.ImageBackground_1_94}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6122/25b1/a08a056a86537a0ca58edeec1f3b924f"
        }}
        style={styles.ImageBackground_1_95}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6122/25b1/a08a056a86537a0ca58edeec1f3b924f"
        }}
        style={styles.ImageBackground_1_96}
      />
      <View style={styles.View_1_52} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_1_107}
      />
      <View style={styles.View_1_15}>
        <Text style={styles.Text_1_15}>Recent</Text>
      </View>
      <View style={styles.View_1_31}>
        <Text style={styles.Text_1_31}>Folders</Text>
      </View>
      <View style={styles.View_1_32}>
        <Text style={styles.Text_1_32}>Files</Text>
      </View>
      <View style={styles.View_1_24}>
        <Text style={styles.Text_1_24}>Little Talks</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5478/4b30/3ae46a3e1127968e68ed57a0263504a4"
        }}
        style={styles.ImageBackground_1_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f9/4522/ab845c0017f841045fa4a5c0ac1e6e30"
        }}
        style={styles.ImageBackground_1_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62e4/0e0e/42ef19e22f0a6ef1e4c6346666d1ab0b"
        }}
        style={styles.ImageBackground_1_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_1_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eba/a0be/c197aa8d90e8c390962fd88950c31100"
        }}
        style={styles.ImageBackground_1_45}
      />
      <View style={styles.View_1_28}>
        <Text style={styles.Text_1_28}>Thor</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35fc/18e7/28c5870d2bb0fb77f2451e91b55fa89c"
        }}
        style={styles.ImageBackground_1_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a81/ef0b/bd8ed92e7c1d29710289e3ee2682b879"
        }}
        style={styles.ImageBackground_1_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a81/ef0b/bd8ed92e7c1d29710289e3ee2682b879"
        }}
        style={styles.ImageBackground_1_99}
      />
      <View style={styles.View_1_29}>
        <Text style={styles.Text_1_29}>Pawn</Text>
      </View>
      <View style={styles.View_1_42}>
        <Text style={styles.Text_1_42}>Dice</Text>
      </View>
      <View style={styles.View_1_46}>
        <Text style={styles.Text_1_46}>Evolve</Text>
      </View>
      <View style={styles.View_1_49}>
        <Text style={styles.Text_1_49}>21 Pilots</Text>
      </View>
      <View style={styles.View_1_36}>
        <Text style={styles.Text_1_36}>House</Text>
      </View>
      <View style={styles.View_1_40}>
        <Text style={styles.Text_1_40}>Book Club</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4264/5c7a/11a8f5f4166d6534413a4370c5faaceb"
        }}
        style={styles.ImageBackground_45_0}
      />
      <View style={styles.View_1_33}>
        <Text style={styles.Text_1_33}>Movies</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f3/bf61/95a51871f4f3fcee095e46288b39c94f"
        }}
        style={styles.ImageBackground_1_91}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_1_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b54f/ea5e/0a5e6d4e4bfd7f6b7f3d546dcb539b5a"
        }}
        style={styles.ImageBackground_1_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_1_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c973/d888/06ab0aad59f8ef3e40de79547b72a3a3"
        }}
        style={styles.ImageBackground_1_100}
      />
      <View style={styles.View_9_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/9171/a7a9e431e131ef1ef174eab500e13697"
          }}
          style={styles.ImageBackground_1_103}
        />
        <View style={styles.View_9_49}>
          <Text style={styles.Text_9_49}>s</Text>
        </View>
      </View>
      <View style={styles.View_9_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
          }}
          style={styles.ImageBackground_1_104}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_1_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_1_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7074/b932/24bccf76bc2c37be49dcf5c8f621595e"
        }}
        style={styles.ImageBackground_9_95}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7074/b932/24bccf76bc2c37be49dcf5c8f621595e"
        }}
        style={styles.ImageBackground_9_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7074/b932/24bccf76bc2c37be49dcf5c8f621595e"
        }}
        style={styles.ImageBackground_9_96}
      />
      <View style={styles.View_40_15} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4468/eb1f/8701ddf62dcee0369f464e4960458bde"
        }}
        style={styles.ImageBackground_40_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af50/b55e/39f52015f460818f2e57ef25ed994198"
        }}
        style={styles.ImageBackground_40_16}
      />
      <View style={styles.View_40_19}>
        <Text style={styles.Text_40_19}>Search</Text>
      </View>
      <View style={styles.View_40_99}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_40_96}
        />
      </View>
      <View style={styles.View_40_97}>
        <Text style={styles.Text_40_97}>o</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_94: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("54.78142076502732%"),
    resizeMode: "cover"
  },
  ImageBackground_1_95: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("54.78142076502732%"),
    resizeMode: "cover"
  },
  ImageBackground_1_96: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%"),
    top: hp("54.78142076502732%"),
    resizeMode: "cover"
  },
  View_1_52: {
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
  ImageBackground_1_107: {
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
  View_1_15: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: hp("73.49726775956285%")
  },
  Text_1_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_31: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("45.62841530054645%")
  },
  Text_1_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_32: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("15.437158469945356%")
  },
  Text_1_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_24: {
    width: wp("30.676328502415455%"),
    minWidth: wp("30.676328502415455%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.99516908212561%"),
    top: hp("93.98907103825137%")
  },
  Text_1_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_16: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("79.23497267759562%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_1_21: {
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
  ImageBackground_1_22: {
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
  ImageBackground_1_23: {
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
  ImageBackground_1_45: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    top: hp("21.174863387978142%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_1_28: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%"),
    top: hp("93.98907103825137%")
  },
  Text_1_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_97: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("21.85792349726776%"),
    resizeMode: "cover"
  },
  ImageBackground_1_98: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("20.76502732240437%"),
    resizeMode: "cover"
  },
  ImageBackground_1_99: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%"),
    top: hp("80.32786885245902%"),
    resizeMode: "cover"
  },
  View_1_29: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.19806763285024%"),
    top: hp("93.30601092896174%")
  },
  Text_1_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_42: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309178%"),
    top: hp("34.2896174863388%")
  },
  Text_1_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("19.082125603864732%"),
    minWidth: wp("19.082125603864732%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.028985507246375%"),
    top: hp("34.2896174863388%")
  },
  Text_1_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_49: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.63768115942028%"),
    top: hp("34.15300546448087%")
  },
  Text_1_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_36: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("60.245901639344254%")
  },
  Text_1_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_40: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.53140096618358%"),
    top: hp("58.060109289617486%")
  },
  Text_1_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_45_0: {
    width: wp("10.144927536231885%"),
    minWidth: wp("10.144927536231885%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.59903381642512%"),
    top: hp("55.73770491803278%"),
    resizeMode: "cover"
  },
  View_1_33: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("60.245901639344254%")
  },
  Text_1_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_1_91: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.68599033816425%"),
    top: hp("59.56284153005464%"),
    resizeMode: "cover"
  },
  ImageBackground_1_47: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.028985507246375%"),
    top: hp("21.721311475409834%"),
    resizeMode: "cover"
  },
  ImageBackground_1_48: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.60386473429952%"),
    top: hp("21.311475409836063%"),
    resizeMode: "cover",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_1_50: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.08695652173914%"),
    top: hp("21.721311475409834%"),
    resizeMode: "cover"
  },
  ImageBackground_1_100: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("80.05464480874316%"),
    resizeMode: "cover"
  },
  View_9_1: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("110.79234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_103: {
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
  View_9_49: {
    flexGrow: 1,
    width: wp("6.763285024154589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830917%"),
    top: hp("2.5956284153005384%")
  },
  Text_9_49: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_0: {
    width: wp("23.67149758454106%"),
    minWidth: wp("23.67149758454106%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.130434782608695%"),
    top: hp("109.8360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_104: {
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
  ImageBackground_1_106: {
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
  ImageBackground_1_108: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("6.147540983606557%"),
    resizeMode: "cover"
  },
  ImageBackground_9_95: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.454106280193244%"),
    top: hp("31.147540983606557%"),
    resizeMode: "cover"
  },
  ImageBackground_9_97: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.23671497584542%"),
    top: hp("31.284153005464482%"),
    resizeMode: "cover"
  },
  ImageBackground_9_96: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019323%"),
    top: hp("30.737704918032787%"),
    resizeMode: "cover"
  },
  View_40_15: {
    width: wp("74.8792270531401%"),
    minWidth: wp("74.8792270531401%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%"),
    top: hp("102.45901639344261%"),
    backgroundColor: "rgba(21, 21, 21, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  ImageBackground_40_17: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.85024154589372%"),
    top: hp("100.68306010928963%"),
    resizeMode: "cover"
  },
  ImageBackground_40_16: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.49758454106279%"),
    top: hp("102.86885245901641%"),
    resizeMode: "cover"
  },
  View_40_19: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("102.73224043715847%")
  },
  Text_40_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_40_99: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%"),
    top: hp("111.20218579234972%")
  },
  ImageBackground_40_96: {
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
  View_40_97: {
    width: wp("8.937198067632849%"),
    minWidth: wp("8.937198067632849%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.26570048309179%"),
    top: hp("112.29508196721312%")
  },
  Text_40_97: {
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
