import { React, useContext } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { CardButtons } from "./cardButtons";
import { CardTitle } from "./cardTitle";
import {
  cardActionsStyle,
  cardContentStyle,
  cardStyle,
} from "./kanbanCardStyle";
import { CardActions } from "@mui/material";
import { CompanyLogo } from "../../common/companyLogo/companyLogo";
import { useUserInformationContext } from "../../../utlis/hooks/userInformationContext/userInformationContext";
import { FormContext } from "../../../containers/forms/formContext/formContext";
import { useIsPhoneContext } from "../../../utlis/hooks/phone/isPhoneContext";

export const KanbanCard = (props) => {
  const { estimatedArrivingDate, orderName, company } = props.card;
  const { isLoggedIn } = useUserInformationContext();
  const { isIpad, isPhone, screenWidth } = useIsPhoneContext();
  const { loadForm, openDetailedForm, setIsNewForm } = useContext(FormContext);

  const onOpenDetailedForm = () => {
    if (isLoggedIn) {
      loadForm(props.card);
      openDetailedForm();
      setIsNewForm(false);
    }
  };

  return (
    <Box
      sx={{ cursor: "grab", ":hover": { cursor: "pointer" } }}
      onClick={onOpenDetailedForm}
    >
      <Card
        sx={{
          ...cardStyle,
          width:
            !isLoggedIn || (isIpad && !isPhone)
              ? "240px"
              : isPhone
              ? `${0.6 * screenWidth}px`
              : 350,
          maxWidth: isPhone ? "240px" : 350,
        }}
      >
        <CardContent>
          <Box sx={cardContentStyle}>
            <CardTitle date={estimatedArrivingDate} cardName={orderName} />
            <CompanyLogo shopName={company} />
          </Box>
        </CardContent>

        <CardActions sx={cardActionsStyle}>
          <CardButtons card={props.card} />
        </CardActions>
      </Card>
    </Box>
  );
};
