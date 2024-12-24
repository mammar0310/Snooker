import { Stack } from "expo-router";

const Stacklayout = () => {
    return (
        <Stack >
          <Stack.Screen name='Start Match' />
          <Stack.Screen name='1v1' />
          <Stack.Screen name='2v2'  />
          <Stack.Screen name='scorer' />
          
        </Stack>
    )
};

export default Stacklayout;