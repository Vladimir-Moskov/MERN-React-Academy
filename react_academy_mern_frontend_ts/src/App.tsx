import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftMenu } from './components/layout/LeftMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { Home } from './components/views/Home';
import AuthorsContainer from './components/views/author/AuthorsContainer';
import AuthorDetailsContainer from './components/views/author/AuthorDetailsContainer';
import BooksContainer from './components/views/book/BooksContainer';
import BookDetailsContainer from './components/views/book/BookDetailsContainer';
import GenresContainer from './components/views/genre/GenresContainer';
import GenreDetailsContainer from './components/views/genre/GenreDetailsContainer';
import BookInstancesContainer from './components/views/bookinstance/BookInstancesContainer';
import BookInstanceDetailsContainer from './components/views/bookinstance/BookInstanceDetailsContainer';

import { Route } from 'react-router-dom';

class App extends Component {
  private logo: any;

  constructor(props: any) {
    super(props);
    this.logo = logo;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs lg="2">
            <LeftMenu />
          </Col>
          <Col>
            <div className="container">
              <Route path="/" exact component={Home} />
              <Route path="/authors" exact component={AuthorsContainer} />
              <Route path="/authors/:id" component={AuthorDetailsContainer} />
              <Route path="/books" exact component={BooksContainer} />
              <Route path="/books/:id" component={BookDetailsContainer} />
              <Route path="/genres" exact component={GenresContainer} />
              <Route path="/genres/:id" component={GenreDetailsContainer} />
              <Route path="/bookinstances" exact component={BookInstancesContainer} />
              <Route path="/bookinstances/:id" component={BookInstanceDetailsContainer} />
            </div>
         
          </Col>
        </Row>

      </Container>

    );
  }
}
export default App;
