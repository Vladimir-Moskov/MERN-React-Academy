import React, { Component } from "react";
import logo from '../../logo.svg';

interface HomeProps {
    logo: any;
}

export class Home extends Component<HomeProps> {
    public logo: any;

    static defaultProps: HomeProps = {
        logo: logo
      }
      /*
    constructor(props: HomeProps) {
        super(props);
    }*/
  render() {
    let logoComponent: any = <div/>;
    if (this.props.logo) {
        logoComponent =  <img src={this.props.logo} className="App-logo" alt="logo" />
    }
    return (
        

        <div className="App">
      
            <header className="App-header">
                {logoComponent}
                <h1>Welcome here</h1>
                <h2>Author: Volodymyr Moskov</h2>
                <h2>Date: 2020-03-16</h2>
            </header>
            </div>
    
    )

  }
}

export default Home