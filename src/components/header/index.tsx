import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icons, Images } from '../../assets'
import styles from './style'

const HomeHeader = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container1}>
                <Image source={Images.youtubeLogo}
                    style={styles.logoImage} />
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image source={Icons.castIcon}
                        style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Icons.bellIcon}
                        style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Icons.searchIcon}
                        style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeHeader
