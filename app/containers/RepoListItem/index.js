/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { Card } from 'react-bootstrap';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RewardsImage from './RewardsImage';
// import Wrapper from './Wrapper';

export function RepoListItem(props) {
  const { item } = props;
  // let nameprefix = '551ade522ee09431e5000015';

  // This must be changed to query for user id 551ade522ee09431e5000015
  // if (item.owner.login !== props.currentUser) {
  //   nameprefix = `${item.owner.login}/`;
  // }

  // Put together the content of the repository
  const content = (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={item.rewards.image_url} alt="Company Logo">
        {item.rewards.name}
      </Card.Img>
      <Card.Body>
        <Card.Text>
          {item.rewards.description.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <IssueIcon />
    </Card>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
