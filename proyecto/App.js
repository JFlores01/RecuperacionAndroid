
import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();


function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Lista usuarios">
      <HomeStack.Screen name="Lista usuarios" component={Musicos} options={{ headerStyle: { backgroundColor: '#AEE368' } }} />
      <HomeStack.Screen name="Filtro" component={FiltroPantalla} options={{ headerStyle: { backgroundColor: 'red' } }} />
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Musicos') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#AEE368',
          tabBarInactiveTintColor: '#AEE368',
        })}
      >
        <Tab.Screen name="Historia" component={HistoriaScreen} options={{ headerStyle: { backgroundColor: '#AEE368' } }} />
        <Tab.Screen name="Musicos" component={Home} options={{ headerStyle: { backgroundColor: '#AEE368' } }} />

      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({

  textos: {

    backgroundColor: "white",

    textAlign: "left",

    padding: 10,

    paddingLeft: 15,

    paddingRight: 15

  },

  view: {

    flex: 1,

    alignItems: "center",

    backgroundColor: "white",

    justifyContent: "center"



  },

  touchable: {

    alignItems: "center",

    backgroundColor: "white",

    padding: 20

  },

  header: {

    backgroundColor: "#B3DF78",

  },

  image: {

    height: 150,

    width: 150,

    padding: 10

  },

  textinput: {
    height: 50,
    width: 140,
    marginRight: 30,
    marginTop: 10,
    padding: 15,
    borderBottomColor: 'red',
    borderBottomWidth: 1
  },

  musicos: {
    marginRight: 10,
    padding: 10,
    textAlign: 'center'

  }



});



