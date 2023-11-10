sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'eylakshmi/app/purchaseorderapp/test/integration/FirstJourney',
		'eylakshmi/app/purchaseorderapp/test/integration/pages/POsList',
		'eylakshmi/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'eylakshmi/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('eylakshmi/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);