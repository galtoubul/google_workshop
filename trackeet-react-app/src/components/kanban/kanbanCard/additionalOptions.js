import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import { Menu } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled, alpha } from "@mui/material/styles";
import { BLACK } from "../../../assets/colors/colorsPalette";
import { useKanbanContext } from "../../../utlis/hooks/kanbanContext/kanbanContext";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 50,
    color: BLACK,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const AdditionalOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { deleteCard } = useKanbanContext();

  const onEditClick = () => {
    setIsOpen(false);
    setAnchorEl(null);
    props.openDetailedForm();
  };

  const onOpen = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
    setIsOpen(true);
  };

  const onDeleteClick = (e) => {
    onClose(e);
    deleteCard(props.card);
  };

  const onClose = (e) => {
    setIsOpen(false);
    setAnchorEl(null);
    e.stopPropagation();
  };

  return (
    <>
      <IconButton onClick={onOpen}>
        <MoreVert />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={onClose}
      >
        <MenuItem onClick={onEditClick} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={onDeleteClick} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>
    </>
  );
};
