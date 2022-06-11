import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        marginVertical: 3
    },

    boxContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },

    box: {
        position: 'relative',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        height: 200,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor:'#57FCC5',
        paddingBottom: 10,
        margin: 10,
        overflow: 'hidden'
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    img: {
        width: 30,
        height: 30
    }
})