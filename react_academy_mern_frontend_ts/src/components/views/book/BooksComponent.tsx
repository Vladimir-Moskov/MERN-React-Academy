import React, { Component } from "react";
import { IBookComponentState } from '../../interfaces/IBookComponentState';
import { IComponentProp } from '../../interfaces/IComponentProp';
import { ComponentUtils } from '../ComponentUtils';

export class BooksComponent extends Component<IComponentProp & IBookComponentState> {
  /*constructor(props: IComponentProp & IAuthorComponentState) {
    super(props);
  }*/

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { reloadData } = this.props;
    const { books, isLoading, error } = this.props;
    if (error || isLoading) {
      return ComponentUtils.waitingContent(this.props);
    }

    if (!books) {
      return (
        <div />
      )
    }
    
    /**/
    return (
      <div>
        <h1>Books List</h1>
        <ul>
          {books.map(book => (
            <li key={book._id}>
              <a href={'/books/' + book._id}>{book.title} </a> 
               (<a href={'/authors/' + book.author._id}>{book.author.name} </a> )
            </li>
          ))}
        </ul>
        { ComponentUtils.reloadContent(reloadData) }

      </div>


    );
  }
}

export default BooksComponent;