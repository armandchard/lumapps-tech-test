import { Avatar, List, ListItem, Size } from '@lumx/react';
import React from 'react';
import * as dayjs from 'dayjs'

const Hero = ({ hero }) => {
	const onEventClick = (event) => {
		window.open(event.urls[0]?.url, '_blank'); 
	}

	const onComicClick = (comic) => {
		window.open(comic.urls[0]?.url, '_blank');
	}

	return (
		<div className='hero-container'>
			<div className='description'>
				<h2>{hero.name}</h2>
				<p>{hero.description}</p>
			</div>

			<div className='hero-avatar'>
				<img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
			</div>

			{ hero.events.length > 0 ? <div className='events-container'>
				<h2>Events</h2>
				<div className='events'>{hero.events.map(event => (
					<div className='event' key={event.id} onClick={() => onEventClick(event)}>
						<Avatar image={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={event.title} size={Size.xl}></Avatar>
						<h3>{event.title}</h3>
					</div>
				))}</div> 
			</div> : null}

			{ hero.comics.length > 0 ? <div className='comics'>
				<h2>Latest comics</h2>
				<List>{hero.comics.map(comic => (
					<ListItem size={Size.big} key={comic.id} className='comic' onClick={() => onComicClick(comic)}>
						<h4>{comic.title}</h4>
						<p>On sale: {dayjs(comic.dates.find(date => date.type === 'onsaleDate')?.date).format('DD/MM/YYYY')}</p>
						<p>Price: ${comic.prices[0]?.price}</p>
					</ListItem>
				))}</List> 
			</div> : null}
		</div>
	)
};

export default Hero;
