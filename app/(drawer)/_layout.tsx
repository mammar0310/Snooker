import { Drawer } from 'expo-router/drawer';
import { Dimensions, ImageBackground } from 'react-native';

const Drawerlayout = () => {

  const { width, height } = Dimensions.get('window');
  
    return (
        <Drawer >
          <Drawer.Screen name='home'  options={{headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
          headerTitle: 'Home'}} />
          <Drawer.Screen name='Start Match' options={{headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
          headerTitle: 'Start Match'}}   />
          <Drawer.Screen name='profile' options={{headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
          headerTitle: 'Profile'}} />
          <Drawer.Screen name='stats' options={{headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
          headerTitle: 'Stats'}} />
          <Drawer.Screen name='tournament' options={{headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
          headerTitle: 'Tournament'}} />
        </Drawer>
    )
};

export default Drawerlayout
