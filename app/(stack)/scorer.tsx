import React, { useState } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Snooker_balls from '@/components/snooker_balls';
import Profile_screen_buttons from '@/components/profile_screen_buttons';

export default function Scorer() {
  const { width, height } = Dimensions.get('window');
  const [showBall, setShowBall] = useState(false); // State to toggle component visibility

  const handleAddComponent = () => {
    setShowBall(true); // Set to true to display the component
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Background Image */}
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={{ flex: 1, width: width, height: height }}
      />

      {/* Player 1 Section */}
      <View style={styles.playerSection}>
        <MaterialCommunityIcons name="billiards-rack" size={30} color="black" style={styles.icon} />
        <Text style={styles.playerText}>Player 1</Text>
      </View>

      {/* First View for Snooker Ball */}
      <View style={styles.snookerBallView}>
        {showBall && <Snooker_balls />} {/* Display component if showBall is true */}
      </View>

      {/* Player 2 Section */}
      <View style={[styles.playerSection, { marginTop: 100 }]}>
        <MaterialCommunityIcons name="billiards-rack" size={30} color="black" style={styles.icon} />
        <Text style={styles.playerText}>Player 2</Text>
      </View>

      {/* Additional Snooker Balls */}
      <View style={styles.snookerBallRow}>
        <Snooker_balls />
        <Snooker_balls />
        <Snooker_balls />
      </View>

      <View style={[styles.snookerBallRow, { marginTop: 100 }]}>
        <Snooker_balls />
        <Snooker_balls />
        <Snooker_balls />
        <Snooker_balls />
      </View>

      <View style={styles.snookerBallRow}>
        <Snooker_balls />
        <Snooker_balls />
        <Snooker_balls />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Profile_screen_buttons name="FOUL" onPress={handleAddComponent} />
        <Profile_screen_buttons name="END OF BREAK" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playerSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 15,
  },
  playerText: {
    fontSize: 30,
  },
  snookerBallView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  snookerBallRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

