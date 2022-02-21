import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { get } from '../../api'
import { Message, Kind } from '@lumx/react';
import Hero from '../../components/Hero';

const Details = () => {
	const [hero, setHero] = useState(null);
	const [error, setError] = useState();
	const params = useParams();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const requests = [
					get(`/characters/${params.id}`),
					get(`/characters/${params.id}/comics`, { limit: 10 }),
					get(`/characters/${params.id}/events`)
				];
				const responses = await Promise.all(requests);
				setHero({ ...responses[0].results[0], comics: responses[1].results, events: responses[2].results });
			} catch (error) {
				setError(error);
			}
		};
		fetchData()
	}, []);

	
	return (
	<>
			<section className="lumx-spacing-padding-horizontal-huge">
				{error ? <Message kind={Kind.error} hasBackground>
					<p>
						{error.message}
					</p>
				</Message> : null}
				<Link to="/">Go back to results</Link>
				{hero ? <Hero hero={hero}></Hero> : null}
		</section>
	</>
)};

export default Details;
