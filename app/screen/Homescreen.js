import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";

const Homescreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3, 4, 5]);

  const handelLocation = (location) => {
    console.log("Location: ", location);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image
        source={require("../assets/images/bg.png")}
        style={styles.image}
        blurRadius={50}
      />
      <View style={styles.content}>
        <View
          style={[
            styles.search,
            {
              backgroundColor: showSearch
                ? "rgba(255, 255, 255, 0.6)"
                : "transparent",
            },
          ]}
        >
          {showSearch && (
            <TextInput
              placeholder="Search City"
              style={styles.textInput}
              onFocus={() => setShowSearch(true)}
              onBlur={() => setShowSearch(false)}
            />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowSearch(!showSearch)}
          >
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        {locations.length > 0 && showSearch && (
          <View style={styles.locationsList}>
            {locations.map((location, index) => (
              <TouchableOpacity
                key={index}
                style={styles.locationsOptions}
                onPress={() => handelLocation(location)}
              >
                <MapPinIcon size={20} color="black" />
                <Text>London</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 20,
    alignItems: "center",
  },
  search: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: "transparent", // Transparent background
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#c2b8b2",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto", // Align to the right
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  locationsList: {
    width: "90%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 20,
    position: "absolute",
    marginTop: 60,
  },
  locationsOptions: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
});

export default Homescreen;
