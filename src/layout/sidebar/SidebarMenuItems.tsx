import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

interface ISidebarMenuItem {
  id: string;
  title: string;
  icon: JSX.Element;
  to: string;
}

export const SidebarMenuItems: ISidebarMenuItem[] = [
  {
    id: "sidebar-item-home",
    title: "Homepage",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    id: "sidebar-item-about",
    title: "About",
    icon: <InfoIcon />,
    to: "/about",
  },
];
