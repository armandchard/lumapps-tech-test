import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import PropTypes from 'prop-types';
import SearchField from '../SearchField';

const Header = ({ value, setValue }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox className='justify-between' hAlign={Alignment.center}>
			<FlexBox vAlign={Alignment.left}><img src={"../../logo.png"} alt="logo" /></FlexBox>
			<FlexBox vAlign={Alignment.right}>
				<SearchField value={value} setValue={setValue} />
			</FlexBox>
		</FlexBox>
	</header>
);

Header.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Header;
