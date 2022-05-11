import React from 'react';
import { DashboardRounded, BuildRounded, PowerSettingsNewRounded } from '@material-ui/icons';
import IntlMessages from '../../../utils/IntlMessages';

export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'section',
    children: [
      {
        name: <IntlMessages id={'pages.dashboard'} />,
        type: 'item',
        icon: <DashboardRounded />,
        link: '/resident/dashboard',
      },
      {
        name: <IntlMessages id={'pages.serviceRequest'} />,
        icon: <BuildRounded />,
        type: 'item',
        link: '/resident/servicerequest',
      },
      {
        name: <IntlMessages id={'popup.logout'} />,
        icon: <PowerSettingsNewRounded />,
        type: 'item',
        link: '/resident/logout',
      },
    ],
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: [
      {
        name: <IntlMessages id={'pages.samplePage'} />,
        type: 'item',
        icon: <DashboardRounded />,
        link: '/sample-page',
      },
    ],
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: [
      {
        name: <IntlMessages id={'pages.samplePage'} />,
        type: 'item',
        icon: <DashboardRounded />,
        link: '/sample-page',
      },
    ],
  },
];
