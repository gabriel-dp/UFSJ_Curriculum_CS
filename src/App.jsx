import styled from 'styled-components';
import GlobalStyle from './styles/global';
import Curriculum from './pages/Curriculum';

const Screen = styled.div`
	background-color: #eee;
	min-height: 100vh;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
`;

function App() {
	return (
		<Screen>
			<GlobalStyle/>
			<Curriculum/>
		</Screen>
	);
}

export default App;
