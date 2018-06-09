export interface SideBarNavItem {
  path: string;
  title: string;
  class: string;
  icon: string;
  badge: string;
  badgeClass: string;
  isSectionLabel: boolean;
  submenu: SideBarNavItem[];
}
