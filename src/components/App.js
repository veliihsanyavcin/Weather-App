import React from 'react';
import Day from "./Day";
import Night from "./Night";
import styled from "styled-components";
import Location from "./Location";



const App = () => {
  return (
    <Container>
      <Day />,
      <Night />,
      <Location />
    </Container>
    
  );
};

const Container = styled.div`

`;

const Wrapper = styled.div`
 
`;

export default App;

