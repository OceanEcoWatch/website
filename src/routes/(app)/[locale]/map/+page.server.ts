import type { PageServerLoad } from './$types';
import { testData } from './testData';

export const load: PageServerLoad = async ({}) => {
	//api call here in the future

	//const highestVal = getHighestPixelValue(testData);
	//console.log(highestVal);

	return {
		geoJson: { testData }
	};
};

function getHighestPixelValue(data: GeoJSON.FeatureCollection): number | null {
	let highestPixelValue: number | null = null;

	for (const feature of data.features) {
		const pixelValue = feature.properties?.pixel_value;

		if (typeof pixelValue === 'number') {
			if (highestPixelValue === null || pixelValue > highestPixelValue) {
				highestPixelValue = pixelValue;
			}
		}
	}

	return highestPixelValue;
}
