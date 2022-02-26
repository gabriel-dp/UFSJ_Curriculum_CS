import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SubjectArea = styled.div`
    width: 100%;
    height: 4.5rem;  
    background-color: ${props => props.completed ? props.color+'CC' : props.color};
    padding: 1rem;
    border-radius: 1rem;
    border:  ${props => props.completed ? 'none' : '0.1rem solid'};
    user-select: none;
    cursor: pointer;
    transition: all 0.25s ease;

    filter: ${props => props.completed ? 'saturate(75%)' : 'none'};

    :hover {
        filter: drop-shadow(0 0 0.25rem ${props => props.color}) brightness(92.5%);
    }
`;

const SubjectName = styled.h3`
    font-size: 0.75rem;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    color: ${props => props.completed ? '#777' : 'default'};
`;

const Subject = ({ curriculum, name, changeCompleted }) => {
    const subject = curriculum[name];
    const [color, setColor] = useState('#ffffff');
    const [completed, setCompleted] = useState(false);
    
    function handleSubjectClick () {
        let allowChangeComplete = true;
        
        if (!completed) {
            subject['dependencies'].forEach((dependency) => {
                if (!curriculum[dependency]['completed']) allowChangeComplete = false;
            })
        } else {
            Object.keys(curriculum).forEach((subject) => {
                if (subject !== name && curriculum[subject]['dependencies'].indexOf(name) !== -1 && curriculum[subject]['completed']) {
                    allowChangeComplete = false;
                }
            })
        }

        if (allowChangeComplete) changeCompleted(name);
    }

    useEffect(() => {
        setCompleted(subject['completed'])
        setColor(subject['color'])
    }, [curriculum])

    return (
        <SubjectArea 
            color={color}
            onClick={() => handleSubjectClick()}
            completed={completed}
        >
            <SubjectName completed={completed}>{name}</SubjectName>
        </SubjectArea>
    )
}

export default Subject;