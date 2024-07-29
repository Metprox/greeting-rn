import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useMemo, useState } from 'react';
import { useSavedColorFromStorage } from '@/hooks';

type GreetingProps = {
	color: string;
};

export const Greeting: FC<GreetingProps> = ({ color }) => {
	const { savedColor } = useSavedColorFromStorage();

	const currentColor = useMemo(
		() => (color ? color : savedColor ? savedColor : ''),
		[color, savedColor]
	);

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: currentColor,
				},
			]}
		>
			<Text style={[styles.greeting]}>Hello there</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	greeting: {
		fontSize: 21,
		fontWeight: '600',
		userSelect: 'none',
		letterSpacing: 1,
		lineHeight: 21,
	},
});
