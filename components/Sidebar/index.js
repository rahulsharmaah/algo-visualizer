// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
// import { Link } from 'react-router-dom'; // You can use this for navigation if needed
// import AssistantIcon from '@mui/icons-material/Assistant';
// import styled from 'styled-components';

// const SidebarContainer = styled(Drawer)`
//   && {
//     width: 250px;
//     transition: width 0.3s ease-in-out;
//     background-color: #333;
//     color: white;

//     @media (max-width: 600px) {
//       width: 70px;
//     }
//   }
// `;

// const SidebarOption = styled(ListItem)`
//   && {
//     color: white;
//     &:hover {
//       background-color: #555;
//     }
//   }
// `;

// const Sidebar = () => {
//   const isSmallDevice = useMediaQuery('(max-width: 600px)');

//   return (
//     <SidebarContainer variant="permanent" anchor="left">
//       <List>
//         <SidebarOption  component={Link} href="/sorting">
//           <ListItemIcon>
//             <AssistantIcon />
//           </ListItemIcon>
//           <ListItemText primary="Sorting Algo" />
//         </SidebarOption>
//         <SidebarOption  component={Link} href="/searching">
//           <ListItemIcon>
//             <AssistantIcon />
//           </ListItemIcon>
//           <ListItemText primary="Searching Algo" />
//         </SidebarOption>
//         <SidebarOption  component={Link} href="/graph">
//           <ListItemIcon>
//             <AssistantIcon />
//           </ListItemIcon>
//           <ListItemText primary="Graph Algo" />
//         </SidebarOption>
//       </List>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;
