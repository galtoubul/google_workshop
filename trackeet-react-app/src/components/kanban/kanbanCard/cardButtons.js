import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { BiTrash } from "react-icons/bi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { React, useContext } from "react";
import { FormContext } from "../../../containers/forms/formContext/formContext";
import { useKanbanContext } from "../../../utlis/hooks/kanbanContext/kanbanContext";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";

export const CardButtons = (props) => {
  const { loadForm, openDetailedForm, setIsNewForm } = useContext(FormContext);
  const { deleteCard } = useKanbanContext();
  const { isLoggedIn } = useUserInformationContext();

  return (
    <>
      <Box>
        <IconButton
          onClick={() => {
            if (isLoggedIn) {
              loadForm(props.card);
              openDetailedForm();
              setIsNewForm(false);
            }
          }}
        >
          <AiOutlineArrowsAlt />
        </IconButton>
      </Box>

      <IconButton onClick={() => deleteCard(props.card)}>
        <BiTrash />
      </IconButton>
    </>
  );
};
