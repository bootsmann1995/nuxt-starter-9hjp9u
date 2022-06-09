import { RuntimeConfig } from "@nuxt/schema";
import { IVehicleEntity, IVehicleSlug } from "~~/interfaces/api/vehicle";
import AbstractResource from "./abstractResource";

export class VehicleClient extends AbstractResource {
	constructor(config: RuntimeConfig | Record<string, string>) {
		super(config.API_MANAGEMENT_ENDPOINT + "used-vehicles", {
			"Ocp-Apim-Subscription-Key": config.API_MANAGEMENT_SUBSCRIPTION_KEY,
		});
	}

	public async GetVehicleByIdAsync(id: number | string) {
		return await this.getAsync<IVehicleEntity>(`/single/${id}`);
	}

	public async GetAllVehiclesAsync() {
		return await this.getAsync<IVehicleEntity[]>(`/all`);
	}

	public async GetAllVehicleSlugsAsync() {
		return await this.getAsync<IVehicleSlug[]>(`/slugs`);
	}
}
