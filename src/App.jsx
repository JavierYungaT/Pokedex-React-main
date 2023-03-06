import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider';
import React from 'react';


function App() {
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
		
	);
	
}

export default App;
