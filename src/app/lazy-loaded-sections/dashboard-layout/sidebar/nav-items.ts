import { SideBarNavItem } from '../../../interfaces/index';

export function getNavItems(): SideBarNavItem[] {
  return [
    {
      path: '', title: 'Main Section', class: 'nav-small-cap', isSectionLabel: true,
      badgeClass: '', badge: '', icon: '', submenu: []
    },
    {
      path: '/dashboard', title: 'Dashboard', icon: 'mdi mdi-gauge',
      class: '', badge: '', badgeClass: '', submenu: [], isSectionLabel: false
    },
    {
      path: '/page1', title: 'Page 1', icon: 'mdi mdi-gauge',
      class: '', badge: '', badgeClass: '', submenu: [], isSectionLabel: false
    },
    {
      path: '', title: 'Section 2', class: 'nav-small-cap', isSectionLabel: true, badge: '', badgeClass: '', submenu: [], icon: ''
    },
    {
      path: '', title: 'Drop down', icon: 'mdi mdi-bullseye', class: 'has-arrow', badgeClass: '', badge: '', isSectionLabel: false,
      submenu: [
        { path: '#', title: 'Link title', icon: '', class: '', badge: '', badgeClass: '', isSectionLabel: false, submenu: [] },
        { path: '#', title: 'Link title 2', icon: '', class: '', badge: '', badgeClass: '', isSectionLabel: false, submenu: [] }
      ]
    }
  ];
}
