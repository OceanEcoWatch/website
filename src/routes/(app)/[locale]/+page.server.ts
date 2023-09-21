import type { PageServerLoad } from './$types';
import { testData } from './map/testData';

export const load: PageServerLoad = async ({}) => {
	//api call here in the future
	return {
		geoJson: { testData }
	};
};
