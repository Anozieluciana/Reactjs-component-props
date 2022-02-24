import React from 'react'
import styled from 'styled-components'
import Builder from './Builder';

export const Section = () => {
  return (
      <Con>
       <Builder
            title='1998 February 1st'
            course='Fullstack Developer'
            amount ='$50.0'
            click='Get Started'
       />

<Builder
            direct='row-reverse'
            title='199- November 17th'
            course='Front End Developer'
            amount ='$80.0'
            click='Get Started'
       />

<Builder
            title='2020 December 16th'
            course='Backend Developer'
            amount ='$120.0'
            click='Get Started'
       />
      </Con>
  );
};


export default Section

const Con = styled.div``