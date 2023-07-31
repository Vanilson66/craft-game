import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Ground } from "./components/Ground"
import { Player } from "./components/Player"


function App() {
	return (
		<>
        	<Canvas>
				<Sky sunPosition={[100,1000,200]} />
				<ambientLight intensity={1}/>
				<Physics>
					<Player/>
					<Ground/>
				</Physics>
			</Canvas>
		</>
	)  
}

export default App