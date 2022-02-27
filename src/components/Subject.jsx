import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa'

const SubjectArea = styled.div`
    width: 100%;
    min-height: 4.5rem;  
    background-color: ${props => props.completed ? props.color+'CC' : props.color};
    padding: 1rem 2.5rem 1rem 1rem;
    border-radius: 1rem;
    border:  ${props => props.completed ? '1px transparent solid' : '1px #333 solid'};
    user-select: none;
    cursor: pointer;
    transition: all 0.25s ease;
    position: relative;
    filter: ${props => props.completed ? 'saturate(75%)' : 'none'};

    :hover {
        filter: drop-shadow(0 0 0.25rem ${props => props.color}) brightness(92.5%);
        .lock {
            font-size: 1rem;
            color: #333;
        }
    }
`;

const SubjectName = styled.h4`
    font-size: 0.75rem;
    font-weight: normal;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    color: ${props => props.completed ? '#777' : 'default'};
`;

const SubjectLockSymbol = styled(FaLock).attrs({
    className: 'lock'
})`
    font-size: 0.75rem;
    color: gray;  
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: all 0.25s ease;
`;

const Subject = ({ curriculum, name, changeCompleted }) => {
    const subject = curriculum[name];
    const [color, setColor] = useState();
    const [completed, setCompleted] = useState();
    const [dependent, setDependent] = useState();

    useEffect(() => {
        setCompleted(subject['completed']);
        setColor(subject['color']);
        setDependent(hasActiveDependencies());
    }, [curriculum]);

    function hasActiveDependencies () {
        let activeDependencies = false;
        subject['dependencies'].forEach((dependency) => {
            if (!curriculum[dependency]['completed']) activeDependencies = true;
        })
        return activeDependencies;
    }
    
    function handleSubjectClick () {
        let allowChangeComplete = true;
        
        if (!completed) {
            if (hasActiveDependencies()) {
                allowChangeComplete = false;
            }
        } else {
            Object.keys(curriculum).forEach((subject) => {
                if (subject !== name && curriculum[subject]['dependencies'].indexOf(name) !== -1 && curriculum[subject]['completed']) {
                    allowChangeComplete = false;
                }
            })
        }

        if (allowChangeComplete) changeCompleted(name);
    }

    return (
        <SubjectArea 
            color={color}
            onClick={() => handleSubjectClick()}
            completed={completed}
        >
            <SubjectName completed={completed}>{name}</SubjectName>
            {
                dependent && 
                <SubjectLockSymbol/>
            }
        </SubjectArea>
    )
}

export default Subject;