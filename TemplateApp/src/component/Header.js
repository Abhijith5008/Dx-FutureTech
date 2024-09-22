import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Divider, Menu } from 'react-native-paper';
import { styles } from '../styles/global.style';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return (
        <Appbar.Header elevated style={styles.header}>
            {/* Centered logo */}
            <Appbar.Content 
                title={
                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo} 
                            source={require('../../assets/images/CompanyLogo.png')} 
                        />
                    </View>
                }
            />
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                contentStyle={styles.menuContent}
                anchor={
                    <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
                        <Text style={styles.menuText}>Options ▼</Text>
                    </TouchableOpacity>
                }
            >
                <Menu.Item onPress={() => { }} title="Option 1" trailingIcon="chevron-down" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Option 2" trailingIcon="chevron-down" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Option 3" trailingIcon="chevron-down" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Option 4" trailingIcon="chevron-down" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Option 5" trailingIcon="chevron-down" />
            </Menu>
            {/* Contact Us button */}
            <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contactButtonText}>Contact Us</Text>
            </TouchableOpacity>
        </Appbar.Header>
    );
};

export default Header;
