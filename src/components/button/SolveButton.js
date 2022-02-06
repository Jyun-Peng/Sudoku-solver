import styled from 'styled-components';
import StyledButtonWrapper from './StyledButtonWrapper';

const ButtonWrapper = styled(StyledButtonWrapper)`
    width: min(20rem, 80vw);
    background-color: var(${(props) => (props.disable ? '--gray-dark' : '--red')});
    pointer-events: ${(props) => (props.disable ? 'none' : 'auto')};
`;
const ButtonSurface = styled.div`
    padding: 1rem 0;
    background-color: var(${(props) => (props.disable ? '--gray-light' : '--orange')});
    border-radius: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(${(props) => (props.disable ? '--white' : '--red-dark')});
    text-align: center;
`;
function SolveButton({ handleClick, disable }) {
    return (
        <ButtonWrapper onClick={handleClick} disable={disable}>
            <ButtonSurface disable={disable}>SOLVE!</ButtonSurface>
        </ButtonWrapper>
    );
}

export default SolveButton;