function HistoriaScreen() {
  return (
    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.textos}>Bienvenido a la historia de los dispositivos moviles</Text>
        <Text style={styles.textos}>Esto se trata de una BlackBerry</Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/BB.jpg")}
        />

        <Text style={styles.textos}> Fecha de lanzamineto:  19 de enero de 1999 </Text>
        <Text style={styles.textos}> Historia:  El primer dispositivo de la familia fue la BlackBerry 850, el dispositivo m??vil ten??a un teclado completo, lo que era inusual en ese momento.
          Pod??a enviar mensajes, acceder al correo electr??nico, enviar y recibir p??ginas de internet completas e implementaba una agenda para organizar tareas, con tan solo una peque??a
          pantalla que pod??a mostrar ocho l??neas de texto.En cierta manera era m??s parecido a un Mens??fono que a un tel??fono inteligente.
          Se puso a la venta por primera vez en 1999 en la ciudad de M??nich, Alemania.</Text>
        <Text style={styles.textos}>  Conclusi??n: Primero: Decidan cuales son las funciones b??sicas que requieren en sus Smartphones. Seg??n esto, bajen la app que necesiten y descarten cualquier otra.

          Segundo: Si notan que no usan alguna aplicaci??n, b??rrenla. Es muy divertido probar aplicaciones, pero esto consume bater??a, procesador, memoria y hasta nuestro tiempo. Si quieren jugar con su smartphone, h??ganlo en su casa con el cargador al costado y usando wifi.

          Tercero: Si se quieren distraer, h??ganlo usando archivos de m??sica local en el tel??fono. Prohibido los videos de Youtube si est??n en la calle o lejos de un cargador.

          Cuarto: Mientras est??n lejos de un cargador, desactiven todo menos la funci??n de tel??fono y los datos si es que lo necesitan. Bluetooth, Wifi deben estar apagados si es que no se utilizan.

          Quinto:  Nunca est?? dem??s tener una bater??a de respaldo. Un complemento es que usemos el cargador siempre que podamos.</Text>

        <Text style={styles.textos}>Esto se trata de un Nokia C6</Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/nokiac6.jpg")}
        />

        <Text style={styles.textos}> Fecha de lanzamineto:  13 de enero de 2010 </Text>
        <Text style={styles.textos}> Historia:  La empresa Nokia fue creada en 1865, cuando Finlandia era parte del Imperio ruso,
          a iniciativa del ingeniero Fredrik Idestam con ayuda de su esposa, quienes establecieron una f??brica de pulpa de madera para
          la producci??n de papel a orillas de los r??pidos de Tammerkoski, en el sur del pa??s. Unos a??os m??s tarde, construy?? una segunda
          f??brica por el r??o Nokianvirta, el lugar que dio su nombre de Nokia. La compa????a tuvo un gran despunte debido a la ola de industrializaci??n
          imperante en toda Europa, misma que elev?? el consumo de papel y cart??n. Alrededor de la f??brica se establecieron asentamientos humanos, y a esa
          comunidad tambi??n se le denominar??a Nokia.Fue tal la prosperidad de la empresa que Idestam muy pronto estableci?? una red de ventas y los productos de
          Nokia fueron exportados en primer lugar al Imperio ruso y m??s tarde al Reino Unido y Francia.Nokia experiment?? una expansi??n horizontal generada debido a m??ltiples
          circunstancias. En 1898, una f??brica finlandesa de caucho empez?? a manufacturar zapatos. Esta empresa se convirti?? en vecina de Nokia cuando dos de los ejecutivos de la
          industria del caucho decidieron establecerse cerca de la f??brica de cart??n por considerar que la disponibilidad de energ??a hidroel??ctrica en la zona era muy amplia.
          Hacia la d??cada de 1920, los fabricantes de caucho empezaron a utilizar el nombre Nokia como marca. Adem??s de fabricar calzado y neum??ticos para autom??viles,
          la compa????a comenz?? a producir tambi??n partes industriales derivadas del caucho, gabardinas, alfombras, pelotas y juguetes.</Text>
        <Text style={styles.textos}>  Conclusi??n: No es el mejor m??vil del mercado pero posiblemente sea uno de los m??viles m??s completos
          que podemos encontrar por su precio y con teclado f??sico. L??stima de esa pantalla resistiva.En realidad Nokia C6 s??lo necesita un Sistema Operativo m??s amigable
          con el usuario y actualizado para tener ese plus que cautiva al posible comprador.Resumiendo, un m??vil dif??cil de clasificar con una c??mara mediocre,
          una buena reproducci??n de audio y un teclado f??sico que permite un uso agresivo de las aplicaciones de mensajes y mails. Se sit??a lejos de los Smartphones m??s
          ambiciosos pero por debajo de tel??fonos de precios similares como el HTC Wildfire aunque este no tiene teclado f??sico-.</Text>



        <Text style={styles.textos}>Esto se trata de un Nokia C6</Text>

        <Image
          style={{ width: 225, height: 250, marginBottom: 50 }}
          source={require("./assets/alcatel.jpg")}
        />

        <Text style={styles.textos}> Fecha de lanzamineto:  13 de enero de 2010 </Text>
        <Text style={styles.textos}> Historia: Con su sede en Par??s, calle la Bo??tie, con instalaciones importantes dentro y fuera de la ciudad,
          Alcatel tiene una larga historia comenzando en 1898 con la fundaci??n de la Compagnie G??n??rale d'Electricit?? (CGE). La sede original de la empresa estaba
          en la regi??n de Alsacia (de hecho, el nombre "Alcatel" proviene de una peque??a empresa telef??nica llamada "Alsacienne de Cables et de Telephones") y a??n
          mantiene instalaciones de investigaci??n y desarrollo en el ??rea de Estrasburgo. Hubo un n??mero de fusiones y adquisiciones, y tambi??n de desinversiones desde 1898.
          Para entender la compa????a actual y su enfoque hacia las telecomunicaciones, lo m??s importante fue la adquisici??n de las actividades en el ??mbito de las telecomunicaciones
          europeas de ITT en 1986. Las compa????as unidas se pasaron a llamar Alcatel Alsthom. Alcatel mantiene un papel importante en el I+D en Francia
          (Regi??n de Par??s, Breta??a, Sur de Francia), Amberes (B??lgica) -en las operaciones que Bell Telephone desarrollaba all??-, en Stuttgart (Alemania) y, desde 2000
          en Shangh??i (China). Desde 1990, vino adquiriendo varias compa????as norteamericanas: Rockwell Technologies, DSC, Xylan,
          Packet Engines, Assured Access, Newbridge, iMagicTV, TiMetra, eDial. Esto le dio a Alcatel una presencia importante tanto en los EE. UU. como en Canad??.
          Alcatel tiene su sede norteamericana en Plano, y centros de I+D en Ottawa, Mountain View, Petaluma, Saint John, Calabasas, y Raleigh.
          En diciembre 1 de 2006, Alcatel complet?? su fusi??n con otro gigante de las telecomunicaciones: Lucent Technologies.</Text>
        <Text style={styles.textos}>  Conclusi??n:Para plantearse comprar el Alcatel 1S (2020) antes hay que buscar dos cosas, un m??vil sencillo al que recurrir muy de vez en
          cuando y gastarse poco dinero. Este m??vil de gama de entrada, como todos, cuenta con sus puntos fuertes y d??biles, que le hacen ser ideal para un p??blico muy espec??fico.
          Si lo importante para ti es contar con una buena autonom??a para olvidarte un par de d??as del cargador, no sueles ver muchos v??deos ni juegas a los videojuegos con el m??vil y
          lo que quieres es un terminal f??cil de usar, el Alcatel 1S podr??a ser una buena opci??n.  </Text>


      </View>
    </ScrollView>


  );


}



