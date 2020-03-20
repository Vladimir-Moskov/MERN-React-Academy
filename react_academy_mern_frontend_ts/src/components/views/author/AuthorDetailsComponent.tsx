import React, { Component } from "react";
import { match } from 'react-router-dom';
import { IComponentLoadByIDProp } from "../../interfaces/IComponentLoadByIDProp";
import { IAuthorComponentState } from "../../interfaces/IAuthorComponentState";
import { ComponentUtils } from '../ComponentUtils';

interface DetailParams {
  id: string;
}

interface DetailsProps {
  required: string;
  match: match<DetailParams>;
}

export class AuthorDetailsComponent extends Component<DetailsProps & IAuthorComponentState & IComponentLoadByIDProp> {
  /* constructor(props: DetailsProps & IAuthorDetailsComponentProp & IAuthorComponentState) {
     super(props);
   }*/

  componentDidMount() {
    const matchval: match<DetailParams> = this.props.match;
    this.props.loadData(matchval.params.id);
  }

  render() {
    const matchval: match<DetailParams> = this.props.match;
    const { reloadData } = this.props;
    const { details, isLoading, error } = this.props;

    if (error || isLoading) {
      return ComponentUtils.waitingContent(this.props);
    }
  
    if (!details) {
      return (
        <div />
      )
    }

    return (
      <div>
        <h1>Author {details.name}</h1>
        <h4>Books</h4>
        {details.books.length === 0 &&
          <p>
            This author has no books.
          </p>
        }
        {details.books.length > 0 &&
          <ul>
            {details.books.map((book: any) => (
              <li key={book._id}>
                <a href={'/books/' + book._id}>{book.title} </a>
                <p>
                  {book.summary}
                </p>
              </li>
            ))}
          </ul>
        }

        {ComponentUtils.reloadContent(() => {
            reloadData(matchval.params.id);
          })}
        
      </div>


    );

  }
}

export default AuthorDetailsComponent;