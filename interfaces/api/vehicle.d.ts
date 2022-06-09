export interface IVehicleEntity {
	name: string;
	brand: string;
	model: string;
	deparmentId: number;
	departmentName: string;
	export: boolean;
	reserved: boolean;
	energyRating: string;
	engineSizeDescription: string;
	equipmentLevelDescription: string;
	equipmentlist: string;
	fuelType: string;
	longDescription: string;
	transmissionType: string;
	typeName: string;
	adpUnitNumber: string;
	rawColor: string;
	color: string;
	acceleration?: number;
	fuelEfficiency?: number;
	modelYear?: number;
	totalWeight?: number;
	curbWeight?: number;
	horsePower: number;
	numberOfCylinders?: number;
	strokeVolume?: number;
	topSpeed?: number;
	electricityConsumption?: number;
	fuelTankCapacity?: number;
	kilometersDriven?: number;
	numberOfAirbags?: number;
	torque?: number;
	towingWeightWithBrakes?: number;
	towingWeightWithoutBrakes?: number;
	lastFeedUpdate: Date;
	firstRegistrationDate?: Date;
	usages: string[];
	statusTypes: string[];
	vimeoIds: string[];
	imageUrls: string[];
	imageIds: number[];
	price?: number;
	leasingMonthlyPayment?: number;
	semiAnnualVehicleExciseDuty?: number;
	retailShippingPrice?: number;
	id: number;
}

export interface IVehicleSlug {
	id: number;
	brand: string;
	model: string;
}
