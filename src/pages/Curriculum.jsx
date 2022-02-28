import { useEffect, useState } from 'react';
import styled from 'styled-components';

import curriculumData from '../utils/curriculumData';
import Header from '../components/Header';
import Semester from '../components/Semester';
import Subject from '../components/Subject';
import Footer from '../components/Footer';

const CurriculumPage = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: row;
	gap: 1rem;
	overflow-x: scroll;
	padding-bottom: 1rem;
`;

const Curriculum = () => {
	const [curriculum, setCurriculum] = useState(curriculumData);
	
	// get number of semesters
	const [semesters, setSemesters] = useState();
	useEffect(() => {
		let higherSemester = 1;
		Object.keys(curriculum).forEach((subject) => {
			let actualSemester = curriculum[subject]['semester'];
			if (actualSemester > higherSemester) higherSemester = actualSemester;
		});
		setSemesters(higherSemester);
	}, [curriculum]) 

	function changeCompleted (name) {
		let newCurriculum = {...curriculum};
		newCurriculum[name].completed = !newCurriculum[name].completed;
		setCurriculum(newCurriculum);
	}

	return (
		<>
			<Header title={'UFSJ - Grade Curricular'} subtitle={'Ciência da Computação'}/>
			<CurriculumPage>
				{
					[...Array(semesters)].map((semester, index) => (
						<Semester key={index} index={index}>
							{
								Object.keys(curriculum).map((subject) => {
									if (curriculum[subject]['semester'] === index+1) {
										return (
											<Subject
												key={subject}
												curriculum={curriculum}
												name={subject}
												changeCompleted={changeCompleted}
											/>
										);
									}
									return (null);
								})
							}
						</Semester>
					))
				}
			</CurriculumPage>
			<Footer/>
		</>
	);
}

export default Curriculum