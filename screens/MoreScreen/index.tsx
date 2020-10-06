import * as React from 'react'
import { View, Text } from 'react-native'
import {
  Avatar,
  Card,
  Icon,
  ListItem,
  Divider,
  Link,
} from 'react-native-elements'

import Styles from './styles'

export default function MoreScreen() {
  const list = [
    {
      title: 'Login',
      icon: {
        name: 'sign-in',
        type: 'font-awesome',
        color: '#DE003E',
        reverse: true,
      },
      link: '/login',
    },
    {
      title: 'Editar Perfil',
      icon: {
        name: 'user',
        type: 'font-awesome',
        color: '#DE003E',
        reverse: true,
      },
      link: '/NotFound',
    },
    {
      title: 'Mis Entradas',
      icon: {
        name: 'ticket',
        type: 'font-awesome',
        color: '#DE003E',
        reverse: true,
      },
      link: '/NotFound',
    },
    {
      title: 'Suscripciones',
      icon: {
        name: 'check-square-o',
        type: 'font-awesome',
        color: '#DE003E',
        reverse: true,
      },
      link: '/NotFound',
    },
    {
      title: 'Cerrar Sesión',
      icon: {
        name: 'sign-out',
        type: 'font-awesome',
        color: '#DE003E',
        reverse: true,
      },
      link: '/NotFound',
    },
  ]

  return (
    <View style={Styles.container}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Avatar
          rounded
          source={require('../../assets/images/r_logo.png')}
          size='large'
          containerStyle={{ width: 100, height: 100, marginBottom: 10 }}
        />
        <Text>NOMBRE USUARIO</Text>
      </View>
      <Divider />
      <View style={Styles.listContainer}>
        <ListItem key={1}>
          <Icon name='chevron-left' type='font-awesome' color='#ed1947' />
          <ListItem.Content>
            <ListItem.Title style={Styles.menuTitle}>
              ACA EL TITULO {/* {item.title}  */}
            </ListItem.Title>
           {/*  <ListItem.Subtitle style={Styles.menuSubtitle}>
              que sucede
            </ListItem.Subtitle> */}
          </ListItem.Content>
          {/*  <ListItem.Chevron /> */}
        </ListItem>
        {/* <Text> asas</Text> */}
      </View>
    </View>
  )
}

/* list.map((item, i) => (
          <ListItem key={i}>
            <Icon {...item.icon} />
            <ListItem.Content>
              <ListItem.Title>ACA EL TITULO {item.title} </ListItem.Title>
              <ListItem.Subtitle>que sucede</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem> 
       
      ))} */
