import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useState } from "react";

const InputAutocomplete = (props) => {
  const [pickerItems, setPickerItems] = useState(props.list);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <CUIAutoComplete
      hideToggleButton="True"
      placeholder={props.placeholder}
      onCreateItem={handleCreateItem}
      items={pickerItems}
      selectedItems={selectedItems}
      onSelectedItemsChange={(changes) =>
        handleSelectedItemsChange(changes.selectedItems)
      }
    />
  );
};

export default InputAutocomplete;
