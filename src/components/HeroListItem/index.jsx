import {
	Avatar, ListItem, Size,
} from '@lumx/react';
import { Link } from "react-router-dom";
import React from 'react';

const HeroListItem = ({ person }) => (
	<ListItem itempadding={Size.big}>
		<div className='hero-item-container'>
			<Avatar className="avatar" image={`${person.thumbnail.path}.${person.thumbnail.extension}`} alt={person.name} size={Size.xl} />
			<div className='description'>
				<h2 className='name'>{person.name}</h2>
				<p>{person.description}</p>
				<Link className='btn' to={`/details/${person.id}`}>See Details</Link>
			</div>
		</div>
	</ListItem>
);

export default HeroListItem;
