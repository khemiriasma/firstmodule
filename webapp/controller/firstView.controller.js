sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, ResourceModel) {
        "use strict";

        return Controller.extend("firstapp.firstmodule.controller.firstView", {
           
            onInit: function () {       
                var i18nModel = new ResourceModel({
                    bundleName: "firstapp.firstmodule.i18n.i18n"
                });
                this.getView().setModel(i18nModel, "i18n");  
                var sURI = "/sap/opu/odata/sap/ZWD_TEST_SRV";
                var oDataModel = new ODataModel(sURI, true);
                oDataModel.read("/EmployeSet", {

                    success: function (oData, response) {
                        var oModel = new sap.ui.model.json.JSONModel();
                        var oModel = new sap.ui.model.json.JSONModel({ "Employee": oData.results });
                        sap.ui.getCore().setModel(oModel);
                        var oTable = new sap.m.Table("employeedata", {
                            inset: true,
                            headerText: "Employee",
                           
                            columns: [
                                new sap.m.Column({
                                    header: new sap.m.Label({ text: "FirstName" }),
                                    mergeDuplicates: true
                                }),
                                new sap.m.Column({
                                    header: new sap.m.Label({ text: "LastName" }),
                                    mergeDuplicates: true
                                })
                               
                            ],
                        });
                        oTable.bindAggregation("items", {
                            path: "/Employee",
                            template: new sap.m.ColumnListItem({
                                cells: [
                                        new sap.m.Label({ text: "{Firstname}" }),
                                        new sap.m.Label({ text: "{Lastname}" }),
                                      
                                ]
                            })
                        });
                        var vBox = this.getView().byId('vbox1');
                       oTable.placeAt("content", "first");     
                                         

                    }.bind(this)

                });


            }
        });
    });
