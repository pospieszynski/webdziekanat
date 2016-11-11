import React from 'react';

export default class PageContent extends React.Component {

  render() {
    return (
        <div className="col-xs-12 col-sm-9">
          <h2>{this.props.children}</h2>
        </div>
    )
  }
}