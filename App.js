
import { StatusBar, StyleSheet, View, Image, Text } from 'react-native';
import matheus from './assets/ma.jpeg';
import julio from './assets/ju.jpeg';
import bonatti from './assets/bonatti.jpeg';
import nicholas from './assets/nicholas.jpeg';
import obeso from './assets/obeso.jpeg';
import neymar from './assets/ney.jpg';
import salah from './assets/sal.jpg';
import haland from './assets/Ha.png';
import ramos from './assets/ramos.jpg'
import ted from './assets/ted.jpg';
import miguel from './assets/mi.jpeg';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.psmatheus}>
        <Image style={styles.matheus} source={matheus} />
      </View>
      <Image style={styles.julio} source={julio} />
      <Image style={styles.gui} source={bonatti} />
      <View style={styles.linha} />
      <View style={styles.psmatheus}>
        <Image style={styles.nicholas} source={nicholas} />
      </View>
      <View style={styles.psmatheus}>
        <View style={styles.gol}>
          <Image style={styles.obeso} source={obeso} />
        </View>
      </View>
      <Text style={styles.text}>Técnicos</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.reserva} source={miguel} />
        <Image style={styles.reserva} source={ted} />

        </View>




      <Text style={styles.text}>Banco de Reservas</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.reserva} source={haland} />
        <Image style={styles.reserva} source={neymar} />
        <Image style={styles.reserva} source={salah} />
        <Image style={styles.reserva} source={ramos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    height: 500,
    marginTop: 70,
    marginLeft: 40,
    marginRight: 40,
  },
  gol: {
    marginTop: 60,
    width: 130,
    height: 80,
    borderWidth: 3,
    borderColor: 'white',
  },
  psmatheus: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  linha: {
    position: 'absolute',
    top: '52%',
    height: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  matheus: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'cover',
    marginTop: 30,
    borderBlockColor: 'black',
    borderWidth: 3
  },
  nicholas: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'cover',
    marginTop: 30,
    borderBlockColor: 'black',
    borderWidth: 3
  },
  obeso: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 25,
    borderBlockColor: 'black',
    borderWidth: 3
  },
  julio: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 10,
    marginTop: 60,
    borderBlockColor: 'black',
    borderWidth: 3
  },
  gui: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 215,
    marginTop: -75,
    borderBlockColor: 'black',
    borderWidth: 3
  },
  text: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  reserva: {
    width: 70,
    height: 70,
    borderRadius: 30,
    borderBlockColor: 'black',
    borderWidth: 3
  }
});
