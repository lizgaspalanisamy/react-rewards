import React from 'react';
import PropTypes from 'prop-types';
// import Table from 'react-bootstrap';
import Tr from './Tr';
import Tbody from './Tbody';

function List(props) {
  const ComponentToRender = props.component;
  let content = <td />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Tbody>
      <Tr>{content}</Tr>
    </Tbody>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
