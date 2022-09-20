import React from 'react';
import styled from 'styled-components';

const PageContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    h1 {
        margin: auto;
    }
`;

const NotFound = () => {
    return (
        <PageContent>
            <h1>Not Found</h1>
        </PageContent>
    );
}

export default NotFound;