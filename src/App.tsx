import React from 'react';
import {Card} from "./components/card.styled";
import {Rectangular} from "./components/rectangular.styled";
import styled from 'styled-components';
import { ButtonLeft, ButtonRight } from './components/buttons.styled';



function App() {
    return (
        <div className="App">
            <Card>
                <Rectangular></Rectangular>
                <Text>
                    <Headline>Нeadline</Headline>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque optio sed tempora
                        totam. Aut, debitis deleniti minus obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis, ea fuga fugiat ipsam iusto maiores maxime, neque nesciunt nostrum odio officiis quo quod, repellat velit. Expedita porro possimus similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo possimus reiciendis voluptate voluptates. Cupiditate distinctio esse illo quos, ratione sit vel! Cupiditate dignissimos doloremque eveniet ex in iure laboriosam odio.</Paragraph>
                </Text>
                <ButtonLeft>See more</ButtonLeft>
                <ButtonRight>Save</ButtonRight>
            </Card>
        </div>
    );
}

const Text = styled.div`
  font-family: Inter, sans-serif;
  margin-right: 20px;
  margin-left: 20px;
`

const Headline = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`
const Paragraph = styled.p`
color: grey;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

`

export default App;
