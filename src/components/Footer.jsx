import styled from 'styled-components';

const FooterArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 1rem 0;
`;

const Divisory = styled.div`
    height: 1px;
    width: 100%;
    background-color: gray;
    margin-bottom: 1.5rem;
`;

const FooterText = styled.p`
    font-size: 0.9rem;
    a {
        color: black;
    }
`;

const Footer = () => {
    return (
        <FooterArea>
            <Divisory/>
            <FooterText>Made by <a href='https://github.com/gabriel-dp' target='_blank' rel="noreferrer">Gabriel de Paula</a> &nbsp;&nbsp;|&nbsp;&nbsp; <a href='https://github.com/gabrieldp23/UFSJ_Curriculum_CS' target='_blank' rel="noreferrer">View project source code</a></FooterText>
        </FooterArea>
    );
}

export default Footer;
