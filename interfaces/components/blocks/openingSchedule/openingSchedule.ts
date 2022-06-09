export interface IOpeningSchedule {
	openingSchedule: {
		headline: string;
		schedule: IOpeningSchedule[];
	};
}

export interface IOpeningSchedule {
	headline: string;
	monday: { value: string };
	tuesday: { value: string };
	wednesday: { value: string };
	thursday: { value: string };
	friday: { value: string };
	saturday: { value: string };
	sunday: { value: string };
}
