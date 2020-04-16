import React, { Component } from 'react';

class VueItem extends Component {
    render() {
        let {match} = this.props;
        return (
            <div className="card">
            <div className="card-body">
        <h5 className="card-title">{`Vue ${match.params.id}`}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Description</h6>
              <p className="card-text">Faster than Reactjs</p>
              <a href="#" className="card-link">More info</a>
            </div>
          </div>
        );
    }
}

export default VueItem;
