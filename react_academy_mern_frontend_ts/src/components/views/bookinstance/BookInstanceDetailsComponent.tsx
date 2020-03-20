import React, { Component } from "react";
import { match } from 'react-router-dom';
import { IComponentLoadByIDProp } from "../../interfaces/IComponentLoadByIDProp";
import { IBookInstanceComponentState } from "../../interfaces/IBookInstanceComponentState";
import { ComponentUtils } from '../ComponentUtils';

interface DetailParams {
  id: string;
}

interface DetailsProps {
  required: string;
  match: match<DetailParams>;
}

export class BookInstanceDetailsComponent extends Component<DetailsProps & IBookInstanceComponentState & IComponentLoadByIDProp> {
  /* constructor(props: DetailsProps & IBookInstanceComponentState & IAuthorComponentState) {
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
        <h1>ID {details._id}</h1>

        <p>
          <strong>Title:</strong>
          <a href={'/books/' + details.book._id}>{details.book.title} </a>
        </p>
        <p>
          <strong>Imprint:</strong>
          {details.imprint}
        </p>

        <p>
          <strong>Status:</strong>
          <span className={details.color}>{details.status}</span>
        </p>
        {details.status !== 'Available' &&
          <span>Due: #{details.due_back}</span>
        }

        {ComponentUtils.reloadContent(() => {
            reloadData(matchval.params.id);
          })}
        
      </div>


    );

  }
}

export default BookInstanceDetailsComponent;