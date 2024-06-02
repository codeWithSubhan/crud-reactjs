import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '400px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const btnStyle = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'end',
};

export const style2 = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
};

export const style3 = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  marginBottom: '25px',
};

export const style4 = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '13px',
};

function Modals({
  heading,
  text,
  children,
  open,
  onClose,
  style,
  customeStyle,
  isBottomSpace = true,
}) {
  let textMargin = heading ? { margin: '16px 0' } : { marginBottom: '16px' };
  textMargin = !isBottomSpace
    ? { marginTop: '16px', marginBottom: '5px' }
    : textMargin;
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={customeStyle || style1}>
        {heading && <h2 className="modal_heading">{heading}</h2>}
        {text && <div style={textMargin}>{text}</div>}
        <div style={style || btnStyle}>{children}</div>
      </Box>
    </Modal>
  );
}

export default Modals;
