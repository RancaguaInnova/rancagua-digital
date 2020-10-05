import * as React from "react";
import { Avatar, Card, Icon } from "react-native-elements";
import { Text, View, ListItem, ViewHeader, TextUser, Divider,Link } from "./styles";


export default function MoreScreen() {
  const list = [
    {
      title: "Login",
      icon: {
        name: "sign-in",
        type: "font-awesome",
        color: "#DE003E",
        reverse: true,
      },
      link: "/login",
    },
    {
      title: "Editar Perfil",
      icon: {
        name: "user",
        type: "font-awesome",
        color: "#DE003E",
        reverse: true,
      },
      link: "/NotFound",
    },
    {
      title: "Mis Entradas",
      icon: {
        name: "ticket",
        type: "font-awesome",
        color: "#DE003E",
        reverse: true,
      },
      link: "/NotFound",
    },
    {
      title: "Suscripciones",
      icon: {
        name: "check-square-o",
        type: "font-awesome",
        color: "#DE003E",
        reverse: true,
      },
      link: "/NotFound",
    },
    {
      title: "Cerrar Sesión",
      icon: {
        name: "sign-out",
        type: "font-awesome",
        color: "#DE003E",
        reverse: true,
      },
      link: "/NotFound",
    },
  ];

  return (
    <View>
      <ViewHeader>
        <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          size="large"
          overlayContainerStyle={{ backgroundColor: "#DE003E" }}
        />
        <TextUser>Invitado </TextUser>
      </ViewHeader>
      <Divider />
      {list.map((item, i) => (
        <Link to={item.link} key={i} >
          <ListItem bottomDivider>
            <Icon {...item.icon} />
            <ListItem.Content>
              <ListItem.Title> {item.title} </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Link>
      ))}
    </View>
  );
}
