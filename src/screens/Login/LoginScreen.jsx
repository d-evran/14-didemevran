import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  createAndAddUserToDatabaseAsync,
  handleChangeEmail,
  handleChangeName,
  handleChangePassword,
  selectEmail,
  selectName,
  selectPassword,
} from "./loginSlice";

const LoginScreen = () => {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();

  const handleLogin = () => {
    // @ts-ignore
    dispatch(createAndAddUserToDatabaseAsync({ name, email, password }));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        style={styles.image}
        source={require(// @ts-ignore
        "../../../assets/hopi.png")}
      />
      <Text style={styles.title}>Hopi'n seni cebinden tanir!</Text>
      <Text>
        Hopi üyeligin icin kullanmak istedigin{" "}
        <Text style={{ fontWeight: "500" }}>
          {" "}
          adi, email adresi ve parolani{" "}
        </Text>
        asagidaki alana yazmalisin
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => dispatch(handleChangeName(text))}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => dispatch(handleChangeEmail(text))}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => dispatch(handleChangePassword(text))}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          DEVAM ET
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D6D6D6",
    width: "100%",
    paddingTop: 12,
    fontWeight: "900",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#CF2C7C",
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
});
