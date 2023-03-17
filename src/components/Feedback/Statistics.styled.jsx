import styled from "@emotion/styled";

export const List = styled.ul`
display:flex;
justify-content: center;
padding:0;
`;

export const ListEl = styled.li`
list-style: none;

:not(:last-child) {
    margin-right:20px;
}
`;

export const Text = styled.span`
font-size: 20px;
`;