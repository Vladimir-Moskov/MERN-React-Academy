import React, { Component } from "react";
import { match } from 'react-router-dom';
import { IComponentLoadByIDProp } from "../../interfaces/IComponentLoadByIDProp";
import { IBookComponentState } from "../../interfaces/IBookComponentState";
import { ComponentUtils } from '../ComponentUtils';

interface DetailParams {
  id: string;
}

interface DetailsProps {
  required: string;
  match: match<DetailParams>;
}

export class BookDetailsComponent extends Component<DetailsProps & IBookComponentState & IComponentLoadByIDProp> {
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
        <h1>Book {details.title}</h1>

        <p>
          <strong>Author:</strong>
          <a href={'/authors/' + details.author._id}>{details.author.name} </a>
        </p>
        <p>
          <strong>Summary:</strong>
          {details.summary}
        </p>
        <p>
          <strong>ISBN:</strong>
          {details.isbn}
        </p>
        {details.genre.length > 0 &&
          <p>
            <strong>Genre:</strong>
            {details.genre.map((genre_item: any) => (
                <a key={genre_item._id} href={'/genres/' + genre_item._id}>{genre_item.name} </a>
            ))}
          </p>
        }

        {details.book_instance.length === 0 &&
          <p>
            There are no copies of this book in the library.
          </p>
        }
        {details.book_instance.length > 0 &&
          <div>
            <h4> Copies </h4>
          
            {details.book_instance.map((instance: any) => (
              <div key={instance._id}>
                <hr/> 
                <p className={instance.color}>
                  {instance.status}
                </p>
                <p>
                  <strong>Imprint:</strong>
                  {instance.imprint}
                </p>

                {instance.status !== 'Available' &&
                  <p>
                    <strong>Due back:</strong>
                    {instance.due_back}
                  </p>
                }

                {instance.status === 'Available' &&
                  <a href={'/bookinstances/' + instance._id}>{instance._id} </a>
                }
                
              </div>
            ))}
         </div>
        }

        {ComponentUtils.reloadContent(() => {
            reloadData(matchval.params.id);
          })}
        
      </div>


    );

  }
}

export default BookDetailsComponent;