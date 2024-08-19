import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAppStore } from "../../stores/AppStore";
import { SidebarMenuItems } from "./SidebarMenuItems";

export const Sidebar = () => {
  const { isSidebarOpen, setSidebar } = useAppStore();

  return (
    <Drawer
      PaperProps={{
        sx: {
          width: 300,
        },
      }}
      open={isSidebarOpen}
      onClose={() => setSidebar(false)}
    >
      <List>
        {SidebarMenuItems.map((item) => (
          <ListItemButton key={item.id} component="a" href={item.to}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
