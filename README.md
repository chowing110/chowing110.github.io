# Web AR Demo with AR.js

This is a testing demo for multiple NFT markers built with AR.js and A-Frame.

# Demo - Vanilla image tracking
--Go to https://chowing110.github.io

--Scan https://chowing110.github.io/img-src/2b.jpg to view the custom model with text description.

--Or scan this picture
  https://chowing110.github.io/img-src/2.jpg

# Demo - Hand gesture on image tracking
--Go to https://chowing110.github.io/interaction/gesture/gesture.html

--Scan https://chowing110.github.io/img-src/2.jpg to view the custom model and play with it.

--Cloned from https://github.com/fcor/arjs-gestures

# Demo - Clicking event on image tracking
--Go to https://chowing110.github.io/interaction/click/click.html

--Scan https://github.com/nicolocarpignoli/nicolocarpignoli.github.io/blob/master/ar-click-events/06-barcode.png to view the custom model and play with it.

--Cloned from https://medium.com/swlh/how-to-handle-click-events-on-ar-js-f397ea5994d

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
