import styled from 'styled-components';

const SemesterArea = styled.div`
    width: 100%;
    max-width: 12rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

const Semester = ({ children }) => {
    return (
        <SemesterArea>
            {children}
        </SemesterArea>
    );
}

export default Semester;