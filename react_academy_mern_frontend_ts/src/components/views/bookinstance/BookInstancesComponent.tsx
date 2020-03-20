import React, { Component } from "react";
import { IBookInstanceComponentState } from '../../interfaces/IBookInstanceComponentState';
import { IComponentProp } from '../../interfaces/IComponentProp';
import { ComponentUtils } from '../ComponentUtils';

export class BookInstancesComponent extends Component<IComponentProp & IBookInstanceComponentState> {
  /*constructor(props: IComponentProp & IBookInstanceComponentState) {
    super(props);
  }*/

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { reloadData } = this.props;
    const { bookInstances, isLoading, error } = this.props;
    if (error || isLoading) {
      return ComponentUtils.waitingContent(this.props);
    }

    if (!bookInstances) {
      return (
        <div />
      )
    }
    
    /**/
    return (
     
      <div> 
        {bookInstances.length === 0 &&
          <strong>There are no book copies in this library.</strong>
        }
        {bookInstances.length > 0 &&
          <div> 
            <h1>Book Instance List</h1>
            <ul>
              {bookInstances.map((bookInstance: any) => (
                <li key={bookInstance._id}>
                  <a href={'/bookinstances/' + bookInstance._id}>{bookInstance.book.title} : #{bookInstance.imprint} - </a> 
                <span className={bookInstance.color}>{bookInstance.status}</span>
                {bookInstance.status !== 'Available' &&
                  <span>Due: #{bookInstance.due_back}</span>
                }
                </li>
              ))}
            </ul>
          </div>
        }
        { ComponentUtils.reloadContent(reloadData) }

      </div>

    );
  }
}

export default BookInstancesComponent;