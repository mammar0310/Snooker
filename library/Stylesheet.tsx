import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profie_screen_buttons: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 30,
        margin: 10,
        width: 150,
        alignItems: 'center',
        paddingVertical: 15
    },
    profile_picture: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50, // Make sure this is half of the width/height for a circle
        margin: 10,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

    },
    profile_id: {
        backgroundColor: 'grey',
        padding: 8,
        borderRadius: 30,
        width: 180,
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 10

    },
    player_overview_datatable_heading: {
        backgroundColor: 'red',
        marginTop: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 180,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10

    },
    player_overview_datatable_data: {
        backgroundColor: 'pink',
        //marginTop: 50,
        //borderTopLeftRadius: 10,
        //borderTopRightRadius: 10,
        width: 180,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderBottomWidth: 0.5
    },
    player_selection_button: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50, // Make sure this is half of the width/height for a circle
        margin: 10,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'grey'
    },
    venue: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 50,
        textAlign: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30

    },
    date: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 40,
        textAlign: 'center',
        marginHorizontal: 10
    },
    format: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 40,
        textAlign: 'center',

    },
    oversmodalview: {

        padding: 30,
        margin: 20,
        shadowColor: 'red',
        borderWidth: 1,
        backgroundColor: 'white'

    },
    






    main: {
        flex: 1,
        flexDirection: 'column',

    },
    main2: {
        flex: 2,
        backgroundColor: '#9a3432',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },

    main1: {
        flex: 2,
        backgroundColor: 'transparent',

    },
    title: {
        top: 80,
        width: 200,
        height: 150,
        left: 85,
    },
    signin: {
        padding: 10,
        margin: 20,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signup: {
        padding: 10,
        margin: 20,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //bottom: 20
    },
    email: {
        padding: 10,
        left: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 30,
        
    },
    password: {
        padding: 10,
        left: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 30,
    },
    registerhere: {
        color:'lightblue',
        left:195,
        bottom:19,
        textDecorationLine:'underline'
    },
    searchlogo: {
        display:'flex',
        flexDirection:'row',
        padding:10,
        top: 50,
        borderRadius:10,
        borderColor:'grey',
        marginTop:10,
        borderWidth:1,
        marginHorizontal:10,
        alignItems:'center'
        
        
    }


})

export default styles;