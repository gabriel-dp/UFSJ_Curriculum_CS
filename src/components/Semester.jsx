import styled from 'styled-components';

const SemesterArea = styled.div`
    width: 100%;
    max-width: 11rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

const SemesterTitle = styled.h3`
    font-weight: normal;
    font-size: 0.9rem;
`;

const Semester = ({ children, index }) => {
    return (
        <SemesterArea>
            <SemesterTitle>{index+1}º Período</SemesterTitle>
            {children}
        </SemesterArea>
    );
}

export default Semester;