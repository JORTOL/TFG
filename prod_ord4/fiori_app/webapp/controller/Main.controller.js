sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/Label',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterType',
    'sap/ui/model/FilterOperator',
    "sap/ui/core/Core",
    "sap/ui/core/library",
    "sap/ui/unified/library",
    "sap/ui/base/ManagedObject",
    'sap/ui/comp/smartvariants/PersonalizableInfo',

    //"sap/ui/model/odata/Filter"


],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var fecha, centros, turnos;
        return Controller.extend("prodord4.controller.Main", {
            onInit: function () {


                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                ///////var oTable = this.getView().byId("ordersTable");
                //oTable.setVisible(false);

            },
            /**
             * @override
             */
            onAfterRendering: function () {
                this.oResourceBudle = this.getView()
                    .getModel("i18n")
                    .getResourceBundle();
            },
            onSearch: function () {

                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                return null;

            },
            onFilterChange: function () {

                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                return null;

            },
            onAfterVariantLoad: function () {

                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                return null;

            },
            onUpdate: function () {



                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                var batchChanges = [];
                var oEntry = {};
                var oTable = this.getView().byId("ordersTable");
                var cont = 0;
                var oItems = {};


                /*oTable.getItems().forEach(){

                    var oItem = {};
                    oItem.Custimpdate      = oTable.getBindingContext("odataService").getProperty("Custimpdate");
                    oItem.Custshift        = oTable.getBindingContext("odataService").getProperty("Custshift");
                    oItem.CustmanfacOrder  = oTable.getBindingContext("odataService").getProperty("CustmanfacOrder");
                    oItem.QtyManual        = oTable.getBindingContext("odataService").getProperty("QtyManual");
                    oItem.MatchHcapManual  = oTable.getBindingContext("odataService").getProperty("MatchHcapManual");
                    oItem.ManHoursmanual   = oTable.getBindingContext("odataService").getProperty("ManHoursmanual"); 

                    batchChanges.push(oItem);

                    oModel.create("Cantidades_producidasSet", oItem, {
                        method: "POST"
                    });
                    /*oModel.create("Horas_hombreSet", oEntry, {
                        method: "POST"
                    });
                };*/



                var aContexts = oTable.getItems().map(function (oTable) {

                    oItems.Custimpdate = oTable.getBindingContext("odataService").getProperty("Custimpdate");
                    oItems.Custshift = oTable.getBindingContext("odataService").getProperty("Custshift");
                    oItems.CustmanfacOrder = oTable.getBindingContext("odataService").getProperty("CustmanfacOrder");
                    oItems.QtyManual = oTable.getBindingContext("odataService").getProperty("QtyManual");
                    oItems.MatchHcapManual = oTable.getBindingContext("odataService").getProperty("MatchHcapManual");
                    //oItems.ManHoursmanual   = oTable.getBindingContext("odataService>ToHorasHombre/").getProperty("ManHoursmanual");

                    oEntry.Custimpdate = oItems.Custimpdate;
                    oEntry.Custshift = oItems.Custshift;
                    oEntry.CustmanfacOrder = oItems.CustmanfacOrder;
                    oEntry.QtyManual = oItems.QtyManual;
                    oEntry.MatchHcapManual = oItems.MatchHcapManual;

                    batchChanges.push(oEntry);

                    oModel.create("Cantidades_producidasSet", oEntry, {
                        method: "POST"
                    });
                    /*oModel.create("Horas_hombreSet", oEntry, {
                        method: "POST"
                    });*/


                });

                /*  aContexts.forEach(function(sOItems){
                      oEntry.Custimpdate      = sOItems.Custimpdate;
                      oEntry.Custshift        = sOItems.Custshift;
                      oEntry.CustmanfacOrder  = sOItems.CustmanfacOrder;
                      oEntry.QtyManual        = sOItems.QtyManual;
                      oEntry.MatchHcapManual  = sOItems.MatchHcapManual;
                      //oEntry.ManHoursmanual   = sOItems.ManHoursmanual;
                      batchChanges.push(oEntry);
  
                      oModel.create("Cantidades_producidasSet", oEntry, {
                          method: "POST"
                      });
                      /*oModel.create("Horas_hombreSet", oEntry, {
                          method: "POST"
                      });
                  });*/





                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");

                //var serviceuri = "/sap/opu/odata/sap/ZPPP_PRODORD_SRV";
                /*var oModel = new sap.ui.model.odata.ODataModel(serviceuri,true,
                    sap.ui.getCore().setModel(oModel));*/








                /*    var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");

                var oBinding = this.byId("ordersTable").getBinding("items");
                //var length = oBinding.aLastContextData.length;

                var requestCantProd = {};
                for(var i = 0; i<oBinding.aLastContextData.length;i++){
                    //requestCantProd.CustmanfacOrder[i] = oBinding.aLastContextData[i];
                    //requestCantProd.Custimpdate[i] = oBinding.aLastContexts[i].
                    requestCantProd.Custshift[i] = oBinding.aLastContextData[i].Custshift;
                    requestCantProd.QtyManual[i] = oBinding.aLastContextData[i].QtyManual;
                }


                oModel.create("/Cantidades_producidasSet", requestCantProd , function(odataService, oResponse){
                    alert ("OK");},);*/







                //});


                //var oBinding = this.byId("ordersTable").getBinding("items"); 

                //requestCantProd.CustmanfacOrder = 
                //oModel.create("/Cantidades_producidasSet",  function(odataService, oResponse));


                /*var serviceuri = "/sap/opu/odata/sap/ZPPP_PRODORD_SRV";
                var oModel = new sap.ui.model.odata.ODataModel(serviceuri,true,
                    sap.ui.getCore().setModel(oModel));
                    //Set header data
                    var requestCantProd = {};
                    requestCantProd.ImCreate = 'X';
                    
                    oModel.setHeaders({
                        "Access-Control-Allow-Origin": "*",
                        //"Content-Type": "application/atom+xml;type=entry;charset=utf-8",
                        "Content-Type": "multipart/mixed;boundary=batch",
                        "X-CSRF-Token": "Fetch"
                    });
                    var token;
                    oModel.read('/Cantidades_producidasSet', 
          
                        function(odataService, oResponse){
                            token = oResponse.headers['x-csrf-token'];
                        },
                    );

                oModel.setHeaders({
                    "X-Requested-With": "XMLHttpRequest",                       
                    "Content-Type": "application/json",
                    "DataServiceVersion": "2.0", 
                    "Accept": "application/atom+xml,application/atomsvc+xml,application/xml",
                    "X-CSRF-Token": token
                });

                oModel.create('/Cantidades_producidasSet', 
                    function(odataService,oResponse){
                        alert('Datos actualizados correctamente');
                    },
                   function(){
                        alert('Error al guardar datos');
                   }
                );*/


                /*const newCant =  this.getView().getModel("newModel").getData();
                const body = {
                    Custimpdate : newCant.Custimpdate,
                    Werks       : newCant.Werks

                };
                this.getView()
                .getModel("odataService")
                .create("/Cantidades_producidas", body, {
                    success: function (data) {
                        sap.m.MeessageToast.show(
                            this.oResourceBudle.getText("cantidadesModified")
                        );
                        this.onClosePopup();
                    

                    }.bind(this),
                    error: function(e) {
                        sap.m.MeessageToast.show(
                            this.oResourceBudle.getText("cantidadesNotModified")
                        );
                    }.bind(this)

                })*/

            },


            onSelectionChange: function (oEvent) {


                //var oModel = new sap.ui.mode.xml.XMLModel("/sap/opu/odata/sap/ZPPP_PRODORD_SRV/");
                //var oTable = sap.ui.getCore().byId("ordersTable");
                //var oText = this.byId("textResult"),



                //if (typeof fecha === 'undefined') {
                    //var oText = this.byId("Fecha"),
                    //oDP = oEvent.getSource(),
                    //sValue = oEvent.getParameter("newValue"),
                    //bValid = oEvent.getParameter("valid");
                if (typeof oEvent.getParameter("newValue") !== 'undefined'){
                    fecha = oEvent.getParameter("newValue");
                    //fecha = sValue;
                }


                //var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM-dd-yyyy"});
                //return oDateFormat.format(new Date(sValue));
                if (oEvent.getSource().getName() == "Centros") {
                    centros = oEvent.getSource().getSelectedKey();
                } else if (oEvent.getSource().getName() == "Turnos") {
                    turnos = oEvent.getSource().getSelectedKey();
                }

                if (typeof fecha !== 'undefined' && typeof centros !== 'undefined' && typeof turnos !== 'undefined') {
                    var oTable = this.getView().byId("ordersTable");
                    oTable.setVisible(true);

                    var oTable2 = this.getView().byId("ordTableTot");
                    oTable2.setVisible(true);

                    //var equal = sap.ui.model.FilterOperator.EQ;
                    //var oFilter = new sap.ui.model.Filter({
                    /*    filters: [
                    new sap.ui.model.Filter("Custimpdate", equal, fecha),
                    new sap.ui.model.Filter("turno", equal, turnos),
                    new sap.ui.model.Filter("werks", equal, centros),] 
                        });*/

                    //filters = (oFilter);

                    //var listItem = sap.ui.getCore().byId("oTable");

                    //var binding = listItem.getBinding("items");
                    //oTable.getBinding("items");
                    //binding.filter(filters);
                    /*oTable.getBinding("items").filter(new sap.ui.model.Filter("Custimpdate", sap.ui.model.FilterOperator.EQ, fecha, 
                                                                             "turno", sap.ui.model.FilterOperator.EQ, turnos, 
                                                                             "werks", sap.ui.model.FilterOperator.EQ, centros));*/

                    //var oBinding = this.byId("oTable").getBinding("items");

                    //oBinding.filter(oFilter, FilterType.Application);



                    /*var oFilter = new Filter({
                  
                      filters: [
                  
                        new Filter("Custimpdate", FilterOperator.EQ, fecha),
                        new Filter("turno", FilterOperator.EQ, turnos)
                  
                      ]
                  
                    });
                         
                    //var oBinding = this.byId("list-id").getBinding("items");
                    var oBinding = oTable.getBinding("items");
                    //oBinding.filter(oFilter, FilterType.Application);
                    oBinding.filter(oFilter, FilterType.Application);*/



                    var oFilter = new sap.ui.model.Filter({

                        filters: [

                            new sap.ui.model.Filter("Custimpdate", sap.ui.model.FilterOperator.EQ, fecha),
                            new sap.ui.model.Filter("Custshift", sap.ui.model.FilterOperator.EQ, turnos),
                            new sap.ui.model.Filter("Werks", sap.ui.model.FilterOperator.EQ, centros)
                        ], and: true

                    });

                    // Filtro totales
                    var oBinding = this.byId("ordTableTot").getBinding("items");

                    oBinding.filter(oFilter, sap.ui.model.FilterType.Application);


                    // Filtro Order Details
                    var oBinding = this.byId("ordersTable").getBinding("items");

                    oBinding.filter(oFilter, sap.ui.model.FilterType.Application);




                    //oTable.getBinding("items").filter(new sap.ui.model.Filter(oFilter));
                }


                ////oTable.getBinding("items").filter(new sap.ui.model.Filter("Sociedad", sap.ui.model.FilterOperator.EQ, oEvent.getSource().getSelectedKey()  ));
















            }


        });
    });