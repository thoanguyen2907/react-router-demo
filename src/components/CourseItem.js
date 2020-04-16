import React, { Component } from 'react';

class CourseItem extends Component {
    render() {
        let {match} = this.props;
        return (
            <div>
                <div className="card">
  <ul className="list-group list-group-flush">
        <li className="list-group-item">The course is : {match.params.id}</li>
  </ul>
</div>
            </div>
        );
    }
}

export default CourseItem;
