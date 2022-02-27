import { useEffect, useState } from 'react';
import styled from 'styled-components';

import curriculumData from '../utils/curriculumData';
import Semester from '../components/Semester';
import Subject from '../components/Subject';

const CurriculumPage = styled.div`
	margin: 1rem;
	background-color: ghostwhite;
	display: flex;
	flex-direction: row;
	gap: 1rem;
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

	useEffect(() => {
		//modded
	}, [curriculum])

	return (
		<CurriculumPage>
			{
				[...Array(semesters)].map((semester, index) => (
					<Semester key={index}>
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
							})
						}
					</Semester>
				))
			}
		</CurriculumPage>
	);
}

export default Curriculum