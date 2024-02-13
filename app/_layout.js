import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (

    <Drawer
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      drawerStyle={{ width: '60%', backgroundColor: 'white' }}
      drawerType='slide'
      edgeWidth={30}
    // drawerContent={(props) => <CustomDrawerHeader {...props} />}
    // screenOptions={{ header: CustomHeader }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          headerShown: true
        }}
      />
      <Drawer.Screen
        name="Students" // This is the name of the page and must match the url from root
        options={{
          headerShadowVisible: true,
          drawerLabel: 'Students',
          title: 'Students',
        }}
      />

    </Drawer>
  );
}