// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useMediaQuery,
// } from "@mui/material";
// import { Link } from "react-router-dom"; // You can use this for navigation if needed
// import AssistantIcon from '@mui/icons-material/Assistant';
// const SidebarOption = ({ name, href, icon }) => {
//   return (
//     <ListItem button component={Link} to={href}>
//       <ListItemIcon>{icon}</ListItemIcon>
//       <ListItemText primary={name} />
//     </ListItem>
//   );
// };

// const Sidebar = () => {
//   const isSmallDevice = useMediaQuery("(max-width: 600px)");

//   return (
//     <Drawer variant="permanent" anchor="left">
//       <List>
//         <SidebarOption
//           name="Sorting Algo"
//           href="/sorting"
//           icon={<AssistantIcon />}
//         />
//         <SidebarOption
//           name="Searching Algo"
//           href="/searching"
//           icon={<AssistantIcon />}
//         />
//         <SidebarOption
//           name="Graph Algo"
//           href="/graph"
//           icon={<AssistantIcon />}
//         />
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;
