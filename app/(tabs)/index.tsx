import { FC, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { generateRandomColorRGB } from '@/helpers';
import { GENERETED_COLOR } from '@/constants';
import { Greeting } from '@/app/components';
import { useSavedColorFromStorage } from '@/hooks';
type HomeProps = {};

const Home: FC<HomeProps> = () => {
	const [color, setColor] = useState('');
	const { setSavedColor } = useSavedColorFromStorage();

	const onPressGreeting = () => {
		const randomColor = generateRandomColorRGB();

		setColor(randomColor);
		try {
			AsyncStorage.setItem(GENERETED_COLOR, randomColor);
			setSavedColor(randomColor);
		} catch (error) {
			console.error('Could not save color in storage!');
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Pressable style={styles.wrapper} onPress={onPressGreeting}>
				<Greeting color={color} />
			</Pressable>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
	},
});

export default Home;
