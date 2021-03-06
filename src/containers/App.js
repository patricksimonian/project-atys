/*
Copyright 2018 Patrick Simonian
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
import React, { Component } from 'react';
import './App.css';

import IndexLayout from '../hoc/IndexLayout';
import CardGridLayout from '../hoc/CardGridLayout';
import Card from '../components/Card/Card';
import { Grid } from '@material-ui/core';

const dummyData = [
  {
    title: 'test',
    description: '123',
    author: 'blah',
    thumbnail: 'https://www.google.ca',
    placeholder: '..',
    video: '..',
  },
  {
    title: 'test',
    description: '123',
    author: 'blah',
    thumbnail: 'https://www.google.ca',
    placeholder: '..',
    video: '..',
  },
  {
    title: 'test',
    description: '123',
    author: 'blah',
    thumbnail: 'https://www.google.ca',
    placeholder: '..',
    video: '..',
  },
];

class App extends Component {
  render() {
    const cards = dummyData.map((card, ind) => (
      <Grid item sm>
        <Card key={ind} {...card} />
      </Grid>
    ));

    return (<IndexLayout>
      <CardGridLayout>
        {cards}
      </CardGridLayout>
    </IndexLayout>);
  }
}

export default App;
