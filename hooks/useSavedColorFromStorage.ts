import { useState } from 'react';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GENERETED_COLOR } from '@/constants';

export const useSavedColorFromStorage = () => {
	const [savedColor, setSavedColor] = useState('');
	const getGreetingColorFromStorage = async () => {
		try {
			const savedGreetingColorFromStorage =
				await AsyncStorage.getItem(GENERETED_COLOR);

			setSavedColor(savedGreetingColorFromStorage ?? '');
		} catch (error) {
			console.error('Could not reach to item in storage');
		}
	};

	useFocusEffect(() => {
		getGreetingColorFromStorage();
	});

	return {
		savedColor,
		setSavedColor,
	};
};
