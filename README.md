# Web AR Demo with AR.js

This is a testing demo for multiple NFT markers built with AR.js and A-Frame.

# Links to all demo
--Go to https://chowing110.github.io

# Demo - Hand gesture on image tracking
--Go to https://chowing110.github.io/interaction/gesture/gesture.html

--Model in fixed position https://chowing110.github.io/interaction/gesture/fixed.html

--Scan https://chowing110.github.io/img-src/2.jpg to view the custom model and play with it.

--Demo in pure A-Frame https://chowing110.github.io/interaction/gesture/test.html

--Cloned from https://github.com/fcor/arjs-gestures

# Demo - Clicking event on image tracking
--Go to https://chowing110.github.io/interaction/click/click.html

--Scan https://github.com/nicolocarpignoli/nicolocarpignoli.github.io/blob/master/ar-click-events/06-barcode.png to view the custom model and play with it.

--Cloned from https://medium.com/swlh/how-to-handle-click-events-on-ar-js-f397ea5994d

# Demo - Playing video on image tracking
--Go to https://chowing110.github.io/video/index.html

--Video in fixed position https://chowing110.github.io/video/fixed.html

--Scan https://chowing110.github.io/img-src/2.jpg

--Demo in pure A-Frame https://chowing110.github.io/video/test.html (Click on video)

--Cloned from https://github.com/AR-js-org/AR.js/tree/master/aframe/examples/image-tracking/nft-video

# Demo - Playing animation by event (Click to rotate)
--Go to https://chowing110.github.io/interaction/animation/nft.html (Click the red ball)

--Go to https://chowing110.github.io/interaction/animation/nft-button.html (Click the button)

--Model in fixed position https://chowing110.github.io/interaction/animation/fixed.html (Click the button)

--Scan https://chowing110.github.io/img-src/2.jpg

--Demo in pure A-Frame https://chowing110.github.io/interaction/animation/test.html (Both red ball and button works)

# Demo - Multi-markers
--Goto https://chowing110.github.io/multi-markers/fixed.html

--Scan https://chowing110.github.io/img-src/2.jpg

# Notes for developer
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
