"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7295],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},h),{},{components:n})):o.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8588:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={toc:[{value:"By Rachel-Rose O&#39;Leary, Stellar Magnet",id:"by-rachel-rose-oleary-stellar-magnet",level:6},{value:"Primer on Ethereum&#39;s Transparency",id:"primer-on-ethereums-transparency",level:2},{value:"Being anonymous on Ethereum",id:"being-anonymous-on-ethereum",level:2}]};function l(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h6",{id:"by-rachel-rose-oleary-stellar-magnet"},"By Rachel-Rose O'Leary, Stellar Magnet"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Anon Eth",src:n(9595).Z,width:"2000",height:"1125"})),(0,r.kt)("p",null,"Ethereum is the most popular blockchain with smart contract functionality and has attracted a lot of users new to cryptocurrency due to the rise in popularity of NFTs. One thing new users might not understand is that Ethereum doesn't provide privacy features up front and that transacting on Web3, if you aren\u2019t using privacy add-ons or specialized blockchains, is actually much less private than one is accustomed to when transacting on Web2, wherein only your bank and service providers know details of your financial transactions. "),(0,r.kt)("p",null,"This guide exists to educate people on the transparency of Ethereum and to provide instructions on tools that can be used to achieve better anonymity on Ethereum."),(0,r.kt)("h2",{id:"primer-on-ethereums-transparency"},"Primer on Ethereum's Transparency"),(0,r.kt)("p",null,"If you decide to mint an NFT and someone subsequently puchases the NFT from you, it's possible for anyone to now observe what you do with the ETH (or ERC-20 token) that you receive. For example, if you navigate to a profile on Foundation such as:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://foundation.app/@gaelcorboz"},"https://foundation.app/@gaelcorboz")),(0,r.kt)("p",null,"You can copy the Ethereum address, ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0E5E9eC9DeDfbbD1cf97318a30831b008bd295C1")," and then navigate to Ethereum's most popular block explorer, ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io"},"Etherscan"),", and paste in the address in the search bar. This will return this URL:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x0E5E9eC9DeDfbbD1cf97318a30831b008bd295C1"},"https://etherscan.io/address/0x0E5E9eC9DeDfbbD1cf97318a30831b008bd295C1")),(0,r.kt)("p",null,"Now we are able to see how Gael Corboz has been spending cryptocurrency associated with their Foundation address. This behavior isn't limited to only Foundation, it's possible to determine the Ethereum address of anyone selling NFTs on OpenSea, Zora, Rarible, etc."),(0,r.kt)("h2",{id:"being-anonymous-on-ethereum"},"Being anonymous on Ethereum"),(0,r.kt)("p",null,"In this guide, you can learn how to anonymize Ethereum using two different possible apps: ",(0,r.kt)("a",{parentName:"p",href:"https://zk.money"},"zk.money")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tornado.cash"},"Tornado Cash"),". Both of these apps use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Zero-knowledge_proof"},"zero-knowledge proof cryptography")," to anonymize your Ethereum. These types of apps are called mixers because they achieve privacy by pooling money into a common smart contract. Whenever you use one of these protocols to transfer ETH, the address showing up in the block explorer sending the ETH will be the zk.money or Tornado Cash smart contract, as opposed to your personal Ethereum address."),(0,r.kt)("p",null,"In the case of zk.money, wherein the app allows you to transact in variable amounts of ETH, how much money you are depositing into the pool, and how much you then withdraw from it, can potentially de-anonymize you."),(0,r.kt)("p",null,"For example, if you decide to deposit 12.454 ETH into zk.money and then you withdraw exactly that same amount of shielded ETH to another address, it is easy to de-anonymize yourself and have the transactions linked (if someone is looking closely at the smart contract, they can link the addresses together by matching the ETH deposit and withdrawal amounts as it may be very unlikely that another person besides you has transacted in that same amount of ETH)."),(0,r.kt)("p",null,"To bypass this potential breach in privacy when you are sending ETH on zk.money, the app will provide an estimated size of the anonymity set for the transaction amount you'd like to send. You can play around with the number until you see something you're comfortable with."),(0,r.kt)("p",null,"Tornado Cash controls this more at the app level, only allowing specific denominations of ETH to be sent (0.1 ETH, 1 ETH, 10 ETH)."),(0,r.kt)("p",null,"Whether you decide to use zk.money or Tornado Cash, you will need to start off by creating a fresh Ethereum address."))}l.isMDXComponent=!0},5977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(8588),s=["components"],l={sidebar_position:3},u="How to Anonymize Ethereum",h={unversionedId:"wiki/how-to-anonymize-eth",id:"wiki/how-to-anonymize-eth",title:"How to Anonymize Ethereum",description:"Step 0:  Create a fresh Ethereum account",source:"@site/docs/wiki/how-to-anonymize-eth.mdx",sourceDirName:"wiki",slug:"/wiki/how-to-anonymize-eth",permalink:"/wiki/how-to-anonymize-eth",editUrl:"https://github.com/BlackSkyNetwork/nexus/edit/main/docs/wiki/how-to-anonymize-eth.mdx",tags:[],version:"current",lastUpdatedAt:1649850047,formattedLastUpdatedAt:"4/13/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cryptocurrency 101",permalink:"/wiki/cryptocurrency-101"},next:{title:"Crypto Legal Risk Checklist",permalink:"/wiki/crypto-legal-risk-checklist"}},p={},c=[{value:"Step 0:  Create a fresh Ethereum account",id:"step-0--create-a-fresh-ethereum-account",level:3},{value:"Anonymizing ETH using zk.money",id:"anonymizing-eth-using-zkmoney",level:2},{value:"Step 1: Connect to zk.money and pick username",id:"step-1-connect-to-zkmoney-and-pick-username",level:3},{value:"Step 2: Shield your Ethereum",id:"step-2-shield-your-ethereum",level:3},{value:"Step 3: Send anonymized ETH to fresh wallet",id:"step-3-send-anonymized-eth-to-fresh-wallet",level:3},{value:"Anonymizing ETH using Tornado Cash",id:"anonymizing-eth-using-tornado-cash",level:2},{value:"Step 1: Deposit to Tornado Cash",id:"step-1-deposit-to-tornado-cash",level:3},{value:"Step 2: Send anonymized ETH to fresh wallet",id:"step-2-send-anonymized-eth-to-fresh-wallet",level:3},{value:"Disclaimer:",id:"disclaimer",level:4}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-anonymize-ethereum"},"How to Anonymize Ethereum"),(0,r.kt)(i.ZP,{mdxType:"AnonymizeETHIntro"}),(0,r.kt)("h3",{id:"step-0--create-a-fresh-ethereum-account"},"Step 0:  Create a fresh Ethereum account"),(0,r.kt)("p",null,"For clarity, we will call the wallet where your public non-anonymous ETH originates from ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet1"),". "),(0,r.kt)("p",null,"To anonymize ETH, you must create a second fresh Ethereum account that is tied to a new seed. One way to do this, is to simply download ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io"},"Metamask")," on a different browser and create a brand new seed. It is important to use an entirely different seed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet1")," to minimize the risk of linking the accounts."),(0,r.kt)("p",null,"If you want to be highly secure, download Metamask on ",(0,r.kt)("a",{parentName:"p",href:"https://www.torproject.org/download/"},"Tor Browser")," (do not use a VPN when you are interacting with Tor as it will reduce your overall anonymity). If you don't use Tor, use a browser like Brave or Firefox alongside a VPN."),(0,r.kt)("p",null,"Once you have downloaded Metamask on this new browser, create an account and backup your seed. Copy and paste your account's public key onto a text file. We'll use this later on. We will now refer to this account as ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),"."),(0,r.kt)("h2",{id:"anonymizing-eth-using-zkmoney"},"Anonymizing ETH using zk.money"),(0,r.kt)("p",null,'The steps in this guide will take a few minutes to complete, but it will take about 6 hours until you can transact with your private, "shielded" ETH. If you would like a faster, but more expensive alternative, check out the ',(0,r.kt)("a",{parentName:"p",href:"#anonymizing-eth-using-tornado-cash"},"Tornado Cash")," guide."),(0,r.kt)("p",null,"Once you have created your fresh Ethereum wallet ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2")," ",(0,r.kt)("a",{parentName:"p",href:"#step-0--create-a-fresh-ethereum-account"},"described in Step 0"),", you can proceed with the rest of this guide."),(0,r.kt)("h3",{id:"step-1-connect-to-zkmoney-and-pick-username"},"Step 1: Connect to zk.money and pick username"),(0,r.kt)("p",null,"On the browser associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet1"),", navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://zk.money/"},"zk.money")," website. Connect ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet1")," to zk.money. Pick a username to set as your alias."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Pick username",src:n(6142).Z,width:"964",height:"801"})),(0,r.kt)("p",null,"Then click 'Register'. This may take several minutes. Do not close the window until you see the dashboard."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Create account",src:n(6083).Z,width:"1456",height:"986"})),(0,r.kt)("p",null,"Deposit at least 0.01 ETH for the username registration to be complete. You'll be able to withdraw your ETH later or include them in a payment."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Deposit ETH",src:n(5377).Z,width:"1303",height:"877"})),(0,r.kt)("h3",{id:"step-2-shield-your-ethereum"},"Step 2: Shield your Ethereum"),(0,r.kt)("p",null,"Now convert your ETH to zkETH by shielding your coins. Shield your preferred asset by clicking the \u201cShield\u201d button on your dashboard. You can reduce the time the shielding will take by paying a higher transaction fee here. "),(0,r.kt)("p",null,"Keep waiting until the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHIELD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE ACCOUNT")," transactions are settled. Only then is your username successfully registered. This may take a few hours. "),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Shield ETH",src:n(5097).Z,width:"1358",height:"401"})),(0,r.kt)("p",null,"You\u2019ll be able to follow your transaction status in the dashboard. Please note that while your account balance may show zkETH available, you won\u2019t be able to send any funds until your new sendable balance is settled."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"zk Dashboard",src:n(7058).Z,width:"930",height:"621"})),(0,r.kt)("p",null,"Once you have a sendable balance of zkETH you will be in privacy mode. The entire process may take several hours, so don\u2019t stress if the balance does not show up immediately."),(0,r.kt)("h3",{id:"step-3-send-anonymized-eth-to-fresh-wallet"},"Step 3: Send anonymized ETH to fresh wallet"),(0,r.kt)("p",null,"Now that the ETH has been anonymized, send it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),". Simply paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2")," address into the ",(0,r.kt)("em",{parentName:"p"},"Recipient")," section."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Send ETH",src:n(9745).Z,width:"1335",height:"861"})),(0,r.kt)("p",null,"The coins received by ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2")," will be normal ETH (as opposed to zkETH). However, the transaction history will have been anonymized. Etherscan will show the funds were sent from the Aztec contract to ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2")," is now an anonymous account you can use that isn't tied to any of your past Ethereum transaction history (remember to use it in combination with Tor or a VPN for increased anonymity)."),(0,r.kt)("h2",{id:"anonymizing-eth-using-tornado-cash"},"Anonymizing ETH using Tornado Cash"),(0,r.kt)("p",null,"Now we will walk through the process of anonymizing ETH through Tornado Cash. This guide does not deal with Tornado Cash Nova - the new experimental version of Tornado Cash. Make sure your are on the right version of the app."),(0,r.kt)("p",null,"Depending on the ETH gas price, an average Tornado Cash deposit costs around 0.05 ETH (plus a similar amount for withdrawal). If you'd like a cheaper alternative, check out the ",(0,r.kt)("a",{parentName:"p",href:"#anonymizing-eth-using-zkmoney"},"process for zk.money"),"."),(0,r.kt)("p",null,"Once you have created ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),", you can proceed with the rest of this guide."),(0,r.kt)("h3",{id:"step-1-deposit-to-tornado-cash"},"Step 1: Deposit to Tornado Cash"),(0,r.kt)("p",null,"On the browser associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet1"),", navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://tornado.cash"},"Tornado Cash"),". Click 'Launch App' in the top right hand side. Now follow the steps to deposit ETH."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Deposit",src:n(4452).Z,width:"1456",height:"529"})),(0,r.kt)("p",null,"Select ETH from the token list and enter your required amount. Now connect your wallet. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," and choose Metamask.\nSave your note. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," and store your note on a secure place before clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"I backed up the note"),".\nYou can also save encrypted notes on-chain by setting up a Note Account, by clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," (top-right corner)."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Deposit 2",src:n(9918).Z,width:"1456",height:"853"})),(0,r.kt)("p",null,"Your ETH is now being anonymized. Leave it here for as long as you can. The longer you wait, the greater your anonymity set will be."),(0,r.kt)("h3",{id:"step-2-send-anonymized-eth-to-fresh-wallet"},"Step 2: Send anonymized ETH to fresh wallet"),(0,r.kt)("p",null,"Now we are going to redeem anonymous ETH on ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),". First navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),". If you are running it on Tor, switch off your VPN. Otherwise, close your current browser and turn your VPN on."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2"),", use your deposit note by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," and pasting it in the corresponding box. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Withdraw")," and wait for the zk-SNARK proof to be generated."),(0,r.kt)("p",null,"Finally, confirm the withdrawal. ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet2")," is now an account you can use, loaded with ETH, that isn't tied to any of your past Ethereum transaction history."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Withdraw",src:n(6125).Z,width:"934",height:"434"})),(0,r.kt)("h4",{id:"disclaimer"},"Disclaimer:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This tutorial is for informative purposes only. We make no representation as to the tutorial's accuracy or completeness. We take no liability for any losses arising out of or in connection with the information provided or any other action or transaction related thereto. This tutorial should not be construed as an endorsement of zk.money or Tornado Cash or as a recommendation to engage in any transaction or taken as the basis for making decisions. You are solely responsible for your own transactions and decisions.")))}m.isMDXComponent=!0},9595:function(e,t,n){t.Z=n.p+"assets/images/anon-eth-56db9bc7badab75757c85345db135cb6.png"},4452:function(e,t,n){t.Z=n.p+"assets/images/tornado1-207b8076e7fd240a95ca7363f7a1d7ad.gif"},9918:function(e,t,n){t.Z=n.p+"assets/images/tornado2-ed0dbd5183ca058fffc949bf4ebb13e2.gif"},6125:function(e,t,n){t.Z=n.p+"assets/images/tornado3-5b46372fdef905138e5e011ffb66e37f.png"},6142:function(e,t,n){t.Z=n.p+"assets/images/zk1-b735b7efd46e0779f233cbc4bd14a6e6.png"},6083:function(e,t,n){t.Z=n.p+"assets/images/zk2-d0783d59ae7e02aa8e89b05a6aca43e0.png"},5377:function(e,t,n){t.Z=n.p+"assets/images/zk3-1ac00af77b0de0b3c2af8ab9c753cb88.png"},5097:function(e,t,n){t.Z=n.p+"assets/images/zk4-4911484e5a34a5d1ad4641268a1d3b45.png"},7058:function(e,t,n){t.Z=n.p+"assets/images/zk5-41f7c5971d933958e87beac5dced629b.png"},9745:function(e,t,n){t.Z=n.p+"assets/images/zk6-b6f3ad5b0adfc8a69bc1343e8b668847.png"}}]);