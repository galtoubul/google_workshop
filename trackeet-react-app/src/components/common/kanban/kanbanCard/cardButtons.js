import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { BiDotsVerticalRounded, BiPencil } from 'react-icons/bi';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { React } from 'react';

export const CardButtons = (props) => {
  return (
    <>
      <Box>
        <IconButton>
          <BiPencil />
        </IconButton>

        <IconButton>
          <AiOutlineArrowsAlt />
        </IconButton>
      </Box>

      <IconButton>
        <BiDotsVerticalRounded />
      </IconButton>
    </>
  );
};
