import React from 'react';
import styles from './Button.module.css';
//import styles from './Button.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
console.log(cx('button', 'loading'));

class Button extends React.Component {
  state = {
    loading: false,
  };

  render () {
    const {loading} = this.state;
    return(
      <button 
        onClick={this.startLoading} 
        className={
          classNames(cx('button', { loading }))
        }
        {...this.props} 
      />
    );
  }

  startLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }
}

export default Button;