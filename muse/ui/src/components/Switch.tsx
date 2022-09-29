import { styled } from '@mui/material/styles';
import MuiSwitch from '@mui/material/Switch';

const SIZE = 20;

export const Switch = styled(MuiSwitch)(({ theme }) => ({
  'width': SIZE * 2 + 4,
  'height': SIZE + 4,
  'padding': 0,
  'display': 'flex',
  '& .MuiSwitch-switchBase': {
    'padding': 2,
    '&.Mui-checked': {
      'transform': `translateX(${SIZE}px)`,
      'color': '#FFF',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1FEFF1',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    background: 'linear-gradient(206.91deg, #792EE5 16.83%, #3EABB3 144.59%)',
    transition: theme.transitions.create(['width'], {
      duration: 150,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: (SIZE + 4) / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));