import { Stack } from "expo-router";

const Stacklayout = () => {
    return (
        <Stack screenOptions={{headerShown:false}}  >
           <Stack.Screen name="index" />

           

        </Stack>
    )
};

export default Stacklayout;