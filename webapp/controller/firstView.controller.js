sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "firstapp/firstmodule/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ResourceModel, formatter) {
        "use strict";

        return Controller.extend("firstapp.firstmodule.controller.firstView", {
            formatter: formatter,
            onInit: function () {
                var i18nModel = new ResourceModel({
                    bundleName: "firstapp.firstmodule.i18n.i18n"
                });
                this.oModel = this.getOwnerComponent().getModel("ZWD_TEST_SRV");
                this.getView().setModel(i18nModel, "i18n");
                this.oTable = this.getView().byId("idTable");
                this.getView().setModel(this.oModel);
                this.oTable.setModel(this.oModel);

                // var sURI = "/sap/opu/odata/sap/ZWD_TEST_SRV";
                // var oDataModel = new ODataModel(sURI, true);
                // oDataModel.read("/EmployeSet", {

                //     success: function (oData, response) {
                //         var oModel = new sap.ui.model.json.JSONModel();
                //         var oModel = new sap.ui.model.json.JSONModel({ "Employees": oData.results });
                //         sap.ui.getCore().setModel(oModel);

                //         var oTable = new sap.m.Table("employeedata", {
                //             inset: true,
                //             headerText: "Employee",


                //             columns: [
                //                 new sap.m.Column({
                //                     header: new sap.m.Label({ text: "FirstName" }),
                //                     mergeDuplicates: true
                //                 }),
                //                 new sap.m.Column({
                //                     header: new sap.m.Label({ text: "LastName" }),
                //                     mergeDuplicates: true
                //                 })

                //             ],
                //         });
                //         oTable.bindAggregation("items", {
                //             path: "/Employees",
                //             template: new sap.m.ColumnListItem({
                //                 cells: [
                //                     new sap.m.Label({ text: "{Firstname}" }),
                //                     new sap.m.Label({ text: "{Lastname}" }),

                //                 ]
                //             })
                //         });
                //         oTable.placeAt("content", "last");
                //         // var content = this.getView().byId('page');
                //         // content.insertContent(oTable);


                //     }.bind(this)

                // });


            }
        });
    });
