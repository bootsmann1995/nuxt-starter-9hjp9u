<template>
	<footer v-if="footer" class="footer">
		<section v-if="footer.trustpilot && footer.trustpilot.enableBanner" class="main-grid">
			<div class="row">
				<div class="col-12">
					<div class="footer__trustpilot">
						<div class="p-relative w-100">
							<h2 class="footer__trustpilot-headline headline-4">
								{{ footer.trustpilot.headline }}
							</h2>
						</div>

						<div
							class="trustpilot-widget"
							data-locale="da-DK"
							data-template-id="53aa8912dec7e10d38f59f36"
							data-businessunit-id="46a1659f000064000500652c"
							data-style-height="140px"
							data-style-width="100%"
							data-theme="light"
							data-stars="1,2,3,4,5"
							data-review-languages="da"
						>
							<a
								href="https://dk.trustpilot.com/review/www.autohuset-vestergaard.dk"
								target="_blank"
								rel="noopener"
								>Trustpilot</a
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="footer__banner l-pt-l l-pb-2l c-pt-3l-m c-mb-xxs-m">
			<div class="main-grid">
				<div class="row">
					<div class="footer__banner-wrapper col-12 flex-center-center flex-vertical-direction h-100">
						<div
							class="footer__banner-header c-mb-2xl c-mb-2l-m flex-center-center flex-vertical-direction"
						>
							<h2 v-if="footer.blueBox.headline" class="headline-3 c-mt-reset c-mb-2l c-mb-l-m">
								{{ footer.blueBox.headline }}
							</h2>
							<p v-if="footer.blueBox.subHeadline" class="sub-menu-link-mobile--small c-my-reset">
								{{ footer.blueBox.subHeadline }}
							</p>
						</div>

						<div class="footer__banner-contact flex-wrap c-pl-reset-m flex-space-between">
							<FooterContactButton
								v-for="(item, index) in footer.blueBox.links"
								:key="index"
								:item="item"
								@trigger-modal="openModal()"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-grid">
			<div class="row">
				<div class="footer__legal-section col-12 l-mb-2l">
					<div class="footer__legal-section-wrapper w-100 flex-wrap c-py-4l">
						<h3 v-if="footer.sections[0]" class="footer-links c-my-reset">
							{{ footer.sections[0].text }}
						</h3>
						<NuxtLink
							v-for="(item, index) in footer.sections[0].links"
							:key="index"
							class="flex-vertical-center footer__legal-link basic-link-animation footer-links"
							:to="item.url"
						>
							<span> {{ item.text }} </span>
						</NuxtLink>
					</div>
					<div class="border-bottom border-bottom--gray col-12" data-v-546a4f9a=""></div>
				</div>

				<div v-if="footer.sections" class="footer__links-collection w-100 l-mb-2l">
					<div class="col-12">
						<div class="flex w-100">
							<FooterLinkCollection
								v-if="footer.sections[1]"
								class="c-mr-2xl"
								:item="footer.sections[1]"
							/>
							<FooterLinkCollection v-if="footer.sections[2]" :item="footer.sections[2]" />
							<div class="footer__divider"></div>
							<FooterLinkCollection
								v-if="footer.sections[3]"
								class="l-mr-3l"
								:item="footer.sections[3]"
							/>
							<FooterLinkCollection
								v-if="footer.sections[4]"
								class="c-mr-2xl"
								:item="footer.sections[4]"
							/>
							<FooterLinkCollection v-if="footer.sections[5]" :item="footer.sections[5]" />
							<div class="footer__divider"></div>
							<div>
								<span>Tilmeld nyhedsbrev og hold dig opdateret</span>
							</div>
						</div>
					</div>
				</div>

				<FooterAccordion v-if="footer.sections[0]" :item="footer.sections[0]" />
				<FooterAccordion v-for="(item, index) in footer.sections.slice(1, 5)" :key="index" :item="item" />
				<div>
					<span>Tilmeld nyhedsbrev og hold dig opdateret</span>
				</div>
			</div>
		</div>

		<div class="footer__some-section flex-vertical-center">
			<div class="main-grid">
				<div class="row">
					<div class="footer__some-wrapper c-mb-xs-m col-12 flex-space-between">
						<h3 v-if="footer.bottomBanner.disclaimer" class="footer-contact-text--small c-my-reset">
							{{ footer.bottomBanner.disclaimer }}
						</h3>
						<div v-if="footer.bottomBanner.soMeLinks" class="c-my-l-m">
							<NuxtLink
								v-for="(link, index) in footer.bottomBanner.soMeLinks"
								:key="index"
								:to="link.url"
								class="c-ml-l c-ml-reset-m c-mr-2xl-m footer-contact-text--small basic-link-animation"
							>
								<span> {{ link.text }} </span>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<teleport to="body">
			<SimpleModal v-if="showModal" @close-modal="showModal = false"> Her kommer en Jotform </SimpleModal>
		</teleport>
	</footer>
</template>
<script lang="ts" src="./theFooter.ts"></script>
<style lang="scss" src="./theFooter.scss"></style>
