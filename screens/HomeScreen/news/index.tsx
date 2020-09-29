import React, {useContext, useState} from 'react';
import {StyleSheet, ScrollView, Modal} from 'react-native';
import {ListItem, Avatar, Button} from 'react-native-elements';
import {ThemeContext} from 'react-native-elements';
// @ts-ignore
import Touchable from 'react-native-platform-touchable';
import {WebView} from 'react-native-webview';

import {Text, View} from '../../../components/Themed';
import Constants from 'expo-constants';
// @ts-ignore
import style from "./styles.scss"
import Icon from 'react-native-vector-icons/AntDesign';

export default function HomeScreen() {
    const {theme} = useContext(ThemeContext);
    const [showModal, setShowModal] = useState(false);
    const [dataSelect, setDataSelect] = useState(null);


    const list = [
        {
            name: '@munirancagua',
            avatar_url: 'https://pbs.twimg.com/profile_images/1090222377370374145/qnXYDQfr_400x400.jpg',
            subtitle: 'El Coronavirus sigue presente. No retrocedamos a cuarentena. Depende de todos nosotros: Utilice siempre mascarilla. Mantenga distancia física. Lávese las manos. Evite salir de su casa si no es necesario. Y sí debe hacerlo, respete las normas sanitarias #RancaguaNoQuiereUnDesastre',
            url: 'https://twitter.com/munirancagua/status/1306315724927926274'
        },
        {
            name: '@munirancagua',
            avatar_url: 'https://pbs.twimg.com/profile_images/1090222377370374145/qnXYDQfr_400x400.jpg',
            subtitle: '¿Quieres vivir más seguro y tener acceso a servicios municipales y de emergencia desde tu teléfono? Revisa cómo bajar la aplicación de SOSAFE a tu teléfono móvil de manera gratuita y, así, proteger tu casa y a los tuyos en #Rancagua. Revisa el tutorial en el siguiente video Dorso de la mano con el dedo índice señalando hacia abajo',
            url: 'https://twitter.com/munirancagua/status/1310970462328049664'
        },
        {
            name: '@munirancagua',
            avatar_url: 'https://pbs.twimg.com/profile_images/1090222377370374145/qnXYDQfr_400x400.jpg',
            subtitle: 'Dorso de la mano con el dedo índice señalando hacia la derechaFuncionarios de salud de @cesfam2rancagua  se encuentran realizando exámenes PCR gratuitos en sede vecinal de Coya Pangal. Señal de peligroRecuerda acudir con tu cédula de identidad. #Rancagua',
            url: 'https://twitter.com/munirancagua/status/1310968241146261504'
        },
        {
            name: '@munirancagua',
            avatar_url: 'https://pbs.twimg.com/profile_images/1090222377370374145/qnXYDQfr_400x400.jpg',
            subtitle: 'El Coronavirus sigue presente. No retrocedamos a cuarentena. Depende de todos nosotros: Utilice siempre mascarilla. Mantenga distancia física. Lávese las manos. Evite salir de su casa si no es necesario. Y sí debe hacerlo, respete las normas sanitarias #RancaguaNoQuiereUnDesastre',
            url: 'https://twitter.com/munirancagua/status/1306315724927926274'
        },
        {
            name: '@munirancagua',
            avatar_url: 'https://pbs.twimg.com/profile_images/1090222377370374145/qnXYDQfr_400x400.jpg',
            subtitle: '¿Quieres vivir más seguro y tener acceso a servicios municipales y de emergencia desde tu teléfono? Revisa cómo bajar la aplicación de SOSAFE a tu teléfono móvil de manera gratuita y, así, proteger tu casa y a los tuyos en #Rancagua. Revisa el tutorial en el siguiente video Dorso de la mano con el dedo índice señalando hacia abajo',
            url: 'https://twitter.com/munirancagua/status/1310970462328049664'
        },
        {
            name: '@munirancagua',
            avatar_url: 'https://pbs.twimg.com/profile_images/1090222377370374145/qnXYDQfr_400x400.jpg',
            subtitle: 'Dorso de la mano con el dedo índice señalando hacia la derechaFuncionarios de salud de @cesfam2rancagua  se encuentran realizando exámenes PCR gratuitos en sede vecinal de Coya Pangal. Señal de peligroRecuerda acudir con tu cédula de identidad. #Rancagua',
            url: 'https://twitter.com/munirancagua/status/1310968241146261504'
        },
    ]

    const openWebview = (l: any) => {

        setShowModal(true);
        setDataSelect(l)
        console.log(dataSelect)
        console.log("showModal", showModal)


    }
    return (
        <ScrollView style={styles.scrollView}>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={showModal}
                onRequestClose={() => {
                    console.log('Cerrar');
                }}>

                <Button
                    type="outline"
                    icon={
                        <Icon
                            name="closecircleo"
                            size={24}
                            color="black"
                        />
                    }
                    iconRight
                    title=""
                    onPress={() => {
                        setShowModal(!showModal);
                    }}
                />
                {dataSelect ? (
                    <WebView
                        originWhitelist={['*']}
                        source={{uri: dataSelect.url}}
                        style={{marginTop: 20, height: 200,}}
                    />
                ) : ''}


            </Modal>

            {
                list.map((l, i) => (
                    <Touchable
                        onPress={() => openWebview(l)}
                        style={{
                            backgroundColor: '#eee',
                            paddingVertical: 1,
                            paddingHorizontal: 1,
                        }}
                        background={Touchable.Ripple('red')} key={i}>
                        <ListItem>
                            <Avatar source={{uri: l.avatar_url}}/>
                            <ListItem.Content>
                                <ListItem.Title style={style.title}>{l.name}</ListItem.Title>
                                <ListItem.Subtitle style={style.subtitle}><Text ellipsizeMode='tail' numberOfLines={2}>
                                    {l.subtitle}</Text></ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron/>

                        </ListItem>
                    </Touchable>
                ))
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        margin: 0
    },
    text: {
        fontSize: 42,
    },
    title: {
        fontSize: 16
    },
    subtitle: {
        fontSize: 15,
    }, modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
    },
});