function Musicos(navigation, route) {

  const [instrumento, onChangeText] = React.useState(null);
  return (


    <View >

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textos}>Instrumento</Text>
        <TextInput style={styles.textinput}
          onChangeText={onChangeText}
          value={instrumento}
          keyboardType="default"
        />
      </View>

      <Button
        title='Buscar'
        onPress={() => navigation.navigate("filtro", { instrumento: instrumento })}
      />


      <FlatList
        data={users}
        renderItem={Ense??ar}
        kayExtractor={item => item.id} />

    </View>
  )
}



function Ense??ar({ item }) {

  return <View>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
      <Image style={{ height: 50, width: 50, marginLeft: 20, alignItems: 'center', padding: 10 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/57/57117.png' }} />
      <Text style={{ textAlign: 'center' }}>{item.nombre}</Text>
      <Text style={{ marginTop: 5 }}>{item.instrumento}</Text>
    </View>

    <View>

      <Text>{item.nombre}</Text>

      <Text style={{ color: 'Black' }}>{item.instrumento}</Text>



    </View>


    <View
      style={{
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        padding: 10
      }}
    />

  </View>

}



const users = [
  { id: 1, nombre: 'Antonio Romero', edad: 32, g??nero: 'Masculino', instrumento: 'Saxof??n' },

  { id: 2, nombre: 'Sara Dur??n', edad: 35, g??nero: 'Femenino', instrumento: 'Viol??n' },

  { id: 4, nombre: 'Raul Coronado', edad: 21, g??nero: 'Masculino', instrumento: 'Trompeta' },

  { id: 5, nombre: 'Isabel S??nchez', edad: 45, g??nero: 'Femenino', instrumento: 'Piano' },

  { id: 6, nombre: 'Josefa Navarro', edad: 77, g??nero: 'Femenino', instrumento: 'Viol??n' },

  { id: 7, nombre: 'Juan Pedrosa', edad: 19, g??nero: 'Masculino', instrumento: 'Saxof??n' },

  { id: 9, nombre: 'Ramon Rey', edad: 50, g??nero: 'Masculino', instrumento: 'Trompeta' },

  { id: 10, nombre: 'Esther Barros', edad: 33, g??nero: 'Femenino', instrumento: 'Trompeta' },

  { id: 11, nombre: 'Ignacio Villalba', edad: 56, g??nero: 'Masculino', instrumento: 'Piano' },

  { id: 12, nombre: 'Roberto Soria', edad: 42, g??nero: 'Masculino', instrumento: 'Saxof??n' },

  { id: 13, nombre: 'Cristina Macia', edad: 25, g??nero: 'Femenino', instrumento: 'Guitarra' },

  { id: 14, nombre: 'Erica Escudero', edad: 39, g??nero: 'Femenino', instrumento: 'Guitarra' },

  { id: 15, nombre: 'Angel Lima', edad: 63, g??nero: 'Masculino', instrumento: 'Guitarra' }]



function FiltroPantalla(navigation, route) {

  function filtro(item) {
    if (item.instrumento == route.params.instrumento) {
      return <View>
        <Text>{item.nombre}</Text>
        <Text>{item.edad}</Text>
        <Text>{item.instrumento}</Text>

      </View>
    }
  }
  return (

    <View>
      <FlatList
        data={users}
        renderItem={filtro}
        kayExtractor={item => item.id} />

    </View>
  );


}




