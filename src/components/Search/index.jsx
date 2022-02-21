import {
	List, Size, 
} from '@lumx/react';
import React from 'react';
import HeroListItem from '../HeroListItem';
import Pagination from '../Pagination';

const Search = ({ data, onPageChange }) => {
	return (
		<section className="lumx-spacing-padding-horizontal-huge">
			{data.count > 0 ? (
				<>
					<List itemPadding={Size.big}>
						{data.results.map((person) => (
							<HeroListItem person={person} key={person.id} />
						))}
					</List>
					<Pagination limit={data.limit} total={data.total} onPageChange={onPageChange}></Pagination>
				</>
			) : <div className="empty">No data to display</div>}

		</section>
	)
};

export default Search;
