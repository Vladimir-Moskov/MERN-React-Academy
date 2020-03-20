import React, { Component } from "react";
import { match } from 'react-router-dom';
import { IComponentLoadByIDProp } from "../../interfaces/IComponentLoadByIDProp";
import { IGenreComponentState } from "../../interfaces/IGenreComponentState";
import { ComponentUtils } from '../ComponentUtils';

interface DetailParams {
  id: string;
}

interface DetailsProps {
  required: string;
  match: match<DetailParams>;
}

export class GenreDetailsComponent extends Component<DetailsProps & IGenreComponentState & IComponentLoadByIDProp> {
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
        <h1>Genre {details.name}</h1>

        <div className='tab'>
          <h4>
            <strong>Books:</strong>
          </h4>
        </div>  

        {details.books.length > 0 &&
           <div>
            {details.books.map((book: any) => (
              <div key={book._id} >
                <a href={'/books/' + book._id}>{book.title} </a>
                
                 <p>
                    {book.summary}
                 </p> 
               </div>
            ))}
           </div>
        }

        {details.books.length === 0 &&
          <p>
            This genre has no books
          </p>
        }
        

        {ComponentUtils.reloadContent(() => {
            reloadData(matchval.params.id);
          })}
        
      </div>


    );

  }
}

export default GenreDetailsComponent;