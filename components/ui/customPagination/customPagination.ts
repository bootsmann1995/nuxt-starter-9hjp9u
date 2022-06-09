import { useOffsetPagination } from "@vueuse/core";

export default defineNuxtComponent({
	props: {
		total: {
			type: Number,
			default: 0,
		},
		page: {
			type: Number,
			default: 1,
		},
		pageSize: {
			type: Number,
			default: 10,
		},
	},
	emits: ["page-changed"],
	setup(props, { emit }) {
		const { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next } = useOffsetPagination({
			total: props.total,
			page: props.page,
			pageSize: props.pageSize,
			onPageChange: fetchData,
			onPageSizeChange: fetchData,
		});

		function fetchData({ currentPage }: { currentPage: number; currentPageSize: number }) {
			emit("page-changed", currentPage);
		}

		function showPaginationDecider(item, currentPage, pageCount) {
			let minusDif = 3;
			let plusDif = 3;
			if (currentPage - minusDif < 0) {
				plusDif = plusDif + Math.abs(currentPage - minusDif);
			}
			if (plusDif + currentPage > pageCount) {
				minusDif = 3 + (plusDif + currentPage - pageCount);
			}
			if ((item > currentPage - minusDif && item < currentPage + plusDif) || item === 1 || item === pageCount) {
				return true;
			}
		}

		return { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage, prev, next, showPaginationDecider };
	},
});
