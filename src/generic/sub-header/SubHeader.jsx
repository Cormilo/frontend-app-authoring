import React from 'react';
import PropTypes from 'prop-types';
import { ActionRow } from '@openedx/paragon';

const SubHeader = ({
  title,
  subtitle,
  breadcrumbs,
  contentTitle,
  description,
  instruction,
  headerActions,
  titleActions,
  hideBorder,
  withSubHeaderContent,
}) => (
  <div className={`${!hideBorder && 'border-bottom border-light-400'} mb-3`}>
    <header className="sub-header">
      <h2 className="sub-header-title">Courses Editor

      </h2>

    </header>
    {contentTitle && withSubHeaderContent && (
      <header className="sub-header-content">
        <h2 className="sub-header-content-title">{contentTitle}</h2>
        <span className="small text-gray-700">{description}</span>
      </header>
    )}
    {instruction && (
      <p className="sub-header-instructions mb-4">{instruction}</p>
    )}
  </div>
);

SubHeader.defaultProps = {
  instruction: '',
  description: '',
  subtitle: '',
  breadcrumbs: '',
  contentTitle: '',
  headerActions: null,
  titleActions: null,
  hideBorder: false,
  withSubHeaderContent: true,
};

SubHeader.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  subtitle: PropTypes.string,
  breadcrumbs: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  contentTitle: PropTypes.string,
  description: PropTypes.string,
  instruction: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  headerActions: PropTypes.node,
  titleActions: PropTypes.node,
  hideBorder: PropTypes.bool,
  withSubHeaderContent: PropTypes.bool,
};
export default SubHeader;
