import { React } from "react";
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

export const KanbanCard = (props) => {
  const { estimatedArrivingDate, orderName, company } = props.card;
  const { isLoggedIn } = useUserInformationContext();

  return (
    <Card sx={{ ...cardStyle, width: !isLoggedIn ? "240px" : 350 }}>
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
  );
};
