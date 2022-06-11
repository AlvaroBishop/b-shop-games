import React from 'react';
import {Button, View, Text, Image} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View>
            <Image 
                style={{width: '100%', height: 300}}
                source={require('./assets/B-shopGames.jpg')}
            />
            <Text style={{textAlign: 'center', marginTop: 40, padding: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a rhoncus velit. Praesent egestas at purus in tristique. Quisque diam nibh, blandit luctus porttitor ac, condimentum posuere ante. Aenean tempus sem ut felis auctor, nec malesuada ante imperdiet. Vivamus non felis dignissim, ultrices enim id, eleifend ligula. Sed nibh nunc, auctor non semper ac, auctor in nunc. Vestibulum aliquam accumsan tincidunt. Vivamus pretium massa sapien, vel pellentesque quam vulputate eget. Nunc eget purus sed nibh sollicitudin consequat ut vitae tellus. Cras vitae velit vitae metus tempus lobortis sit amet nec felis. Integer blandit nisi at felis volutpat volutpat.</Text>
            
            
        </View>
    );
}

export default HomeScreen;