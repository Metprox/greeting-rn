import { FC, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { generateRandomColorRGB } from '@/helpers';
import { GENERETED_COLOR } from '@/constants';
import { Greeting } from '@/app/components';
import { useSavedColorFromStorage } from '@/hooks';

type SavedColorProps = {};

const SavedColor: FC<SavedColorProps> = () => {
	const { savedColor } = useSavedColorFromStorage();
	
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ color: savedColor ? savedColor : '' }}>
				{savedColor ? savedColor : 'You do not have saved color yet'}
			</Text>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default SavedColor;
