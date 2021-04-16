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
      <View style={styles.View_22_29} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_22_30}
      />
      <View style={styles.View_22_31}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2982/8bd1/f76fc4547ec1a14d598d23a03e12df80"
          }}
          style={styles.ImageBackground_I22_31_1_104}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_22_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_22_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d559/7e52/ca9a6f12d2d08508de9b94b6be6bd407"
        }}
        style={styles.ImageBackground_22_35}
      />
      <View style={styles.View_22_40}>
        <Text style={styles.Text_22_40}>Of Monsters and Men 2010-Present</Text>
      </View>
      <View style={styles.View_22_41}>
        <Text style={styles.Text_22_41}>$0.99/month</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8156/a0cb/bce90c82e3bb27e1c4beee44d217ff02"
        }}
        style={styles.ImageBackground_22_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e183/db06/5ad59a3dc9d0ad2ecd3bda3ff9a1b646"
        }}
        style={styles.ImageBackground_22_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314e/199f/e08b3f2652b07cfb2a243d7108105561"
        }}
        style={styles.ImageBackground_22_43}
      />
      <View style={styles.View_22_44}>
        <Text style={styles.Text_22_44}>Permissions</Text>
      </View>
      <View style={styles.View_22_45}>
        <Text style={styles.Text_22_45}>
          Plays: Unlimited Shares: Partner Customization: Filters
        </Text>
      </View>
      <View style={styles.View_22_46}>
        <Text style={styles.Text_22_46}>
          Platform: Qom Devices Any Ownership: Unique
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fbb/fd10/e7e721802fbefbf76cb3e54eb4152de3"
        }}
        style={styles.ImageBackground_22_49}
      />
      <View style={styles.View_22_51}>
        <Text style={styles.Text_22_51}>Subscription</Text>
      </View>
      <View style={styles.View_22_54}>
        <Text style={styles.Text_22_54}>
          My Head Is an Animal - Beneath the S{" "}
        </Text>
      </View>
      <View style={styles.View_22_55}>
        <Text style={styles.Text_22_55}>
          pire - Winter Sound - Slow Life - Organs
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fcb/c54d/17ae37b823435c7fcae7ef804d25d059"
        }}
        style={styles.ImageBackground_22_56}
      />
      <View style={styles.View_40_108}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_40_109}
        />
      </View>
      <View style={styles.View_40_114}>
        <Text style={styles.Text_40_114}>o</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_22_29: {
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
  ImageBackground_22_30: {
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
  View_22_31: {
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
  ImageBackground_I22_31_1_104: {
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
  ImageBackground_22_33: {
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
  ImageBackground_22_34: {
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
  ImageBackground_22_35: {
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
  View_22_40: {
    width: wp("75.36231884057972%"),
    minWidth: wp("75.36231884057972%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("27.459016393442624%")
  },
  Text_22_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_22_41: {
    width: wp("55.31400966183575%"),
    minWidth: wp("55.31400966183575%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    top: hp("99.86338797814209%")
  },
  Text_22_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  ImageBackground_22_42: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%"),
    top: hp("99.59016393442623%"),
    resizeMode: "cover"
  },
  ImageBackground_22_52: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("87.1584699453552%"),
    resizeMode: "cover"
  },
  ImageBackground_22_43: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("99.59016393442623%"),
    resizeMode: "cover"
  },
  View_22_44: {
    width: wp("26.570048309178745%"),
    minWidth: wp("26.570048309178745%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.748792270531396%"),
    top: hp("78.41530054644808%")
  },
  Text_22_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_22_45: {
    width: wp("42.028985507246375%"),
    minWidth: wp("42.028985507246375%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("82.37704918032787%")
  },
  Text_22_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  View_22_46: {
    width: wp("40.09661835748793%"),
    minWidth: wp("40.09661835748793%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.55555555555556%"),
    top: hp("82.37704918032787%")
  },
  Text_22_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  ImageBackground_22_49: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342994%"),
    top: hp("14.89071038251366%"),
    resizeMode: "cover"
  },
  View_22_51: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.371980676328505%"),
    top: hp("103.68852459016394%")
  },
  Text_22_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    letterSpacing: -0.21,
    textTransform: "none"
  },
  View_22_54: {
    width: wp("114.25120772946859%"),
    minWidth: wp("114.25120772946859%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.246376811594203%"),
    top: hp("64.75409836065575%")
  },
  Text_22_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_22_55: {
    width: wp("114.25120772946859%"),
    minWidth: wp("114.25120772946859%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.004830917874397%"),
    top: hp("70.62841530054644%")
  },
  Text_22_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_22_56: {
    width: wp("77.77777777777779%"),
    minWidth: wp("77.77777777777779%"),
    height: hp("26.366120218579237%"),
    minHeight: hp("26.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231885%"),
    top: hp("37.02185792349727%"),
    resizeMode: "cover"
  },
  View_40_108: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.33816425120773%"),
    top: hp("111.33879781420765%")
  },
  ImageBackground_40_109: {
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
  View_40_114: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.34299516908212%"),
    top: hp("112.56830601092895%")
  },
  Text_40_114: {
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
