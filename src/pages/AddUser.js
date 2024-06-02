import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '../components/Button';
import BrowseFile from '../ui/BrowseFile';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { setData, setEdit } from '../helper/localStorage';

const defaultTheme = createTheme();
const fields = [
  {
    margin: 'normal',
    label: 'Name',
    name: 'name',
    autoFocus: true,
  },
  {
    margin: 'normal',
    label: 'Price',
    name: 'price',
    type: 'number',
  },
  {
    margin: 'normal',
    label: 'Address',
    name: 'address',
  },
];

export default function AddUser({
  mt,
  setIsAddUserModal,
  item,
  data,
  setreReder,
  setIsMoreModal,
  setIsSearch,
}) {
  const [uploadedImage, setuploadedImage] = useState(item?.image || '');
  const [userData, setUserData] = useState({
    name: item?.name || '',
    price: item?.price || '',
    address: item?.address || '',
  });

  useEffect(() => {
    setIsSearch(window.location.pathname === '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);

    if (
      !userData.name.trim() ||
      !userData.price.trim() ||
      !userData.address.trim() ||
      !uploadedImage
    )
      return toast.error('Please fill the form first!');

    const newObj = {
      ...userData,
      image: uploadedImage,
      id: item?.id || Date.now(),
    };

    if (item) {
      setEdit(newObj);
      setreReder((r) => !r);
      setIsMoreModal(false);
      toast.success('Form updated successfully!');
    } else {
      setData(newObj);
      setreReder((r) => !r);
      toast.success('Form submited successfully!');
    }

    setUserData({
      name: '',
      price: '',
      address: '',
    });
    setuploadedImage('');
    setIsAddUserModal?.(false);
  }

  function handleUploadImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setuploadedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  }

  function handleUserData(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="md">
        <CssBaseline />

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            marginTop: mt ? mt : 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ flex: '1' }}>
            <Typography
              component="h1"
              variant="h5"
              style={{ textAlign: 'center' }}
            >
              Add New User
            </Typography>
            {fields.map((item) => (
              <TextField
                margin="normal"
                required
                fullWidth
                id={item.name}
                label={item.label}
                name={item.name}
                autoComplete={item.name}
                autoFocus={item.autoFocus}
                type={item.type ? 'number' : 'text'}
                key={item.name}
                value={userData[item.name]}
                onChange={handleUserData}
              />
            ))}

            <Button type="submit" fullWidth={true}>
              Submit
            </Button>
          </div>

          <div style={{ flex: '1' }}>
            <div>
              {uploadedImage && (
                <img src={uploadedImage} alt="img" width="150" />
              )}
            </div>
            <BrowseFile onChange={handleUploadImage}>upload image</BrowseFile>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
