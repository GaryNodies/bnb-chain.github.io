"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[844],{3905:function(t,e,a){a.d(e,{Zo:function(){return N},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},N=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,N=d(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,s=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(s,i(i({ref:e},N),{},{components:a})):n.createElement(s,i({ref:e},N))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11820:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return N},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],d={},o="Binance DEX Trading Specification",p={unversionedId:"trading-spec",id:"trading-spec",isDocsHomePage:!1,title:"Binance DEX Trading Specification",description:"Orders",source:"@site/docs/trading-spec.md",sourceDirName:".",slug:"/trading-spec",permalink:"/docs/trading-spec",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/trading-spec.md",tags:[],version:"current",frontMatter:{}},N=[{value:"Orders",id:"orders",children:[{value:"Order Lifecycle",id:"order-lifecycle",children:[],level:3},{value:"Order Expire",id:"order-expire",children:[],level:3}],level:2},{value:"Precision",id:"precision",children:[],level:2},{value:"Tick Size and Lot Size",id:"tick-size-and-lot-size",children:[],level:2},{value:"Fees",id:"fees",children:[{value:"Current Fees Table on Mainnet",id:"current-fees-table-on-mainnet",children:[],level:3},{value:"Mainnet Fees API",id:"mainnet-fees-api",children:[],level:3},{value:"Multi-send Fees",id:"multi-send-fees",children:[],level:3},{value:"Trading Fees",id:"trading-fees",children:[],level:3},{value:"Current Fees Table on Testnet",id:"current-fees-table-on-testnet",children:[],level:3},{value:"Testnet Fees API",id:"testnet-fees-api",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3}],level:2}],m={toc:N};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binance-dex-trading-specification"},"Binance DEX Trading Specification"),(0,l.kt)("h2",{id:"orders"},"Orders"),(0,l.kt)("p",null,"Orders are the requests for client to buy or sell tokens into other tokens on Binance DEX.\nIt is a standard type of Beacon Chain transaction. Orders are composed of the below parameters."),(0,l.kt)("ol",{start:0},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Symbol Pairs: the list pair the order wants to trade.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Order Type: Binance DEX only accept LIMIT orders, which is adhering to SEC definitions of LIMIT orders")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Price: price users would like to pay for the specified token quantity, presented as a float\nnumber of quote currency. This must be rounded by tick size. Internally it can be multiplied by 1e8(10^8) in order to store as an integer\nin the range of int64.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Quantity: number of tokens users want to buy or sell. That must be rounded by lot size. Internally it can be multiplied by\n1e8(10^8) in order to store as an integer in the range of int64.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Side: buy or sell")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Time: entry time of the order, which is the block number(height) the order gets booked in.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"TimeInForce:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GTE: Good Till Expire. Order would stay effective until expire time. Order may expire in the UTC midnight after more than 259, 200 blocks, which is 72 hours in term of blocking time."),(0,l.kt)("li",{parentName:"ul"},"IOC: Immediate or Cancel. Orders would be executed as much as it can in the booking block\nround and then got canceled back if there is still quantity left.")))),(0,l.kt)("p",null,"Orders would be rejected when:"),(0,l.kt)("ol",{start:0},(0,l.kt)("li",{parentName:"ol"},"user address cannot be located with asset"),(0,l.kt)("li",{parentName:"ol"},"Account does not possess enough token to buy or sell"),(0,l.kt)("li",{parentName:"ol"},"Exchange is down or has problem to match it"),(0,l.kt)("li",{parentName:"ol"},"The token is not listed against any base currencies"),(0,l.kt)("li",{parentName:"ol"},"Other order parameters are not valid"),(0,l.kt)("li",{parentName:"ol"},"Duplicated order ID")),(0,l.kt)("p",null,"Orders may be canceled / expired back when:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"IOC order not fully filled"),(0,l.kt)("li",{parentName:"ol"},"Order expired"),(0,l.kt)("li",{parentName:"ol"},"Exchange has problem to handle further with the orders")),(0,l.kt)("p",null,"After orders are received by any blockchain node, the node would try to submit the order transaction\nonto a block with consensus. After the order is accepted in an block, 2 things would happen,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"the assets that may transfer with the order would be locked and cannot be transferred;"),(0,l.kt)("li",{parentName:"ol"},"the Binance DEX would try to match the order against any existing orders or new orders from the same block.")),(0,l.kt)("p",null,"If the order can match with any opposite side, the trade would be generated and the assets would be\ntransferred. The fully filled orders would be removed from the order book, while the unfilled or\npartially filled GTE would stay on the order book until it is filled by others; unfilled or\npartially filled IOC order would be canceled."),(0,l.kt)("h3",{id:"order-lifecycle"},"Order Lifecycle"),(0,l.kt)("p",null,"Valid orders sent to the matching engine are confirmed immediately and are in the ",(0,l.kt)("strong",{parentName:"p"},"Ack")," state andinvalid orders will be ",(0,l.kt)("strong",{parentName:"p"},"FailedMatching")," state. GTE and IOC orders have different lifecycle."),(0,l.kt)("p",null,"For IOC order, if an IOC order executes against another order immediately as a whole, the order is considered ",(0,l.kt)("strong",{parentName:"p"},"FullyFill"),". An IOC order can execute in part and ends in ",(0,l.kt)("strong",{parentName:"p"},"IocExpire")," state. If no part of the IOC order is filled, will be considered ",(0,l.kt)("strong",{parentName:"p"},"IocNoFill"),"."),(0,l.kt)("p",null,"For GTE order, if a GTE order can execute against another order as a whole, the order is considered ",(0,l.kt)("strong",{parentName:"p"},"FullyFill"),". Any part of the order not filled immediately, will be considered open. Orders will stay in the open until it's canceled or subsequently filled by new orders. Canceled GTE orders are in the ",(0,l.kt)("strong",{parentName:"p"},"Canceled")," state. Orders that are no longer eligible for matching are in the ",(0,l.kt)("strong",{parentName:"p"},"Expired")," state."),(0,l.kt)("h3",{id:"order-expire"},"Order Expire"),(0,l.kt)("p",null,"Order would expire after 72 hours once it is booked on a block. A whole order book scan would happen every UTC mid-night to filter out all the expired orders. After the scan, all the expired orders would be removed from the order book, the locked quantity in the account would be unlocked. Before this action all the existing orders in the order book is subject to matching."),(0,l.kt)("p",null,"!!! Tip\nAs discussed in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/BEPs/blob/master/BEP67.md"},"BEP-67"),", those orders in the best 500 price levels on both ask and bid side will be expired after ",(0,l.kt)("strong",{parentName:"p"},"30 days")," instead of 72 hours. Meanwhile, the expiration fee is unchanged. BEP67 is already implemented and has been activated after Testnet Nightingale Upgrade. Beacon Chain Mainnet will be upgraded to support BEP-67 soon."),(0,l.kt)("h2",{id:"precision"},"Precision"),(0,l.kt)("p",null,"All the numbers are limited to 8-digit decimals."),(0,l.kt)("h2",{id:"tick-size-and-lot-size"},"Tick Size and Lot Size"),(0,l.kt)("p",null,"Tick size stands for the smallest unit on price change, while lot size stands for the smallest\nquantity change. Order price must be larger than and rounded to 1 tick size and order quantity\nmust be larger than and rounded to 1 lot size, otherwise orders would be rejected."),(0,l.kt)("p",null,"Tick size and lot size can be queried from DEX API, and they would be reviewed and changed\nby DEX match engine automatically according to the trading price every UTC mid-night. Once\nthe tick size or/and lot size is changed, new orders must stick to the new values while the\nexisting orders on the order book can still be traded."),(0,l.kt)("h2",{id:"fees"},"Fees"),(0,l.kt)("p",null,"We have five kinds of order operations, each kind has its specific fee calculation logic and collection timing as the table described below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Calculation"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Collection Timing"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Place order"),(0,l.kt)("td",{parentName:"tr",align:"left"},"free"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Cancel order"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fixed fees"),(0,l.kt)("td",{parentName:"tr",align:"left"},"when the ",(0,l.kt)("inlineCode",{parentName:"td"},"Cancel")," transaction executes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Order expire"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fixed fees if fully expired, otherwise free"),(0,l.kt)("td",{parentName:"tr",align:"left"},"when the scheduled order expiration happenes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"IOC order cancel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fixed fees if fully canceled, otherwise free"),(0,l.kt)("td",{parentName:"tr",align:"left"},"when the IOC order is not fully filled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Order execution"),(0,l.kt)("td",{parentName:"tr",align:"left"},"rate based fees"),(0,l.kt)("td",{parentName:"tr",align:"left"},"when the order matched")))),(0,l.kt)("p",null,"BNB is the priority in the fee collection and has some discounts."),(0,l.kt)("p",null,"DEX would always calculate and collect the fees based on the latest balance and in the best interest of users."),(0,l.kt)("h3",{id:"current-fees-table-on-mainnet"},"Current Fees Table on Mainnet"),(0,l.kt)("p",null,"Fees are variable and may change over time as governance proposals are proposed and voted on. The current fees table for ",(0,l.kt)("strong",{parentName:"p"},"Mainnet")," as of ",(0,l.kt)("strong",{parentName:"p"},"2021-03-21")," is as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in Non-BNB Asset"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in BNB"),(0,l.kt)("th",{parentName:"tr",align:null},"Exchange (DEX) Related"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"New Order"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cancel (No Fill)"),(0,l.kt)("td",{parentName:"tr",align:null},"Equivalent 0.00005 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00001 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Order Expire (No Fill)"),(0,l.kt)("td",{parentName:"tr",align:null},"Equivalent 0.00005 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00001 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IOC (No Fill)"),(0,l.kt)("td",{parentName:"tr",align:null},"Equivalent 0.00025 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000005 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transfer"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"crossTransferOut"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-send"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00006 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issue Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"10 BNB"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mint Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transfer ownership"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Burn Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Freeze/Unfreeze Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.001 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lock/unlock/relock Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"200 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit Proposal"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deposit"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000125 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Memo Check"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disable Memo Check"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depositHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"claimHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refundHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refundHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TinyIssueFee"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.4 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MiniIssueFee"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.6 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SetTokenUri"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List BEP8 Token"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create A New Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Smart Chain Validator Information"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delegate Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Redelegate Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0006 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Undelegate Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0004 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unjail A Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit Byzaitine Behavior Evidence of A Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit Smart Chain Proposal"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Deposit"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00025 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Vote"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cross transfer out relayer reward"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0004 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")))),(0,l.kt)("h3",{id:"mainnet-fees-api"},"Mainnet Fees API"),(0,l.kt)("p",null,"View system fees updated in real time ",(0,l.kt)("a",{parentName:"p",href:"https://dex.binance.org/api/v1/fees"},"here"),"."),(0,l.kt)("h3",{id:"multi-send-fees"},"Multi-send Fees"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bnbcli"),"  offers you a multi-send command to transfer multiple tokens to multiple people. 20% discount is available for ",(0,l.kt)("inlineCode",{parentName:"p"},"multi-send")," transactions. For now, ",(0,l.kt)("inlineCode",{parentName:"p"},"multi-send")," transaction will send some tokens from one address to multiple output addresses. If the count of output address is bigger than the threshold, currently it's 2, then the total transaction fee is  0.0003 BNB per token per address.\nFor example, if you send 3 ABC token,1 SAT token and 1 ABC to 3 different addresses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "to":"bnb1g5p04snezgpky203fq6da9qyjsy2k9kzr5yuhl",\n      "amount":"100000000:BNB,100000000:ABC"\n   },\n   {\n      "to":"bnb1l86xty0m55ryct9pnypz6chvtsmpyewmhrqwxw",\n      "amount":"100000000:BNB"\n   },\n   {\n      "to":"bnb1l86xty0maxdgst9pnypz6chvtsmpydkjflfioe",\n      "amount":"100000000:BNB,100000000:SAT"\n   }\n]\n')),(0,l.kt)("p",null,"You will pay on mainnet/testnet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0.0003 BNB * 5 = 0.0015 BNB\n")),(0,l.kt)("h3",{id:"trading-fees"},"Trading Fees"),(0,l.kt)("p",null,"Trading fees are subject to complex logic that may mean that individual trades are not charged exactly by the rates below, but between them instead; this is due to the block-based matching engine in use on the DEX."),(0,l.kt)("p",null,"The current fee for trades, applied on the settled amounts, is as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in non-BNB Asset"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trade"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1%"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05%")))),(0,l.kt)("p",null,"Trading fee can be queried at ",(0,l.kt)("a",{parentName:"p",href:"https://dex.binance.org/api/v1/fees?format=amino"},"here"),'. It\'s under the "params/DexFeeParam/".  "FeeRate" and "FeeRateNative" are both under unit of 10^-6.'),(0,l.kt)("h3",{id:"current-fees-table-on-testnet"},"Current Fees Table on Testnet"),(0,l.kt)("p",null,"Fees are variable and may change over time as governance proposals are proposed and voted on. The current fees table for Testnet as of ",(0,l.kt)("strong",{parentName:"p"},"2021-03-17")," is as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in Non-BNB Asset"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in BNB"),(0,l.kt)("th",{parentName:"tr",align:null},"Exchange (DEX) Related"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"New Order"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cancel (No Fill)"),(0,l.kt)("td",{parentName:"tr",align:null},"Equivalent 0.00005 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00001 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Order Expire (No Fill)"),(0,l.kt)("td",{parentName:"tr",align:null},"Equivalent 0.00005 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00001 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IOC (No Fill)"),(0,l.kt)("td",{parentName:"tr",align:null},"Equivalent 0.00025 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000005 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transfer"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"crossTransferOut"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-send"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00006 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issue Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"10 BNB"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mint Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transfer ownership"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Burn Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Freeze/Unfreeze Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.001 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lock/unlock/relock Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List Asset"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"200 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit Proposal"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deposit"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000125 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Memo Check"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disable Memo Check"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depositHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"claimHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refundHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refundHTLT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TinyIssueFee"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.4 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MiniIssueFee"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.6 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SetTokenUri"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000075 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List BEP8 Token"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create A New Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Edit Smart Chain Validator Information"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delegate Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0002 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Redelegate Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0006 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Undelegate Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0004 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unjail A Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit Byzaitine Behavior Evidence of A Smart Chain Validator"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Submit Smart Chain Proposal"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"1 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Deposit"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00025 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Smart Chain Proposal Vote"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cross transfer out relayer reward"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0004 BNB"),(0,l.kt)("td",{parentName:"tr",align:null},"N")))),(0,l.kt)("h3",{id:"testnet-fees-api"},"Testnet Fees API"),(0,l.kt)("p",null,"View system fees updated in real time ",(0,l.kt)("a",{parentName:"p",href:"https://testnet-dex.binance.org/api/v1/fees"},"here"),"."),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Trade fee is calculated based on trade notional value, while fees for other transactions are fixed.\nIt is free to send new GTE order, cancel a partially filled order, and you will not be charged a fee when the system expires a partially filled order (GTE or IOC).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Non-Trade related transactions will be charged a fee when the transactions happen, and can only be paid in BNB. The transaction will be rejected if the address does not have enough BNB.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Trade related transaction would be charged with fee when an order is filled, or canceled/expired/IOC-expired with no fills. If there is enough BNB to pay, BNB fee structure would be used, otherwise, non-BNB fee structure would be used to charged.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the whole order value and free balance for the receiving asset are not enough to pay the fee, all the receiving asset and its residual balance would be charged."))))}u.isMDXComponent=!0}}]);