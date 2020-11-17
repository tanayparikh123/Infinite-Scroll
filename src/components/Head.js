import React from 'react'
import styled from 'styled-components';

const Header = styled.header `
max-width: 70rem;
margin: 2rem auto;
text-align: center;
`;

const H1 = styled.h1 `

font-family: 'Oswald', sans-serif;
margin-bottom: 1em;
`;

const Head = () => {
    return (

        <
        Header >
        <
        H1 > FLICKR < /H1>   <
        p > The Source where you use these Wonderful Images and create Your own world < /p>  <
        p > Powered By Creators Eversywhere < /p>  < /
        Header >
    )
}
export default Head;