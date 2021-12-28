import { Typography } from "@mui/material";
import MenuGroup from "./MenuGroup";
import menuItem from "menu-items";

const MenuList = () => {
  const items = menuItem.items.map((item) => {
    switch (item.type) {
      case "container":
        return <MenuGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{items}</>;
};

export default MenuList;
