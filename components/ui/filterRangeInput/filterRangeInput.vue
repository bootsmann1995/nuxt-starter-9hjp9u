<template>
	<div class="c-pb-2l">
		<ais-range-input :attribute="filter">
			<template #default="{ currentRefinement, range, canRefine, refine }">
				<div class="flex-vertical-center range-input-wrapper">
					<div class="flex-vertical-center range-input flex-wrap">
						<label :for="filter + 'min'" class="range-input__label c-mb-3xs w-100 text-tagline d-block">
							Fra
						</label>
						<input
							class="range-input__item c-pl-xs text-p--small"
							type="number"
							:min="range.min"
							:max="range.max"
							:placeholder="range.min"
							:disabled="!canRefine"
							:value="formatMinValue(currentRefinement.min, range.min)"
							@input="
								refine({
									min: $event.currentTarget.value,
									max: formatMaxValue(currentRefinement.max, range.max),
								})
							"
						/>
						<span class="range-input__unit text-p--small">
							{{ filter === "price" || filter === "leasingMonthlyPayment" ? "kr." : null }}
							{{ filter === "kilometersDriven" ? "km" : null }}
							{{ filter === "fuelEfficiency" ? "km/l" : null }}
							{{ filter === "horsePower" ? "HK" : null }}
						</span>
					</div>
					<div class="flex-vertical-center range-input flex-wrap">
						<label :for="filter + 'max'" class="range-input__label c-mb-3xs w-100 text-tagline d-block">
							Til
						</label>
						<input
							class="range-input__item c-pl-xs text-p--small"
							type="number"
							:min="range.min"
							:max="range.max"
							:placeholder="range.max"
							:disabled="!canRefine"
							:value="formatMaxValue(currentRefinement.max, range.max)"
							@input="
								refine({
									min: formatMinValue(currentRefinement.min, range.min),
									max: $event.currentTarget.value,
								})
							"
						/>
						<span class="range-input__unit text-p--small">
							{{ filter === "price" || filter === "leasingMonthlyPayment" ? "kr." : null }}
							{{ filter === "kilometersDriven" ? "km" : null }}
							{{ filter === "fuelEfficiency" ? "km/l" : null }}
							{{ filter === "horsePower" ? "HK" : null }}
						</span>
					</div>
				</div>
			</template>
		</ais-range-input>
	</div>
</template>
<script lang="ts" src="./filterRangeInput.ts"></script>
<style lang="scss" src="./filterRangeInput.scss"></style>
