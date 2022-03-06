import { defineStore } from "pinia";

export const useBuyOrderStore = defineStore("main", {
	state: () => ({
		buyOrderList: [
			{
				name: "er",
				max_bid_price: 1200,
				data_package_type: "ert"
			},
			{
				name: "er2",
				max_bid_price: 8300,
				data_package_type: "2ert"
			},
			{
				name: "er3",
				max_bid_price: 2300,
				data_package_type: "er3t"
			}
		],
		selectedBuyOrder: null,
		status: null
	}),
	getters: {
		getBOL: state => state.buyOrderList
	},
	actions: {
		addBuyOrder() {
			this.buyOrderList = [
				...this.buyOrderList,
				{ name: "miss me?", max_bid_price: 9000, data_package_type: "money" }
			];
		},
		setSelectedBuyOrder() {
			this.selectedBuyOrder = {};
		},
		resetSelectedBuyOrder() {
			this.selectedBuyOrder = null;
		}
	}
});
