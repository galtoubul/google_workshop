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
import { CompanyLogo } from "../../companyLogo/companyLogo";

export const KanbanCard = (props) => {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Box sx={cardContentStyle}>
          <CardTitle date={props.date} cardName={props.cardName} />
          <CompanyLogo shopName={props.shopName} />
        </Box>
      </CardContent>

      <CardActions sx={cardActionsStyle}>
        <CardButtons />
      </CardActions>
    </Card>
  );
};
