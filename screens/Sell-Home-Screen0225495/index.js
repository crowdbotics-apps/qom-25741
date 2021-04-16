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
      <View style={styles.View_9_4} />
      <View style={styles.View_9_6} />
      <View style={styles.View_9_5} />
      <View style={styles.View_1_114} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_1_115}
      />
      <View style={styles.View_1_116} />
      <View style={styles.View_1_117}>
        <Text style={styles.Text_1_117}>Search</Text>
      </View>
      <View style={styles.View_40_18}>
        <Text style={styles.Text_40_18}>Search</Text>
      </View>
      <View style={styles.View_1_119}>
        <Text style={styles.Text_1_119}>Folders</Text>
      </View>
      <View style={styles.View_1_135}>
        <Text style={styles.Text_1_135}>Lyrics</Text>
      </View>
      <View style={styles.View_9_7}>
        <Text style={styles.Text_9_7}>Album.</Text>
      </View>
      <View style={styles.View_1_136}>
        <Text style={styles.Text_1_136}>Instrumentals</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f3/bf61/95a51871f4f3fcee095e46288b39c94f"
        }}
        style={styles.ImageBackground_1_138}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af50/b55e/39f52015f460818f2e57ef25ed994198"
        }}
        style={styles.ImageBackground_1_143}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/9171/a7a9e431e131ef1ef174eab500e13697"
        }}
        style={styles.ImageBackground_1_144}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
        }}
        style={styles.ImageBackground_1_145}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_1_147}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_1_148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4468/eb1f/8701ddf62dcee0369f464e4960458bde"
        }}
        style={styles.ImageBackground_5_0}
      />
      <View style={styles.View_9_8} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_9}
      />
      <View style={styles.View_9_10}>
        <Text style={styles.Text_9_10}>Rising Sun - Bay Point</Text>
      </View>
      <View style={styles.View_9_11} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_12}
      />
      <View style={styles.View_9_13}>
        <Text style={styles.Text_9_13}>Setting Sun - Bay Point</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6976/f41b/6c4827681899785b3e7019aaa28401a5"
        }}
        style={styles.ImageBackground_9_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6976/f41b/6c4827681899785b3e7019aaa28401a5"
        }}
        style={styles.ImageBackground_9_15}
      />
      <View style={styles.View_9_18} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_19}
      />
      <View style={styles.View_9_20}>
        <Text style={styles.Text_9_20}>Trenches - Bay Point</Text>
      </View>
      <View style={styles.View_9_21} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_22}
      />
      <View style={styles.View_9_23}>
        <Text style={styles.Text_9_23}>At the end of the fold -...</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6976/f41b/6c4827681899785b3e7019aaa28401a5"
        }}
        style={styles.ImageBackground_9_24}
      />
      <View style={styles.View_9_26} />
      <View style={styles.View_9_28}>
        <Text style={styles.Text_9_28}>Bench Start - Album 1</Text>
      </View>
      <View style={styles.View_9_29} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_30}
      />
      <View style={styles.View_9_31}>
        <Text style={styles.Text_9_31}>Bouncefull - Tunnels</Text>
      </View>
      <View style={styles.View_9_34} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_35}
      />
      <View style={styles.View_9_36}>
        <Text style={styles.Text_9_36}>Dinch Dihn - Tunnels</Text>
      </View>
      <View style={styles.View_9_37} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/206e/cad6/e11bb4fda9f7b0f93cb83b11540c9129"
        }}
        style={styles.ImageBackground_9_38}
      />
      <View style={styles.View_9_39}>
        <Text style={styles.Text_9_39}>Far East - Bay Point</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b696/4cfc/85d8c1dead4fe142e4ea6e7699915e84"
        }}
        style={styles.ImageBackground_9_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b696/4cfc/85d8c1dead4fe142e4ea6e7699915e84"
        }}
        style={styles.ImageBackground_9_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f9/4522/ab845c0017f841045fa4a5c0ac1e6e30"
        }}
        style={styles.ImageBackground_9_42}
      />
      <View style={styles.View_9_50}>
        <Text style={styles.Text_9_50}>h</Text>
      </View>
      <View style={styles.View_36_0}>
        <Text style={styles.Text_36_0}>H</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_40_13}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_9_4: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("90.57377049180327%"),
    backgroundColor: "rgba(244, 240, 226, 1)"
  },
  View_9_6: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.80676328502415%"),
    top: hp("90.57377049180327%"),
    backgroundColor: "rgba(244, 240, 226, 1)"
  },
  View_9_5: {
    width: wp("32.125603864734295%"),
    minWidth: wp("32.125603864734295%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("90.57377049180327%"),
    backgroundColor: "rgba(244, 240, 226, 1)"
  },
  View_1_114: {
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
  ImageBackground_1_115: {
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
  View_1_116: {
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
  View_1_117: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("101.77595628415301%")
  },
  Text_1_117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_40_18: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714976%"),
    top: hp("101.77595628415301%")
  },
  Text_40_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_119: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3816425120772946%"),
    top: hp("82.5136612021858%")
  },
  Text_1_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_1_135: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("91.53005464480874%")
  },
  Text_1_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_7: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25603864734299%"),
    top: hp("92.07650273224044%")
  },
  Text_9_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_1_136: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821256%"),
    top: hp("91.93989071038251%")
  },
  Text_1_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  ImageBackground_1_138: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.65217391304348%"),
    top: hp("91.80327868852459%"),
    resizeMode: "cover"
  },
  ImageBackground_1_143: {
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
  ImageBackground_1_144: {
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
  ImageBackground_1_145: {
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
  ImageBackground_1_147: {
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
  ImageBackground_1_148: {
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
  ImageBackground_5_0: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%"),
    top: hp("100%"),
    resizeMode: "cover"
  },
  View_9_8: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("12.841530054644808%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_9: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("14.754098360655737%"),
    resizeMode: "cover"
  },
  View_9_10: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.082125603864732%"),
    top: hp("14.48087431693989%")
  },
  Text_9_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.345,
    textTransform: "none"
  },
  View_9_11: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_12: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("23.224043715846996%"),
    resizeMode: "cover"
  },
  View_9_13: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.082125603864732%"),
    top: hp("22.950819672131146%")
  },
  Text_9_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.32999999999999996,
    textTransform: "none"
  },
  ImageBackground_9_14: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.15942028985508%"),
    top: hp("14.617486338797814%"),
    resizeMode: "cover"
  },
  ImageBackground_9_15: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.15942028985508%"),
    top: hp("22.950819672131146%"),
    resizeMode: "cover"
  },
  View_9_18: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_19: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("31.693989071038253%"),
    resizeMode: "cover"
  },
  View_9_20: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("31.420765027322407%")
  },
  Text_9_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_21: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("38.25136612021858%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_22: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("40.16393442622951%"),
    resizeMode: "cover"
  },
  View_9_23: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.84057971014493%"),
    top: hp("39.89071038251366%")
  },
  Text_9_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_9_24: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.91787439613528%"),
    top: hp("31.557377049180328%"),
    resizeMode: "cover"
  },
  View_9_26: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("46.58469945355191%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  View_9_28: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.082125603864732%"),
    top: hp("48.224043715846996%")
  },
  Text_9_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_29: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("55.05464480874317%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_30: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072465%"),
    top: hp("56.9672131147541%"),
    resizeMode: "cover"
  },
  View_9_31: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.082125603864732%"),
    top: hp("56.69398907103825%")
  },
  Text_9_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_34: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("63.79781420765027%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_35: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("65.7103825136612%"),
    resizeMode: "cover"
  },
  View_9_36: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.32367149758454%"),
    top: hp("65.43715846994536%")
  },
  Text_9_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_9_37: {
    width: wp("82.1256038647343%"),
    minWidth: wp("82.1256038647343%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("72.26775956284153%"),
    backgroundColor: "rgba(58, 54, 54, 1)"
  },
  ImageBackground_9_38: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("74.18032786885246%"),
    resizeMode: "cover"
  },
  View_9_39: {
    width: wp("67.8743961352657%"),
    minWidth: wp("67.8743961352657%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.32367149758454%"),
    top: hp("73.90710382513662%")
  },
  Text_9_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_9_16: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%"),
    top: hp("90.7103825136612%"),
    resizeMode: "cover"
  },
  ImageBackground_9_17: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.59420289855072%"),
    top: hp("90.7103825136612%"),
    resizeMode: "cover"
  },
  ImageBackground_9_42: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("48.77049180327869%"),
    resizeMode: "cover"
  },
  View_9_50: {
    width: wp("7.004830917874397%"),
    minWidth: wp("7.004830917874397%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%"),
    top: hp("113.11475409836065%")
  },
  Text_9_50: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_36_0: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.02898550724638%"),
    top: hp("99.4535519125683%")
  },
  Text_36_0: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  ImageBackground_40_13: {
    width: wp("16.183574879227052%"),
    minWidth: wp("16.183574879227052%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.004830917874397%"),
    top: hp("112.02185792349727%"),
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
