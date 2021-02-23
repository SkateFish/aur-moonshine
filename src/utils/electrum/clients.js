class Clients {
	constructor() {
		this.coin = "auroracoin";
		this.mainClient = {
			auroracoin: false,
			canadaecoin: false,
			bitcoin: false,
			litecoin: false,
			bitcoinTestnet: false,
			litecoinTestnet: false
		};
		this.peer = {
			auroracoin: { port: 0, host: "", protocol: "" },
			canadaecoin: { port: 0, host: "", protocol: "" },
			bitcoin: { port: 0, host: "", protocol: "" },
			litecoin: { port: 0, host: "", protocol: "" },
			bitcoinTestnet: { port: 0, host: "", protocol: "" },
			litecoinTestnet: { port: 0, host: "", protocol: "" }
		};
		this.peers = {
			auroracoin: [],
			canadaecoin: [],
			bitcoin: [],
			litecoin: [],
			bitcoinTestnet: [],
			litecoinTestnet: []
		};
		this.subscribedAddresses = {
			bitcoin: [],
			litecoin: [],
			bitcoinTestnet: [],
			litecoinTestnet: []
		};
		this.subscribedHeaders = {
			bitcoin: false,
			litecoin: false,
			bitcoinTestnet: false,
			litecoinTestnet: false
		};
	}
	
	updateCoin(coin) {
		this.coin = coin;
	}
	
	updateMainClient(mainClient) {
		this.mainClient = mainClient;
	}
	
	updatePeer(peer) {
		this.peer = peer;
	}
	
}

module.exports = new Clients();
