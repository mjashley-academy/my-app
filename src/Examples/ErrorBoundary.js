import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(){
    return this.setState({hasError:true})
  }

  componentDidCatch(error, errorInfo){
    console.log("Error:",error);
    console.log("ErrorInfo:", errorInfo);
  }
  render() {
    if(this.state.hasError){
        return <h2>Something went wrong!</h2>
    }
    return <div>Error Boundary</div>;
  }
}
