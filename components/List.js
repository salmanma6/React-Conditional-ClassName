import React from 'react';

const ListItem = props => {
  return (<li>
    {props.label} - {props.status}
  </li>)
}

ListItem.defaultProps = {
  status: 0
}


export default class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(item => <ListItem key={item.id} {...item}/>)}
      </div>
    );
  }
}