import { React } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { AvatarCard } from '../avatarCard/avatarCard';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { BiPencil, BiDotsVerticalRounded } from 'react-icons/bi';
import { IconButton } from '@mui/material';

export const KanbanCard = (props) => {
  return (
    <Card sx={{ maxWidth: 290, margin: '8px' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography component="div" variant="h5">
              {props.cardName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {props.date}
            </Typography>
          </Box>
          <AvatarCard shopName={props.shopName} />
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <IconButton>
            <BiPencil></BiPencil>
          </IconButton>
          <IconButton>
            <AiOutlineArrowsAlt></AiOutlineArrowsAlt>
          </IconButton>
        </Box>

        <IconButton>
          <BiDotsVerticalRounded></BiDotsVerticalRounded>
        </IconButton>
      </CardActions>
    </Card>
  );
};
