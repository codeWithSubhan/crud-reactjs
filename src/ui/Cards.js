import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreIcon from './MoreIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cards({ item, data, setreReder, setIsSearch }) {
  const [isMoreModal, setIsMoreModal] = useState(false);
  const navigate = useNavigate();
  function handleImageClick() {
    navigate(`/userinfo/${item.id}`);
  }
  return (
    <Card sx={{ maxWidth: 200, width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img
              src={item.image}
              alt=""
              style={{
                width: '100%',
                objectFit: 'cover',
                height: ' 100%',
              }}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={() => setIsMoreModal(true)} />
          </IconButton>
        }
        title={item.name}
        subheader={new Date(item.id).toLocaleTimeString()}
        style={{ textTransform: 'capitalize' }}
      />
      {isMoreModal && (
        <MoreIcon
          setIsMoreModal={setIsMoreModal}
          item={item}
          data={data}
          setreReder={setreReder}
          setIsSearch={setIsSearch}
        />
      )}
      <CardMedia
        component="img"
        height="150"
        image={item.image}
        style={{ cursor: 'pointer' }}
        alt="Paella dish"
        onClick={handleImageClick}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textTransform: 'capitalize' }}
        >
          <b>Location:</b> {item.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Price:</b> ${item.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
