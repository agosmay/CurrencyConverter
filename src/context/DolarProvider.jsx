import { DolarContext } from './DolarContext';
import { useState } from 'react';


export const DolarProvider = ({ children }) => {
	const [theme, setTheme]=useState('light')
	
	const toggleTheme= () => {
		setTheme((curr) => curr === "light" ? "dark" : "light")
		
	}
	
	
	return (
		<>
			<DolarContext.Provider value={{
				theme,
				setTheme,
				toggleTheme
				
			}}>
			{children}
			</DolarContext.Provider>
		</>
	
	);
	
	
}