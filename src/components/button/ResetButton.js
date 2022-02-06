import styled from 'styled-components';
import iconReset from '../../icons/reset.svg';
import StyledButtonWrapper from './StyledButtonWrapper';

const ButtonWrapper = styled(StyledButtonWrapper)`
    width: 4.4rem;
    aspect-ratio: 1/1;
    background-color: var(--blue-dark);
`;
const ButtonSurface = styled.div`
    height: 100%;
    padding: 0.75rem 0;
    background-color: var(--blue);
    border-radius: inherit;
    font-weight: 600;
    color: var(--white);
    text-align: center;
`;
function ResetButton({ handleClick }) {
    return (
        <ButtonWrapper onClick={handleClick}>
            <ButtonSurface>
                <img src={iconReset} alt="R" style={{ height: '2rem' }} />
            </ButtonSurface>
        </ButtonWrapper>
    );
}

export default ResetButton;
