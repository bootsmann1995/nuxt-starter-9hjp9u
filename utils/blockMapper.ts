import * as mapper from "~/utils/mapper";
import { ICmsBlock5050 } from "~~/interfaces/cms/blocks/block5050";
import { ICmsBlock5050Highlight } from "~~/interfaces/cms/blocks/block5050Highlight";
import { ICmsAccordionBlock } from "~~/interfaces/cms/blocks/blockAccordion";
import { ICmsBlockCta } from "~~/interfaces/cms/blocks/blockCta";
import { ICmsBlockFullWidthTextArea } from "~~/interfaces/cms/blocks/blockFullWidthTextArea";
import { ICmsBlockFullWidthVideoArea } from "~~/interfaces/cms/blocks/blockFullWidthVideoArea";
import { ICmsBlockLeasingCars } from "~~/interfaces/cms/blocks/blockLeasingCars";
import { ICmsBlockLogoBanner } from "~~/interfaces/cms/blocks/blockLogoBanner";
import { ICmsBlockNewCars } from "~~/interfaces/cms/blocks/blockNewCars";
import { ICmsBlockPromoSlider, ICmsPromotion } from "~~/interfaces/cms/blocks/blockPromoSlider";
import { ICmsBlockPromotion } from "~~/interfaces/cms/blocks/blockPromotion";
import { ICmsblockUspList } from "~~/interfaces/cms/blocks/blockUspList";
import { ICmsId, ICmsPage } from "~~/interfaces/cms/globals";
import { IBlockRouter } from "~~/interfaces/components/blocks/blockRouter/blockRouter";
import { ICtaBanner } from "~~/interfaces/components/blocks/ctaBanner/ctaBanner";
import { IHighlighBlock } from "~~/interfaces/components/blocks/highlightBlock/hightlightBlock";
import { IImageLinkListBlock } from "~~/interfaces/components/blocks/imageLinkList/imageLinkList";
import { IMediaBlock } from "~~/interfaces/components/blocks/mediaBlock/mediaBlock";
import { INewCarBlock } from "~~/interfaces/components/blocks/newCarBlock/newCarBlock";
import { IPromoBox } from "~~/interfaces/components/blocks/promoBox/promoBox";
import { IPromoArticle, IPromoSlider } from "~~/interfaces/components/blocks/promoSlider/promoSlider";
import { ITextAreaBlock } from "~~/interfaces/components/blocks/textAreaBlock/textAreaBlock";
import { ITwoColumnBlock } from "~~/interfaces/components/blocks/twoColumnBlock/twoColumnBlock";
import { IUspList } from "~~/interfaces/components/blocks/uspList/uspList";
import { IAccordionList } from "~~/interfaces/components/shared/accordion/accordionList";
import { IGraphQLCollection } from "~~/interfaces/graphQL";
import { ICar } from "~~/interfaces/pages/brandPage";

export function mapBlocks(blocks: IGraphQLCollection<ICmsId>, pages: ICmsPage[]): IBlockRouter[] {
	if (blocks.items.length < 0) {
		return null;
	}
	const mappedBlocks: IBlockRouter[] = [];
	blocks.items.forEach((block) => {
		switch (block.typename) {
			case "Block5050": {
				const tempBlock = block as ICmsBlock5050;
				mappedBlocks.push({
					typename: block.typename + tempBlock.design,
					data: mapBlock5050(block as ICmsBlock5050, pages),
				});
				break;
			}
			case "Block5050Highlight": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlock5050Highlight(block as ICmsBlock5050Highlight, pages),
				});
				break;
			}
			case "BlockCta": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlockCta(block as ICmsBlockCta, pages),
				});
				break;
			}
			case "BlockFullWidthVideoArea": {
				mappedBlocks.push(mapBlockFullWidthVideoArea(block as ICmsBlockFullWidthVideoArea));
				break;
			}
			case "BlockFullWidthTextArea": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlockFullWidthTextArea(block as ICmsBlockFullWidthTextArea),
				});
				break;
			}
			case "BlockLogoBanner": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlockLogoBanner(block as ICmsBlockLogoBanner, pages),
				});
				break;
			}
			case "BlockPromotion": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlockPromotion(block as ICmsBlockPromotion, pages),
				});
				break;
			}
			case "BlockAccordion": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapAccordionBlock(block as ICmsAccordionBlock),
				});
				break;
			}
			case "BlockUspList": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlockUspList(block as ICmsblockUspList),
				});
				break;
			}
			case "BlockPromoSlider": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapPromoSlider(block as ICmsBlockPromoSlider, pages),
				});
				break;
			}
			case "BlockNewCars": {
				mappedBlocks.push({
					typename: block.typename,
					data: mapBlockNewCars(block as ICmsBlockNewCars, pages),
				});
				break;
			}
			case "BlockLeasingCars": {
				// mappedBlocks.push({
				// 	typename: block.typename,
				// 	data: mapBlockLeasingCars(block as ICmsBlockLeasingCars, pages),
				// });
				break;
			}
		}
	});
	return mappedBlocks;
}

