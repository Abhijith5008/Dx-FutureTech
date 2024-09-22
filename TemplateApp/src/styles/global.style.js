import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 10,
    },
    imageStyle: {
        height: 25,
        width: 25,
        marginBottom: 6,
        marginRight: 5,
        resizeMode: "contain"
    },
    card: {
        flex: 1,
        margin: 12,
        backgroundColor: 'white',
    },
    innerCard: {
        flex: 1,
        marginHorizontal: 12,
        borderRadius: 4,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#bdbdbd',
    },
    cardTitleText: {
        fontSize: 14,
        textAlign: "left",
        fontWeight: 'bold',
        color: 'black'
    },
    title: {
        fontSize: 16,
        textAlign: "left",
        fontWeight: 'bold',
        color: '#1a2a6c'
    },
    cardTitle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        padding: 5,
        justifyContent: "space-between"
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        fontWeight:"300",
        color: '#4057b3',
    },
    rule: {
        marginTop: 10,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    ruleTitle: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500'
    },
    button: {
        marginRight: 10,
    },
    useButton: {
        padding: 10,
        borderRaduis: 20,
        backgroundColor: '#002E6D',
    },
    header: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'flex-start',
        marginTop: 5
    },
    logo: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },
    menuContent: {
        backgroundColor: 'white',
    },
    menuButton: {
        marginHorizontal: 20,
    },
    menuText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    contactButton: {
        backgroundColor: '#002E6D',
        padding: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 5
    },
    contactButtonText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 10
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#e6eaf8',
        borderRadius: 5,
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: '#1a2a6c',
        borderRadius: 5,
        padding: 10,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: "flex-start",
        margin: 12
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        margin: 12
    },
    esignButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a73e8',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    esignText: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        marginLeft: 5
    },
    tag: {
        backgroundColor: '#fddede',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginLeft: 15,
    },
    tagText: {
        color: 'black',
        fontWeight: '400',
        textAlign: "center",
        fontSize: 14,
    },
    useTemplateButton: {
        backgroundColor: '#1a2a6c',
        padding: 16,
        borderRadius: 5,
        margin: 12
    },
    useTemplateText: {
        color: 'white',
        fontWeight: '400',
        textAlign: "center",
        fontSize: 16,
    },
});