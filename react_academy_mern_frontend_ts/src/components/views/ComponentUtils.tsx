import { Spinner, Button } from "react-bootstrap";
import React from "react";

export class ComponentUtils {

    static waitingContent(props: any) {
        const { isLoading, error } = props;

        if (error) {
          return (<div>{error}</div>);
        }
    
        if (isLoading) {
          return (<div>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>);
        }
        
    }

    static reloadContent(handler: any) {
      return ( <Button variant="primary" size="lg" block onClick={handler}>
        Reload Date
      </Button>);
    }

}