function mapBlockNewCars(block: ICmsBlockNewCars, pages): INewCarBlock {
	const mappedBlock: INewCarBlock = {
		items: [],
	};

	//fetch data from pim based on pimId;
	if (block.carsCollection) {
		block.carsCollection.items.forEach((car) => {
			const mappedCar: ICar = {
				description: car.shortDescription,
				headline: car.nodeName,
				//comes from pim
				image: null,
				price: "Mangler",
				//
				link: mapper.getReferenceLink(car.sys.id, pages),
				tag: car.highligthedTag,
			};
			mappedBlock.items.push(mappedCar);
		});
	}

	return mappedBlock;
}

//missing component
function mapBlockLeasingCars(block: ICmsBlockLeasingCars, pages): INewCarBlock {
	const mappedBlock: INewCarBlock = {
		items: [],
	};

	//fetch data from pim based on pimId;
	if (block.leasingCarsCollection) {
		block.leasingCarsCollection.items.forEach((car) => {
			const mappedCar: ICar = {
				description: car.shortDescription,
				headline: car.nodeName,
				//comes from pim
				image: null,
				price: "Mangler",
				//
				link: mapper.getReferenceLink(car.sys.id, pages),
				tag: car.highligthedTag,
			};
			mappedBlock.items.push(mappedCar);
		});
	}

	return mappedBlock;
}

function mapBlock5050(block: ICmsBlock5050, pages: ICmsPage[]): ITwoColumnBlock {
	const mappedBlock: ITwoColumnBlock = {
		contentBlock: {
			headline: block.headline,
			tag: block.tagline,
			text: block.text.json,
			primaryLink: mapper.mapCtaBtn(block.cta, pages),
		},
		image: null,
		reverse: block.rightOrLeft === "right" ? false : true,
		video: null,
		design: block.design,
		typename: block.typename,
	};

	if (block.youtubeId) {
		mappedBlock.video = {
			id: block.youtubeId,
			placeholder: mapper.mapMediaItem(block.image),
		};
	} else {
		mappedBlock.image = mapper.mapMediaItem(block.image);
	}

	return mappedBlock;
}

function mapBlock5050Highlight(block: ICmsBlock5050Highlight, pages: ICmsPage[]): IHighlighBlock {
	const mappedBlock = {
		highlightContent: block.highlightedText,
		detailedContent: {
			ctaLink: mapper.mapCtaBtn(block.cta, pages),
			description: block.text?.json,
		},
		typename: block.typename,
	} as IHighlighBlock;

	return mappedBlock;
}

function mapBlockCta(block: ICmsBlockCta, pages: ICmsPage[]): ICtaBanner {
	const mappedBlock = {
		highlightedText: block.headline,
		header: block.subHeadline,
		cta: mapper.mapCtaBtn(block.cta, pages),
		typename: block.typename,
	} as ICtaBanner;
	return mappedBlock;
}

