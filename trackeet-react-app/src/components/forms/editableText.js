import { EditText } from "react-edit-text";
import React from "react";
import { TITLE_H5, TITLE_H6 } from "../../assets/styles/styles";
import { FONT_FAMILY } from "../../assets/fonts/font";
import "./editableText.scss";

export const EditableText = (props) => {
  const titleSize = props.titleSize === "h6" ? TITLE_H6 : TITLE_H5;
  return (
    <React.Fragment>
      <EditText
        name="textbox"
        rows={1}
        className={"editText"}
        defaultValue={"Order Title"}
        placeholder={"Order Title"}
        readonly={props.readonly}
        style={{
          ...titleSize,
          fontFamily: FONT_FAMILY,
          width: props.width,
        }}
        value={props.value}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};
