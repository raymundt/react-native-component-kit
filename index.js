// @flow

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

type Props = {
    code: string
}

export default class CodeView extends React.PureComponent<Props> {
    render () {
        return (
          <View style={styles.container}>
            <View style={styles.actionBar}>
                <View style={[styles.actionButton, styles.closeButton]}/>
                <View style={[styles.actionButton, styles.minimizeButton]}/>
                <View style={[styles.actionButton, styles.maximizeButton]}/>
            </View>
            <Text style={styles.code}>
                {this.props.code}
            </Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    actionBar: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    },
    actionButton: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 1,
        marginRight: 6
    },
    closeButton: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    minimizeButton: {
        backgroundColor: 'orange',
        borderColor: 'orange'
    },
    maximizeButton: {
        backgroundColor: 'green',
        borderColor: 'green'
    },
    code: {
        marginLeft: 4,
        marginRight: 4,
        color: 'white'
    }
});