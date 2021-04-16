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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6970/948a/ca775e733eec5188f5a26e74479fdfad"
        }}
        style={styles.ImageBackground_128_159}
      />
      <View style={styles.View_128_134}>
        <Text style={styles.Text_128_134}>o</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8e0/f862/dbdb9a3c197242ae9b0d2655e55c63ad"
        }}
        style={styles.ImageBackground_128_136}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3d/d61e/4bc739b4765ac12e64a3ee77b1ecaafb"
        }}
        style={styles.ImageBackground_128_137}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d5/d0e3/398d74259ac5b2d7749c233586d2d9f0"
        }}
        style={styles.ImageBackground_128_138}
      />
      <View style={styles.View_128_149}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a1/9171/a7a9e431e131ef1ef174eab500e13697"
          }}
          style={styles.ImageBackground_I128_149_1_103}
        />
        <View style={styles.View_I128_149_9_49}>
          <Text style={styles.Text_I128_149_9_49}>s</Text>
        </View>
      </View>
      <View style={styles.View_128_151}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5219/1545/d17889b5040debea05bdea8dc2278485"
          }}
          style={styles.ImageBackground_128_152}
        />
      </View>
      <View style={styles.View_128_153}>
        <Text style={styles.Text_128_153}>o</Text>
      </View>
      <View style={styles.View_128_154}>
        <Text style={styles.Text_128_154}>X</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8a/0717/fdab7e0ec569b4f3ddf0137591a8de35"
        }}
        style={styles.ImageBackground_128_111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d35/07fe/5821580d3f5bb10be3bf499d191f3d82"
        }}
        style={styles.ImageBackground_128_131}
      />
      <View style={styles.View_132_0}>
        <Text style={styles.Text_132_0}>h</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_128_159: {
    width: wp("100.00000681195986%"),
    minWidth: wp("100.00000681195986%"),
    height: hp("119.08212560386472%"),
    minHeight: hp("119.08212560386472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-19.082125603864732%"),
    resizeMode: "cover"
  },
  View_128_134: {
    width: wp("4.129464567011736%"),
    minWidth: wp("4.129464567011736%"),
    minHeight: hp("5.072463768115942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.06250266092182%"),
    top: hp("198.30917874396135%")
  },
  Text_128_134: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_128_136: {
    width: wp("6.138393275287715%"),
    minWidth: wp("6.138393275287715%"),
    height: hp("13.285024154589372%"),
    minHeight: hp("13.285024154589372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.84822047425818%"),
    top: hp("38.88888888888889%"),
    resizeMode: "cover"
  },
  ImageBackground_128_137: {
    width: wp("4.017857416551959%"),
    minWidth: wp("4.017857416551959%"),
    height: hp("11.83574879227053%"),
    minHeight: hp("11.83574879227053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.85268482839616%"),
    top: hp("3.864734299516908%"),
    resizeMode: "cover"
  },
  ImageBackground_128_138: {
    width: wp("5.580357522988832%"),
    minWidth: wp("5.580357522988832%"),
    height: hp("13.285024154589372%"),
    minHeight: hp("13.285024154589372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.07143477517774%"),
    top: hp("20.531400966183575%"),
    resizeMode: "cover"
  },
  View_128_149: {
    width: wp("8.370536284483247%"),
    minWidth: wp("8.370536284483247%"),
    height: hp("18.115942028985508%"),
    minHeight: hp("18.115942028985508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.455357310115086%"),
    top: hp("196.8599033816425%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I128_149_1_103: {
    flexGrow: 1,
    width: wp("8.370536284483247%"),
    height: hp("18.115942028985508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I128_149_9_49: {
    flexGrow: 1,
    width: wp("3.1250002128737457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.245536071609503%"),
    top: hp("4.589371980676333%")
  },
  Text_I128_149_9_49: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_128_151: {
    width: wp("9.151786337701683%"),
    minWidth: wp("9.151786337701683%"),
    height: hp("17.874396135265698%"),
    minHeight: hp("17.874396135265698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.602680996668745%"),
    top: hp("197.58454106280192%")
  },
  ImageBackground_128_152: {
    width: wp("9.151786337701683%"),
    minWidth: wp("9.151786337701683%"),
    height: hp("17.874396135265698%"),
    minHeight: hp("17.874396135265698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_128_153: {
    width: wp("4.129464567011736%"),
    minWidth: wp("4.129464567011736%"),
    minHeight: hp("5.072463768115942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.06250266092182%"),
    top: hp("199.5169082125604%")
  },
  Text_128_153: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_128_154: {
    width: wp("3.2366073633335226%"),
    minWidth: wp("3.2366073633335226%"),
    minHeight: hp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.986608640575998%"),
    top: hp("199.7584541062802%")
  },
  Text_128_154: {
    color: "rgba(40, 40, 40, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_128_111: {
    width: wp("7.477679080805035%"),
    minWidth: wp("7.477679080805035%"),
    height: hp("13.768115942028986%"),
    minHeight: hp("13.768115942028986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.17857757149952%"),
    top: hp("57.2463768115942%"),
    resizeMode: "cover"
  },
  ImageBackground_128_131: {
    width: wp("6.2500004257474915%"),
    minWidth: wp("6.2500004257474915%"),
    height: hp("11.11111111111111%"),
    minHeight: hp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.84822047425818%"),
    top: hp("76.08695652173914%"),
    resizeMode: "cover"
  },
  View_132_0: {
    width: wp("3.2366073633335226%"),
    minWidth: wp("3.2366073633335226%"),
    minHeight: hp("4.830917874396135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.19197063391348%"),
    top: hp("58.454106280193244%")
  },
  Text_132_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_2: { height: 414 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
