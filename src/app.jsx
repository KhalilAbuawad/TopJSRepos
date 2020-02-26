//app.jsx

import React from "react";
import Table from "./components/table.jsx";

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: [], 
            isFetching: false
        };
    }

    fetchRepos = () => {
        this.setState({...this.state, isFetching: true});
        fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("responseJson",responseJson)
            this.setState({table: responseJson, isFetching: false})
        })
        .catch((error) => {
            console.error("response error",error);
            this.setState({...this.state, isFetching: false});
        }); 

    };

    componentDidMount() {
        this.fetchRepos()
    }

    display(){
        if(this.state.isFetching){
            return (
                <div className="loading">
                    <div className="lds-dual-ring"></div>
                    <h1>Loading repositories...</h1>
                </div>
            )
        }else{
            return (<Table {...this.state.table} />)
        }
    }

    render() {
        return (
            <div>
                {this.display()}
            </div>
        );
      }
}