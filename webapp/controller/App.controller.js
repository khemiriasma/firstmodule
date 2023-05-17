sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/odata/v2/ODataModel"
    ],
    function(BaseController,ODataModel) {
      "use strict";
  
      return BaseController.extend("firstapp.firstmodule.controller.App", {
        onInit() {
         var sUrl = "/sap/opu/odata/sap/ZWD_TEST_SRV/";
         var oModel = new ODataModel(sUrl);
         this.getView().setModel(oModel);
        }
      });
    }
  );
  