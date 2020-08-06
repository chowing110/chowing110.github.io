# Web AR Demo with AR.js

This is a testing demo for multiple NFT markers.
Scan https://chowing110.github.io/img-src/2b.jpg in order to view the custom model with text description

To test the demo
https://chowing110.github.io

Scan this picture
https://chowing110.github.io/img-src/2.jpg

Notes for developer
* Create NFT marker for image
https://github.com/Carnaux/NFT-Marker-Creator
https://ar-js-org.github.io/AR.js-Docs/image-tracking/#create-image-descriptors

	npm install

	node app.js -i IMAGE.jpg

	npm run demo

* Handling multiple NFT markers
	https://github.com/AR-js-org/AR.js/issues/132
		* consider a page as a scene
		you are allowed to setup multiple NFT markers in a scene
		and when you focus the view on any described image exclusively
		the content will appear

		* but it cannot handle multiple NFT markers in one view
		either no content appears or only one content appears
		it is not supported