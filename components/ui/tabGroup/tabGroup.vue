<template>
	<div class="tabs" :class="{ 'l-mt-s-m c-pt-3l-m border-top border-top--mischka-20': isButtonStyling }">
		<ul
			v-if="tabs"
			class="tabs__list c-mb-2l-m"
			:class="[isButtonStyling ? ['tabs__list--with-buttons', 'c-mb-l'] : 'c-mb-4l']"
		>
			<li
				v-for="tab in tabs"
				:key="tab"
				class="tabs__list-item"
				:class="[{ 'is-active': activeTab === tab }, { 'tabs__list-item--with-buttons': isButtonStyling }]"
			>
				<button
					type="button"
					:class="[
						{ tabs__button: !isButtonStyling },
						{ 'btn-secondary c-px-reset': isButtonStyling && activeTab !== tab },
						{ 'btn-primary c-px-reset': isButtonStyling && activeTab === tab },
					]"
					@click="changeTab(tab)"
				>
					{{ tab }}
				</button>
			</li>
		</ul>
		<div ref="tabPanels" class="tabs__panels">
			<slot></slot>
		</div>
	</div>
</template>

<script src="./tabGroup.ts"></script>
<style lang="scss" src="./tabGroup.scss"></style>
