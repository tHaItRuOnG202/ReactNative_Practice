import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Like from '../images/like.jpeg';
import Wow from '../images/wow.jpeg';
import Love from '../images/love.jpeg';
import { Colors } from '../utils/Colors';
import VectorIcon from '../utils/VectorIcon';

const PostFooter = ({ data }) => {
    return (
        <View style={styles.postFotterContainer}>
            <View style={styles.footerReactionSec}>
                <View style={styles.row}>
                    <Image source={Like} style={styles.reactionIcon} />
                    <Image source={Wow} style={styles.reactionIcon} />
                    <Image source={Love} style={styles.reactionIcon} />
                    <Text style={styles.reactionCount}>20</Text>
                </View>
                <Text style={styles.reactionCount}>10 comments</Text>
            </View>
            <View style={styles.userActionSec}>
                <View style={styles.row}>
                    <VectorIcon
                        name="like2"
                        type="AntDesign"
                        size={25}
                        color={Colors.grey}
                    />
                    <Text style={styles.reactionCount}>Like</Text>
                </View>
                <View style={styles.row}>
                    <VectorIcon
                        name="chatbox-outline"
                        type="Ionicons"
                        size={25}
                        color={Colors.grey}
                    />
                    <Text style={styles.reactionCount}>Comment</Text>
                </View>

                <View style={styles.row}>
                    <VectorIcon
                        name="arrow-redo-outline"
                        type="Ionicons"
                        size={25}
                        color={Colors.grey}
                    />
                    <Text style={styles.reactionCount}>Share</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    reactionIcon: {
        height: 20,
        width: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postFotterContainer: {
        padding: 16,
    },
    reactionCount: {
        color: Colors.grey,
        fontSize: 14,
        paddingLeft: 5,
    },
    footerReactionSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightgrey,
        paddingBottom: 15,
    },
    userActionSec: {
        marginTop: 15,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default PostFooter;