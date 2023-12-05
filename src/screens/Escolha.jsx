import { StyleSheet, FlatList, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { FilmeContext } from './FilmeContext';

export default function Escolha(props) {
    
    const {buscarFilmes, filmes} = useContext(FilmeContext);

    useEffect(() => {
        buscarFilmes();
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={filmes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem bottomDivider>
                        <ListItem.Content style={styles.item}>
                            <View>
                                <ListItem.Title>{item.titulo}</ListItem.Title>
                                <ListItem.Subtitle>{item.sinopse}</ListItem.Subtitle>
                            </View>
                            <View style={{ width: 100 }}>
                                <ListItem.ButtonGroup
                                    buttons={[
                                        <Icon name='edit' size={20} color={'blue'} onPress={() =>
                                            props.navigation.navigate("Detalhe", { item })}/>,
                                        <Icon name='trash-can' size={20} color={'red'} onPress={() =>
                                            Alert.alert("teste")} />
                                    ]}
                                />
                            </View>
                        </ListItem.Content>
                    </ListItem>
                )}
            >
            </FlatList>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})