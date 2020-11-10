/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
});
