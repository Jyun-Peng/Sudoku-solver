import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
    padding-bottom: 0.8rem;
    border-radius: 1rem;
    user-select: none;
    cursor: pointer;

    &:hover {
        transition: transform 0.2s;
        transform: translateY(-4%);
    }
    &:active {
        transition: none;
        transform: translateY(5%);
    }
`;

export default StyledButtonWrapper;
