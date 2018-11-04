import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    componentDidMount () {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(res => res, error => {
        this.setState({ error });
        return Promise.reject(error);
      });
    }

    render(){
      return (
        <>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}
 
export default withErrorHandler;