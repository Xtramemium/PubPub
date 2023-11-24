import { useEffect, useState } from 'react';

export const useChangeTheme = () => {
	const [theme, setTheme] = useState('orange');

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'orange' : 'dark');
	};
	return handleThemeSwitch;
};
