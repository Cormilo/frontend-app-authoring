import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import { otherLinkURLParams } from './constants';
import messages from './messages';
import HelpSidebarLink from './HelpSidebarLink';

const HelpSidebar = ({
  intl,
  courseId,
  showOtherSettings,
  proctoredExamSettingsUrl,
  children,
  className,
}) => {
  const { pathname } = useLocation();
  const {
    grading,
    courseTeam,
    advancedSettings,
    scheduleAndDetails,
    groupConfigurations,
  } = otherLinkURLParams;

  const showOtherLink = (params) => !pathname.includes(params);
  const generateLegacyURL = (urlParameter) => {
    const referObj = new URL(`${urlParameter}/${courseId}`, getConfig().STUDIO_BASE_URL);
    return referObj.href;
  };

  const scheduleAndDetailsDestination = generateLegacyURL(scheduleAndDetails);
  const gradingDestination = generateLegacyURL(grading);
  const courseTeamDestination = generateLegacyURL(courseTeam);
  const advancedSettingsDestination = generateLegacyURL(advancedSettings);
  const groupConfigurationsDestination = generateLegacyURL(groupConfigurations);

  return (
    ' '
  );
};

HelpSidebar.defaultProps = {
  proctoredExamSettingsUrl: '',
  className: undefined,
  courseId: undefined,
  showOtherSettings: false,
};

HelpSidebar.propTypes = {
  intl: intlShape.isRequired,
  courseId: PropTypes.string,
  showOtherSettings: PropTypes.bool,
  proctoredExamSettingsUrl: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default injectIntl(HelpSidebar);
