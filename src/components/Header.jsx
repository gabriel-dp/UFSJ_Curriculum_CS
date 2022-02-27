import styled from 'styled-components';

const HeaderArea = styled.div`
    margin: 2rem 0 4rem 0;  
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    :hover {
        h2 {
            letter-spacing: 0.2rem;
        }
    }
`;

const Title = styled.h1`
    font-size: 3rem;
`;

const Subtitle = styled.h2`
    transition: all 0.25s ease;
    font-size: 1.75rem;
`;

const Header = ({ title, subtitle }) => {
    return (
        <HeaderArea>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </HeaderArea>
    );
}

export default Header;