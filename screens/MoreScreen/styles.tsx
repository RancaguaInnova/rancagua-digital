import styled from 'styled-components/native';
import { Text as DefaultText, View as DefaultView } from "react-native";
import { Avatar, Card,ListItem as ListItemElement,Divider as DividerElement } from "react-native-elements";
import { Link as LinkNative } from "@react-navigation/native";

export const Link = styled(LinkNative)`
width:100%;
display:flex;

`;

export const View = styled(DefaultView)`
  background-color: #fff;
  margin-top:20px;
  height:100%;
`;

export const Text = styled(DefaultText)`
  color:#000;
`;

export const ListItem=styled(ListItemElement)`
  align-content:center;
  text-align:center;
  display:flex;
  width:100%;
`;
export const ViewHeader=styled(DefaultView)`
  align-content:center;
  text-align:center;
  left:0;
  right:0;
  margin:0;
  padding-top:20px;
  padding-bottom:20px;
  align-items: center;
  justify-content: center;
  color:#fff;
  display:flex;
`;
export const TextUser = styled(DefaultText)`
  color:#000;
  font-size:16px;
`;

export const Divider = styled(DividerElement)`
  background-color:#ddd
`;