function mapBlockFullWidthVideoArea(block: ICmsBlockFullWidthVideoArea): IBlockRouter {
	const obj = {
		data: null,
		typename: null,
	} as IBlockRouter;

	const mappedBlock = {
		image: null,
		video: null,
		typename: block.typename,
	} as IMediaBlock;

	if (block.youtubeId) {
		mappedBlock.video = {
			id: block.youtubeId,
			placeholder: mapper.mapMediaItem(block.image),
		};
		obj.typename = block.typename + "Video";
	} else {
		mappedBlock.image = mapper.mapMediaItem(block.image);
		obj.typename = block.typename + "Image";
	}

	obj.data = mappedBlock;
	return obj;
}

function mapBlockUspList(block: ICmsblockUspList): IUspList {
	const mappedBlock = {
		headline: block.headline,
		usps: block.uspList,
		image: null,
		video: null,
	} as IUspList;

	if (block.youtubeId) {
		mappedBlock.video = {
			id: block.youtubeId,
			placeholder: mapper.mapMediaItem(block.image),
		};
	} else {
		mappedBlock.image = mapper.mapMediaItem(block.image);
	}

	return mappedBlock;
}

function mapBlockFullWidthTextArea(block: ICmsBlockFullWidthTextArea): ITextAreaBlock {
	const mappedBlock = {
		text: block.text?.json,
		typename: block.typename,
	} as ITextAreaBlock;

	return mappedBlock;
}

function mapBlockLogoBanner(block: ICmsBlockLogoBanner, pages: ICmsPage[]): IImageLinkListBlock {
	const mappedBlock = {
		imageLinks: [],
		typename: block.typename,
	} as IImageLinkListBlock;

	block.logoLinksCollection.items.forEach((logoLink) => {
		mappedBlock.imageLinks.push({
			image: mapper.mapMediaItem(logoLink.image),
			text: null,
			link: mapper.mapLink(logoLink.link, pages),
		});
	});
	return mappedBlock;
}

function mapPromoSlider(block: ICmsBlockPromoSlider, pages: ICmsPage[]): IPromoSlider {
	const mappedBlock = {
		header: block.headline,
		link: mapper.mapLink(block.link, pages),
		items: null,
	} as IPromoSlider;

	if (block.promotionsCollection && block.promotionsCollection.items.length > 0) {
		mappedBlock.items = mapPromotions(block.promotionsCollection.items, pages);
	}

	return mappedBlock;
}

function mapPromotions(promos: ICmsPromotion[], pages: ICmsPage[]): IPromoArticle[] {
	const promotions: IPromoArticle[] = [];

	promos.forEach((promo) => {
		const mappedPromo = {
			headline: promo.headline,
			image: mapper.mapMediaItem(promo.image),
			link: mapper.getReferenceLink(promo.sys.id, pages),
		} as IPromoArticle;

		promotions.push(mappedPromo);
	});

	return promotions;
}

function mapBlockPromotion(block: ICmsBlockPromotion, pages: ICmsPage[]): IPromoBox {
	const mappedBlock = {
		headline: block.headline,
		tag: block.mainHeadline,
		text: block.subHeadline,
		image: mapper.mapMediaItem(block.image),
		reverse: block.rightOrLeft === "right" ? false : true,
		primaryLink: mapper.mapCtaBtn(block.primaryLink, pages),
		secondaryLink: mapper.mapCtaBtn(block.secondaryLink, pages),
	} as IPromoBox;

	return mappedBlock;
}
function mapAccordionBlock(block: ICmsAccordionBlock): IAccordionList {
	const mappedBlock = {
		title: block.headline,
		items: [],
	} as IAccordionList;

	if (block.accordionItemsCollection && block.accordionItemsCollection.items.length > 0) {
		block.accordionItemsCollection.items.forEach((item) => {
			mappedBlock.items.push({
				id: item.sys.id,
				text: item.text?.json,
				title: item.headline,
			});
		});
	}

	return mappedBlock;
}
