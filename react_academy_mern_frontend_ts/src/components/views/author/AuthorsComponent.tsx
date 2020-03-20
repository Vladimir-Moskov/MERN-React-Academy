import React, { Component } from "react";
import { IAuthorComponentState } from '../../interfaces/IAuthorComponentState';
import { IComponentProp } from '../../interfaces/IComponentProp';
import { ComponentUtils } from '../ComponentUtils';

export class AuthorsComponent extends Component<IComponentProp & IAuthorComponentState> {
  /*constructor(props: IComponentProp & IAuthorComponentState) {
    super(props);
  }*/

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { reloadData } = this.props;
    const { authors, isLoading, error } = this.props;
    if (error || isLoading) {
      return ComponentUtils.waitingContent(this.props);
    }
    if (!authors) {
      return (
        <div />
      )
    }
    /**/
    return (
      <div>
        <h1>Authors List</h1>
        <ul>
          {authors.map(author => (
            <li key={author._id}>
              <a href={'/authors/' + author._id}>{author.name} </a>  ({author.date_of_birth} - {author.date_of_death})
            </li>
          ))}
        </ul>
        { ComponentUtils.reloadContent(reloadData) }

      </div>


    );
  }
}

export default AuthorsComponent;