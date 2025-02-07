import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { useSelector } from 'react-redux';
import { getPagePath } from '../utils';
import { getStudioHomeData } from '../studio-home/data/selectors';
import messages from './messages';

export const useContentMenuItems = courseId => {
  const intl = useIntl();
  const studioBaseUrl = getConfig().STUDIO_BASE_URL;

  const items = [

    {
      href: getPagePath(courseId, 'true', 'tabs'),
      title: 'Additional pages',
    },
    {
      href: `${studioBaseUrl}/assets/${courseId}`,
      title: 'Uploaded files',
    },
  ];
  if (getConfig().ENABLE_VIDEO_UPLOAD_PAGE_LINK_IN_CONTENT_DROPDOWN === 'true') {
    items.push({
      href: `${studioBaseUrl}/videos/${courseId}`,
      title: intl.formatMessage(messages['header.links.videoUploads']),
    });
  }

  return items;
};

export const useSettingMenuItems = courseId => {
  const intl = useIntl();
  const studioBaseUrl = getConfig().STUDIO_BASE_URL;
  const { canAccessAdvancedSettings } = useSelector(getStudioHomeData);

  const items = [

    {
      href: `${studioBaseUrl}/settings/grading/${courseId}`,
      title: 'Grading',
    },

    ...(canAccessAdvancedSettings === true
      ? [{
        href: `${studioBaseUrl}/settings/advanced/${courseId}`,
        title: 'Advanced settings',
      }] : []
    ),
  ];

  return items;
};

export const useToolsMenuItems = courseId => {
  const intl = useIntl();
  const studioBaseUrl = getConfig().STUDIO_BASE_URL;

  const items = [
    {
      href: `${studioBaseUrl}/import/${courseId}`,
      title: 'Import Course',
    },
    {
      href: `${studioBaseUrl}/export/${courseId}`,
      title: 'Export Course',
    },

  ];
  return items;
};
