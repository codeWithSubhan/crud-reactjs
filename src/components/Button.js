import { Button as ButtonComp } from '@mui/material';

function Button({
  variant,
  children,
  onClick,
  size,
  style,
  disabled,
  color,
  className,
  fullWidth,
  type,
}) {
  return (
    <ButtonComp
      variant={variant || 'contained'}
      size={size}
      style={style || {}}
      onClick={onClick}
      disabled={disabled || false}
      color={color || 'primary'}
      className={className || ''}
      fullWidth={fullWidth}
      type={type}
    >
      {children}
    </ButtonComp>
  );
}

export default Button;
