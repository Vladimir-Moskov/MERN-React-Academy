import React, { Component } from "react";
import { IGenreComponentState } from '../../interfaces/IGenreComponentState';
import { IComponentProp } from '../../interfaces/IComponentProp';
import { ComponentUtils } from '../ComponentUtils';

export class GenresComponent extends Component<IComponentProp & IGenreComponentState> {
  /*constructor(props: IComponentProp & IGenreComponentState) {
    super(props);
  }*/

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { reloadData } = this.props;
    const { genres, isLoading, error } = this.props;
    if (error || isLoading) {
      return ComponentUtils.waitingContent(this.props);
    }

    if (!genres) {
      return (
        <div />
      )
    }
    
    /**/
    return (
      <div>
        <h1>Genres List</h1>
        <ul>
          {genres.map((genre: any) => (
            <li key={genre._id}>
              <a href={'/genres/' + genre._id}>{genre.name} </a> 
            </li>
          ))}
        </ul>
        { ComponentUtils.reloadContent(reloadData) }

      </div>


    );
  }
}

export default GenresComponent;