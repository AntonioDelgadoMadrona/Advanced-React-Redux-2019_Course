import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export const App = () => {
  return (
    <CommentBox />
    <CommentList />
  );
}
