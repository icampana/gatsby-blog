// src/components/tagWidget/TagPreview.js
import React from "react";
import styled from 'styled-components';

const ListContainer = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-end: 0px;

  & a {
    text-decoration: none;
  }
`;

const ListItem = styled.li`
  padding: 0;
  background: rgba(0,0,0,.05);
  color: rgba(0,0,0,.6);
  border-radius: 3px;
  padding: 5px 10px;
  display: inline-block;
  margin: 0 10px 10px 0;

  &:hover {
    transition: all 0.2s;
    background-color: crimson;
    color: white;
  }

  &:hover::after {
    border-left-color: crimson;
  }
`;

const TagPreview = (props) => {
  const tags = props.value || [];

  return (
    <ListContainer>
      {tags.map((tag, index) =>
        <ListItem key={index}>{tag}</ListItem>)
      }
    </ListContainer>
  );
};

export default TagPreview;
