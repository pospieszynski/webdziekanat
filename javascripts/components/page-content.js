import React from 'react';

export default class PageContent extends React.Component {

  render() {
    return (
        <div className="col-xs-12 col-sm-6">
          {this.props.children}
        </div>
    )
  }
}