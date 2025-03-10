import { StyleSheet, Appearance, Platform, ScrollView, SafeAreaView,FlatList,View, Text,Image } from "react-native";

import { Colors } from "@/constants/Colors";
import {MENU_ITEMS} from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme();
    const theme=colorScheme==="dark" ? Colors.dark : Colors.light;

    const styles=createStyles(theme,colorScheme);
    const Container=Platform.OS==="web" ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList data={MENU_ITEMS} keyExtractor={(item)=>{item.id.toString()}} renderItem={({item})=>{
                (<View><Text>{item.title}</Text>{item.description}<Text></Text><Image source={MENU_IMAGES[item.id-1]}/></View>)
            }}/>
        </Container>
    )
}

function createStyles(theme, colorScheme){
    return StyleSheet.create({

    })
}