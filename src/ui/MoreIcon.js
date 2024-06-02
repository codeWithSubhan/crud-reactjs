import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';
import { setDelete, setDuplcate } from '../helper/localStorage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modals from '../components/Modal';
import AddUser from '../pages/AddUser';
const customeStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '900px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
export default function MoreIcon({
  setIsMoreModal,
  item,
  data,
  setreReder,
  setIsSearch,
}) {
  const [isAddUserModal, setIsAddUserModal] = useState(false);
  const navigate = useNavigate();

  const listItems = [
    {
      icon: <FileCopyIcon fontSize="small" />,
      text: 'Duplicate',
      handleClick: handleDuplicate,
    },
    {
      icon: <RemoveRedEyeIcon fontSize="small" />,
      text: 'View',
      handleClick: handleView,
    },
    {
      icon: <EditIcon fontSize="small" />,
      text: 'Edit',
      handleClick: handleEdit,
    },
    {
      icon: <DeleteIcon fontSize="small" />,
      text: 'Delete',
      handleClick: handleDelete,
    },
  ];

  function handleDuplicate() {
    setDuplcate(item);
    setreReder((r) => !r);
    setIsMoreModal(false);
  }

  function handleView() {
    navigate(`/userinfo/${item.id}`);
  }

  function handleEdit() {
    setIsAddUserModal(true);
  }

  function handleDelete() {
    setDelete(item);
    setreReder((r) => !r);
    setIsMoreModal(false);
  }

  return (
    <>
      <Paper sx={{ width: 200, maxWidth: '100%', position: 'absolute' }}>
        <MenuList>
          {listItems.map((item) => (
            <MenuItem onClick={item.handleClick} key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <CloseIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={() => setIsMoreModal(false)}>
              Close
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>

      <Modals
        open={isAddUserModal}
        onClose={() => {
          setIsMoreModal(false);
          setIsAddUserModal(false);
        }}
        customeStyle={customeStyle}
      >
        <AddUser
          mt="0"
          setIsAddUserModal={setIsAddUserModal}
          item={item}
          data={data}
          setreReder={setreReder}
          setIsMoreModal={setIsMoreModal}
          setIsSearch={setIsSearch}
        />
      </Modals>
    </>
  );
}
