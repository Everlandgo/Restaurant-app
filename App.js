import React, { useState } from 'react';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let CoffCafeMenu = {
  items: [
    {
      title: 'Drinks',
      contents: [
        {
          title: 'Long black',
          calories: '15',
          price: '7',
          imgUri: require('./images/americano.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Coffee Mocha',
          calories: '245',
          price: '8',
          imgUri: require('./images/mocha.jpg'),
          stock: 'out-of-stock',
        },
        {
          title: 'Cafe Latte',
          calories: '226',
          price: '7',
          imgUri: require('./images/latte.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Vanilla Latte',
          calories: '226',
          price: '7',
          imgUri: require('./images/vanilla.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Mocha Frappuccino',
          calories: '350',
          price: '9',
          imgUri: require('./images/mocha_fra.jpg'),
          stock: 'out-of-stock',
        },
      ],
    },
    {
      title: 'Cakes',
      contents: [
        {
          title: 'Red Velvet',
          calories: '490',
          price: '12',
          imgUri: require('./images/red_velvet.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Chocolate Fudge',
          calories: '550',
          price: '15',
          imgUri: require('./images/chocolate_cake.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Lemon Meringue',
          calories: '380',
          price: '10',
          imgUri: require('./images/lemon.jpg'),
          stock: 'in-stock',
        },
      ],
    },
  ],
};

let Joemenu = {
  items: [
    {
      title: 'Drinks',
      contents: [
        {
          title: 'Orange Juice',
          calories: '207',
          price: '5',
          imgUri: require('./images/orange.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Vanilla Milkshake',
          calories: '235',
          price: '9',
          imgUri: require('./images/vanilla_shake.jpg'),
          stock: 'out-of-stock',
        },
        {
          title: 'Americano',
          calories: '7',
          price: '5',
          imgUri: require('./images/americano.jpg'),
          stock: 'in-stock',
        },
      ],
    },
    {
      title: 'Main Dish',
      contents: [
        {
          title: 'Cheeseburger',
          calories: '450',
          price: '12',
          imgUri: require('./images/cheeseburger.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Grilled Chicken Sandwich',
          calories: '380',
          price: '10',
          imgUri: require('./images/chicken_sandwich.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Bolognese Pasta',
          calories: '550',
          price: '15',
          imgUri: require('./images/Bolognese_Pasta.jpg'),
          stock: 'in-stock',
        },
      ],
    },
  ],
};

let Auramenu = {
  items: [
    {
      title: 'Drinks',
      contents: [
        {
          title: 'Long black',
          calories: '207',
          price: '7',
          imgUri: require('./images/americano.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Coffee Mocha',
          calories: '235',
          price: '8',
          imgUri: require('./images/mocha.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Cafe Latte',
          calories: '226',
          price: '7',
          imgUri: require('./images/latte.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Vanilla Latte',
          calories: '226',
          price: '7',
          imgUri: require('./images/vanilla.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Mocha Frappuccino',
          calories: '226',
          price: '9',
          imgUri: require('./images/mocha_fra.jpg'),
          stock: 'in-stock',
        },
      ],
    },
    {
      title: 'Sandwich',
      contents: [
        {
          title: 'Tuna Sandwich',
          calories: '490',
          price: '12',
          imgUri: require('./images/tuna_sandwich.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Ham Sandwich',
          calories: '550',
          price: '15',
          imgUri: require('./images/ham_sandwich.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Salmon Sandwich',
          calories: '380',
          price: '15',
          imgUri: require('./images/salmon_sandwich.jpg'),
          stock: 'in-stock',
        },
      ],
    },
    {
      title: 'Salad',
      contents: [
        {
          title: 'Caesar Salad',
          calories: '490',
          price: '12',
          imgUri: require('./images/Caesar_Salad.jpg'),
          stock: 'in-stock',
        },
      ],
    },
  ],
};

let JuneahMenu = {
  items: [
    {
      title: 'Drinks',
      contents: [
        {
          title: 'Americano',
          calories: '15',
          price: '9',
          imgUri: require('./images/americano.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Cafe Latte',
          calories: '100',
          price: '7',
          imgUri: require('./images/latte.jpg'),
          stock: 'in-stock',
        },
      ],
    },
    {
      title: 'Main Dish',
      contents: [
        {
          title: 'Blueberry Waffle',
          calories: '450',
          price: '14',
          imgUri: require('./images/blueberry_waffle.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'French Toast',
          calories: '380',
          price: '10',
          imgUri: require('./images/french_toast.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Pancakes',
          calories: '320',
          price: '9',
          imgUri: require('./images/pancake.jpg'),
          stock: 'in-stock',
        },
        {
          title: 'Eggs Benedict',
          calories: '420',
          price: '12',
          imgUri: require('./images/egg.jpg'),
          stock: 'out-of-stock',
        },
      ],
    },
  ],
};

// >>>>>>>>>>>>Restaurants<<<<<<<<<<<<<<<<<<<<<<<<<<

function Restaurants() {
  let tableData = [
    {
      cells: [
        {
          title: 'CoffCafe',
          tagline: 'Desert, Coffee, £££',
          eta: '10-30',
          rating: '5',
          distance: '3km',
          imgUri: require('./images/cafe.jpg'),
        },
        {
          title: "Joe's Diner",
          tagline: 'American, burgers, £££',
          eta: '50+',
          rating: '4.9',
          distance: '4km',
          imgUri: require('./images/jonny.jpg'),
        },
        {
          title: 'Aura',
          tagline: 'Brunch, Coffee, Sandwich, Salad, £££',
          eta: '40',
          rating: '4.5',
          distance: '5km',
          imgUri: require('./images/aura.jpg'),
        },
        {
          title: 'June-ah',
          tagline: 'Brunch, waffle, soufflé, french toast, £££',
          eta: '25',
          rating: '5',
          distance: '6km',
          imgUri: require('./images/june_ah.jpg'),
        },
      ],
    },
  ];

  const navigation = useNavigation();
  const HomeScreenCell = ({
    title,
    tagline,
    eta,
    rating,
    distance,
    imgUri,
  }) => (
    <Cell
      onPress={() =>
        navigation.navigate('Menu', {
          items: getMenuItems(title),
        })
      }
      cellAccessoryView={
        <View style={styles.cellStyle}>
          <Image style={styles.imageStyle} source={imgUri} />
          <View style={styles.etaContainer}>
            <Text style={styles.etaText}>{eta}</Text>
            <Text style={styles.minutesText}>mins</Text>
          </View>

          <Text style={styles.restaurantName}>{title}</Text>
          <Text style={styles.restaurantInfo}>{tagline}</Text>

          <View style={styles.distContainer}>
            <Text style={styles.distanceText}>📍{distance}</Text>
          </View>
          <Text style={styles.ratingStyle}>⭐{rating}</Text>
        </View>
      }
    />
  );

  const getMenuItems = (title) => {
    if (title === 'CoffCafe') {
      return CoffCafeMenu.items;
    } else if (title === "Joe's Diner") {
      return Joemenu.items;
    } else if (title === 'Aura') {
      return Auramenu.items;
    } else if (title === 'June-ah') {
      return JuneahMenu.items;
    }
    return [];
  };
  return (
    <ScrollView>
      <TableView style={{ backgroundColor: '#FDF4E3' }}>
        {tableData.map((section, i) => (
          <Section key={i} hideSeparator={false} separatorTintColor="#ccc">
            {section.cells.map((cell, i) => (
              <HomeScreenCell
                key={i}
                title={cell.title}
                tagline={cell.tagline}
                eta={cell.eta}
                rating={cell.rating}
                distance={cell.distance}
                imgUri={cell.imgUri}
              />
            ))}
          </Section>
        ))}
      </TableView>
    </ScrollView>
  );
}

// >>>>>>>>>>> Menu <<<<<<<<<<<<<<<<<<<<<<<<<<

function Menu({ route }) {
  const { items } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const pressed = (item) => {
    if (item.stock === 'in-stock') {
      setCartItems((prevItems) => {
        const isAddedToCart = prevItems.some(
          (cartItem) => cartItem.title === item.title
        );
        if (isAddedToCart) {
          return prevItems.filter((cartItem) => cartItem.title !== item.title);
        } else {
          return [...prevItems, item];
        }
      });
    } else if (item.stock === 'out-of-stock') {
      Alert.alert(
        'Item Unavailable',
        'Sorry for the inconvenience, but this item is currently unavailable'
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TableView style={{ backgroundColor: '#FDF4E3' }}>
          {items.map((category) => (
            <Section key={category.title}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              {category.contents.map((item) => {
                const added = cartItems.some(
                  (cartItem) => cartItem.title === item.title
                );
                return (
                  <TouchableOpacity
                    key={item.title}
                    style={styles.itemContainer}
                    onPress={() => pressed(item)}
                  >
                    <Image style={styles.menuStyle} source={item.imgUri} />
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDetails}>
                      Calories: {item.calories}, Price: ${item.price}
                    </Text>
                    {added && <Text>Added to Tray</Text>}
                  </TouchableOpacity>
                );
              })}
            </Section>
          ))}
        </TableView>
      </ScrollView>
      <View style={styles.cartbar}>
        <Text style={styles.cartheading}>Added items 🛒 :</Text>
        {cartItems.map((item) => (
          <Text key={item.title}>{item.title}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#D9CAB3',
          },
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name="Restaurants"
          component={Restaurants}
          options={{
            title: 'Restaurants',
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Text
                style={{
                  color: '#392A16',
                  fontSize: 25,
                  fontWeight: 'bold',
                  margin: 'auto',
                }}>
                Restaurants
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 5,
    color: 'black',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#392A16',
  },
  itemDetails: {
    fontSize: 14,
    marginTop: 8,
    color: 'grey',
  },
  cellStyle: {
    width: '100%',
    height: 290,
    backgroundColor: '#FDF4E3',
    marginLeft: 2,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  menuStyle: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  etaContainer: {
    width: 100,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    marginTop: 170,
    marginRight: 20,
  },
  etaText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  minutesText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -5,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#3D2B1F',
  },
  restaurantInfo: {
    marginTop: 0,
    fontSize: 14,
    color: '#392A16',
  },
  distanceText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  distContainer: {
    width: 60,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 255,
    borderColor: '#392A16',
    borderWidth: 1,
  },
  ratingStyle: {
    marginLeft: 80,
  },
  container:{
    flex:1,
  },
  cartbar: {
    backgroundColor: '#FDF4E3',
    alignItems: 'left',
    length: 20,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 1,
    borderColor: '#D9CAB3',
  },
  cartheading: {
    fontSize: 20,
  },
});
