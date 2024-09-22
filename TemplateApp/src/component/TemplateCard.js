import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles/global.style';

const TemplateCard = ({ template }) => {

    const fallBackImage = require('../../assets/images/logo.png');

    return (
        <View style={[styles.card]}>
            <View style={[styles.innerCard]}>
                <View style={styles.cardTitle}>
                    <View style={[styles.cardTitle, { justifyContent: "flex-start", padding: 0, margin: 0 }]}>
                        <Image style={styles.imageStyle} source={fallBackImage}></Image>
                        <Text style={[styles.cardTitleText]}>{template.companyName}</Text>
                    </View>
                    <Text style={[styles.cardTitleText, { fontSize: 12, marginRight: 5 }]}>{template.AgreementType}</Text>
                </View>
                <Divider style={{ height: 5, marginHorizontal: 15, marginTop: -5, backgroundColor: "yellow" }} />
                <Card.Content>
                    <FlatList
                        nestedScrollEnabled
                        data={template.rule}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.rule}>
                                <Text style={styles.ruleTitle}>{item.id} . {item.name}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        )}
                    />
                </Card.Content>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{template.name}</Text>
                <Text style={styles.description}>{template.descripton}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.esignButton}>
                    <FontAwesome5 name="pen-nib" size={16} color="white" />
                    <Text style={styles.esignText}>{template.signType}</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tagText}>{template.type}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.useTemplateButton}>
                <Text style={styles.useTemplateText}>Use Template</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TemplateCard;