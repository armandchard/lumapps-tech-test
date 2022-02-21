import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = ({ value, setValue }) => {
  const [search, setSearch] = useState(value);

  const onValueChanged = (e) => {
    if (e.key === 'Enter') {
      setValue(e.target.value);
    }
  };

  // Clear button doesn't work I don't know why following the doc
  return <TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} value={search} onChange={setSearch} onKeyPress={onValueChanged} />;
};
export default SearchField;
