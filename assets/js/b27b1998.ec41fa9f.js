"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5197],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={sidebar_label:"Create a Validator on Testnet",sidebar_position:2,hide_table_of_contents:!1},c="How to become a Validator Candidate",s={unversionedId:"validator/testnet",id:"validator/testnet",isDocsHomePage:!1,title:"How to become a Validator Candidate",description:"Install Fullnode",source:"@site/docs/validator/testnet.md",sourceDirName:"validator",slug:"/validator/testnet",permalink:"/docs/validator/testnet",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/testnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create a Validator on Testnet",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Run Validator on Testnet",permalink:"/docs/validator/guideline-testnet"},next:{title:"Download Blockchain Snapshot",permalink:"/docs/validator/snapshot"}},d=[{value:"Install Fullnode",id:"install-fullnode",children:[],level:2},{value:"Create an account",id:"create-an-account",children:[{value:"Get some testnet funds from faucet",id:"get-some-testnet-funds-from-faucet",children:[],level:3},{value:"Transfer BNB from BSC to BC",id:"transfer-bnb-from-bsc-to-bc",children:[],level:3},{value:"Become a validator candidate",id:"become-a-validator-candidate",children:[],level:3},{value:"Get Genesis file and Config file",id:"get-genesis-file-and-config-file",children:[],level:3},{value:"Start Fullnode on BSC Testnet",id:"start-fullnode-on-bsc-testnet",children:[],level:3},{value:"Become a validator candidate of testnet",id:"become-a-validator-candidate-of-testnet",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-become-a-validator-candidate"},"How to become a Validator Candidate"),(0,o.kt)("h2",{id:"install-fullnode"},"Install Fullnode"),(0,o.kt)("p",null,"Please follow this ",(0,o.kt)("a",{parentName:"p",href:"/docs/validator/fullnode"},"guide")," to install bsc fullnode locally."),(0,o.kt)("h2",{id:"create-an-account"},"Create an account"),(0,o.kt)("p",null,"You need to create an account that represents a key pair first. Use the following command to create a new account and set a password for that account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth account new --datadir ./node\n")),(0,o.kt)("p",null,"This command will return the public address and the path to your private key. BACKUP of keyfile is necessory!"),(0,o.kt)("p",null,"If you already have an account, use the seed phrase to recover it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth account import --datadir ./node\n")),(0,o.kt)("h3",{id:"get-some-testnet-funds-from-faucet"},"Get some testnet funds from faucet"),(0,o.kt)("p",null,"Go to this faucet page: ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.binance.org/faucet-smart"},"https://testnet.binance.org/faucet-smart")),(0,o.kt)("h3",{id:"transfer-bnb-from-bsc-to-bc"},"Transfer BNB from BSC to BC"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://binance-wallet.gitbook.io/binance-chain-extension-wallet/best-practice/transfer-testnet-bnb-from-bsc-to-bc"},"guide")," to transfer BNB with Binance Chain extension wallet."),(0,o.kt)("h3",{id:"become-a-validator-candidate"},"Become a validator candidate"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/stake/cli-commands"},"declare your candidacy")," some of BNB to a validator"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-explorer.binance.org/"},"testnet explorer")," to verify your transactions."),(0,o.kt)("h3",{id:"get-genesis-file-and-config-file"},"Get Genesis file and Config file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wget --no-check-certificate  $(curl -s https://api.github.com/repos/binance-chain/bsc/releases/latest |grep browser_ |grep testnet |cut -d\\" -f4)\nunzip testnet.zip\n')),(0,o.kt)("h3",{id:"start-fullnode-on-bsc-testnet"},"Start Fullnode on BSC Testnet"),(0,o.kt)("p",null,"Please run this command to run a fullnode as validator candidate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth --datadir node init genesis.json\ngeth --config ./config.toml --datadir ./node --syncmode snap -unlock {validator-address} --mine --allow-insecure-unlock \n")),(0,o.kt)("h3",{id:"become-a-validator-candidate-of-testnet"},"Become a validator candidate of testnet"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/stake/cli-commands"},"declare your candidacy")," some of BNB to a validator"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-explorer.binance.org/"},"explorer")," to verify your transactions."))}p.isMDXComponent=!0}}]);