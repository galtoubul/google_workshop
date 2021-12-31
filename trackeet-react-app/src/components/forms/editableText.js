import { EditText } from "react-edit-text";
import React from "react";
import { TITLE_H5 } from "../../assets/styles/styles";
import { FONT_FAMILY } from "../../assets/fonts/font";

export const EditableText = (props) => {
  return (
    <React.Fragment>
      <EditText
        name="textbox"
        defaultValue={"Order Title"}
        placeholder={"Order Title"}
        style={{ ...TITLE_H5, fontFamily: FONT_FAMILY }}
        value={props.value}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};
