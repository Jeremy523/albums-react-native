// import a library to help us create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
    // using View here bc we can only technically have one top-level tag
    // these HTML-style tags are really react syntax to return JSX
    // flex: 1 ensures component fills as much space as it needs
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

/*
    Functional component vs Class based component

    Functional: simple; for static data
    const Header = () => {
        return <Text> Hello </Text>
    }

    Class: dynamic; can handle fetching new data and reloading
    class Header extends Component {
        render() {
            return <Text> Hello </Text>
        }
    }

*/

// render it to the device
AppRegistry.registerComponent('albums', () => App);
