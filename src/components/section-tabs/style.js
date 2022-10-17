import styled from 'styled-components';

export const TabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border: 0.5px solid rgb(216, 216, 216);
    border-radius: 3px;
    outline: none;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 15%) 0 1px 2px;
    transition: box-shadow 0.5s ease 0s;

    &:hover {
      box-shadow: rgb(0 0 0 / 25%) 0 3px 6px;
    }

    &:last-child {
      margin-right: 0;
    }
    
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`;
