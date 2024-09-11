var wms_layers = [];

var format_Mare_0 = new ol.format.GeoJSON();
var features_Mare_0 = format_Mare_0.readFeatures(json_Mare_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mare_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mare_0.addFeatures(features_Mare_0);
var lyr_Mare_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mare_0, 
                style: style_Mare_0,
                popuplayertitle: "Mare",
                interactive: true,
                title: '<img src="styles/legend/Mare_0.png" /> Mare'
            });
var format_T50_mare_latmingue_1 = new ol.format.GeoJSON();
var features_T50_mare_latmingue_1 = format_T50_mare_latmingue_1.readFeatures(json_T50_mare_latmingue_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T50_mare_latmingue_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T50_mare_latmingue_1.addFeatures(features_T50_mare_latmingue_1);
var lyr_T50_mare_latmingue_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T50_mare_latmingue_1, 
                style: style_T50_mare_latmingue_1,
                popuplayertitle: "T50_mare_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T50_mare_latmingue_1.png" /> T50_mare_latmingue'
            });
var format_Piste_de_btail_2 = new ol.format.GeoJSON();
var features_Piste_de_btail_2 = format_Piste_de_btail_2.readFeatures(json_Piste_de_btail_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piste_de_btail_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piste_de_btail_2.addFeatures(features_Piste_de_btail_2);
var lyr_Piste_de_btail_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piste_de_btail_2, 
                style: style_Piste_de_btail_2,
                popuplayertitle: "Piste_de_bétail",
                interactive: true,
                title: '<img src="styles/legend/Piste_de_btail_2.png" /> Piste_de_bétail'
            });
var format_T100_Piste_betails_latmingue_3 = new ol.format.GeoJSON();
var features_T100_Piste_betails_latmingue_3 = format_T100_Piste_betails_latmingue_3.readFeatures(json_T100_Piste_betails_latmingue_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_Piste_betails_latmingue_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_Piste_betails_latmingue_3.addFeatures(features_T100_Piste_betails_latmingue_3);
var lyr_T100_Piste_betails_latmingue_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_Piste_betails_latmingue_3, 
                style: style_T100_Piste_betails_latmingue_3,
                popuplayertitle: "T100_Piste_betails_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T100_Piste_betails_latmingue_3.png" /> T100_Piste_betails_latmingue'
            });
var format_Piste_de_production_4 = new ol.format.GeoJSON();
var features_Piste_de_production_4 = format_Piste_de_production_4.readFeatures(json_Piste_de_production_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piste_de_production_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piste_de_production_4.addFeatures(features_Piste_de_production_4);
var lyr_Piste_de_production_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piste_de_production_4, 
                style: style_Piste_de_production_4,
                popuplayertitle: "Piste_de_production",
                interactive: true,
                title: '<img src="styles/legend/Piste_de_production_4.png" /> Piste_de_production'
            });
var format_Zone_Habitation_ZH_5 = new ol.format.GeoJSON();
var features_Zone_Habitation_ZH_5 = format_Zone_Habitation_ZH_5.readFeatures(json_Zone_Habitation_ZH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_Habitation_ZH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_Habitation_ZH_5.addFeatures(features_Zone_Habitation_ZH_5);
var lyr_Zone_Habitation_ZH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_Habitation_ZH_5, 
                style: style_Zone_Habitation_ZH_5,
                popuplayertitle: "Zone_Habitation_ZH",
                interactive: true,
                title: '<img src="styles/legend/Zone_Habitation_ZH_5.png" /> Zone_Habitation_ZH'
            });
var format_Zone_pastorale_ZP_6 = new ol.format.GeoJSON();
var features_Zone_pastorale_ZP_6 = format_Zone_pastorale_ZP_6.readFeatures(json_Zone_pastorale_ZP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_pastorale_ZP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_pastorale_ZP_6.addFeatures(features_Zone_pastorale_ZP_6);
var lyr_Zone_pastorale_ZP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_pastorale_ZP_6, 
                style: style_Zone_pastorale_ZP_6,
                popuplayertitle: "Zone_pastorale_ZP",
                interactive: true,
                title: '<img src="styles/legend/Zone_pastorale_ZP_6.png" /> Zone_pastorale_ZP'
            });
var format_ZMD__Zone_de_mise_en_dfens__7 = new ol.format.GeoJSON();
var features_ZMD__Zone_de_mise_en_dfens__7 = format_ZMD__Zone_de_mise_en_dfens__7.readFeatures(json_ZMD__Zone_de_mise_en_dfens__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMD__Zone_de_mise_en_dfens__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMD__Zone_de_mise_en_dfens__7.addFeatures(features_ZMD__Zone_de_mise_en_dfens__7);
var lyr_ZMD__Zone_de_mise_en_dfens__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMD__Zone_de_mise_en_dfens__7, 
                style: style_ZMD__Zone_de_mise_en_dfens__7,
                popuplayertitle: "ZMD__Zone_de_mise_en_défens_",
                interactive: true,
                title: '<img src="styles/legend/ZMD__Zone_de_mise_en_dfens__7.png" /> ZMD__Zone_de_mise_en_défens_'
            });
var format_Zone_agro_pastorale_sans_priorit_ZAP_8 = new ol.format.GeoJSON();
var features_Zone_agro_pastorale_sans_priorit_ZAP_8 = format_Zone_agro_pastorale_sans_priorit_ZAP_8.readFeatures(json_Zone_agro_pastorale_sans_priorit_ZAP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_agro_pastorale_sans_priorit_ZAP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_agro_pastorale_sans_priorit_ZAP_8.addFeatures(features_Zone_agro_pastorale_sans_priorit_ZAP_8);
var lyr_Zone_agro_pastorale_sans_priorit_ZAP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_agro_pastorale_sans_priorit_ZAP_8, 
                style: style_Zone_agro_pastorale_sans_priorit_ZAP_8,
                popuplayertitle: "Zone_agro_pastorale_sans_priorité_ZAP",
                interactive: true,
                title: '<img src="styles/legend/Zone_agro_pastorale_sans_priorit_ZAP_8.png" /> Zone_agro_pastorale_sans_priorité_ZAP'
            });
var format_zonage_9 = new ol.format.GeoJSON();
var features_zonage_9 = format_zonage_9.readFeatures(json_zonage_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonage_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonage_9.addFeatures(features_zonage_9);
var lyr_zonage_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonage_9, 
                style: style_zonage_9,
                popuplayertitle: "zonage",
                interactive: true,
                title: '<img src="styles/legend/zonage_9.png" /> zonage'
            });
var format_T100_RouteNat_latmingue_10 = new ol.format.GeoJSON();
var features_T100_RouteNat_latmingue_10 = format_T100_RouteNat_latmingue_10.readFeatures(json_T100_RouteNat_latmingue_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_RouteNat_latmingue_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_RouteNat_latmingue_10.addFeatures(features_T100_RouteNat_latmingue_10);
var lyr_T100_RouteNat_latmingue_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_RouteNat_latmingue_10, 
                style: style_T100_RouteNat_latmingue_10,
                popuplayertitle: "T100_RouteNat_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T100_RouteNat_latmingue_10.png" /> T100_RouteNat_latmingue'
            });
var format_T100_RouteReg_latmingue_11 = new ol.format.GeoJSON();
var features_T100_RouteReg_latmingue_11 = format_T100_RouteReg_latmingue_11.readFeatures(json_T100_RouteReg_latmingue_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_RouteReg_latmingue_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_RouteReg_latmingue_11.addFeatures(features_T100_RouteReg_latmingue_11);
var lyr_T100_RouteReg_latmingue_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_RouteReg_latmingue_11, 
                style: style_T100_RouteReg_latmingue_11,
                popuplayertitle: "T100_RouteReg_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T100_RouteReg_latmingue_11.png" /> T100_RouteReg_latmingue'
            });
var format_T40_RouteDep_latmingue_12 = new ol.format.GeoJSON();
var features_T40_RouteDep_latmingue_12 = format_T40_RouteDep_latmingue_12.readFeatures(json_T40_RouteDep_latmingue_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T40_RouteDep_latmingue_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T40_RouteDep_latmingue_12.addFeatures(features_T40_RouteDep_latmingue_12);
var lyr_T40_RouteDep_latmingue_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T40_RouteDep_latmingue_12, 
                style: style_T40_RouteDep_latmingue_12,
                popuplayertitle: "T40_RouteDep_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T40_RouteDep_latmingue_12.png" /> T40_RouteDep_latmingue'
            });
var format_Fort_classe_13 = new ol.format.GeoJSON();
var features_Fort_classe_13 = format_Fort_classe_13.readFeatures(json_Fort_classe_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fort_classe_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fort_classe_13.addFeatures(features_Fort_classe_13);
var lyr_Fort_classe_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fort_classe_13, 
                style: style_Fort_classe_13,
                popuplayertitle: "Forêt_classée",
                interactive: true,
                title: '<img src="styles/legend/Fort_classe_13.png" /> Forêt_classée'
            });
var format_T100_eau_latmingue_14 = new ol.format.GeoJSON();
var features_T100_eau_latmingue_14 = format_T100_eau_latmingue_14.readFeatures(json_T100_eau_latmingue_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T100_eau_latmingue_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T100_eau_latmingue_14.addFeatures(features_T100_eau_latmingue_14);
var lyr_T100_eau_latmingue_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T100_eau_latmingue_14, 
                style: style_T100_eau_latmingue_14,
                popuplayertitle: "T100_eau_latmingue",
                interactive: true,
                title: '<img src="styles/legend/T100_eau_latmingue_14.png" /> T100_eau_latmingue'
            });
var format_EAU_15 = new ol.format.GeoJSON();
var features_EAU_15 = format_EAU_15.readFeatures(json_EAU_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAU_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EAU_15.addFeatures(features_EAU_15);
var lyr_EAU_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EAU_15, 
                style: style_EAU_15,
                popuplayertitle: "EAU",
                interactive: true,
                title: '<img src="styles/legend/EAU_15.png" /> EAU'
            });
var format_Carrire_16 = new ol.format.GeoJSON();
var features_Carrire_16 = format_Carrire_16.readFeatures(json_Carrire_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrire_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carrire_16.addFeatures(features_Carrire_16);
var lyr_Carrire_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carrire_16, 
                style: style_Carrire_16,
                popuplayertitle: "Carriére",
                interactive: true,
                title: '<img src="styles/legend/Carrire_16.png" /> Carriére'
            });
var format_Rseau_Routier_17 = new ol.format.GeoJSON();
var features_Rseau_Routier_17 = format_Rseau_Routier_17.readFeatures(json_Rseau_Routier_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseau_Routier_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseau_Routier_17.addFeatures(features_Rseau_Routier_17);
var lyr_Rseau_Routier_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseau_Routier_17, 
                style: style_Rseau_Routier_17,
                popuplayertitle: "Réseau_Routier",
                interactive: true,
    title: 'Réseau_Routier<br />\
    <img src="styles/legend/Rseau_Routier_17_0.png" /> Piste<br />\
    <img src="styles/legend/Rseau_Routier_17_1.png" /> Route départementale<br />\
    <img src="styles/legend/Rseau_Routier_17_2.png" /> Route nationale bitumée<br />\
    <img src="styles/legend/Rseau_Routier_17_3.png" /> Route régionale<br />'
        });
var format_TF_latmingue_18 = new ol.format.GeoJSON();
var features_TF_latmingue_18 = format_TF_latmingue_18.readFeatures(json_TF_latmingue_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TF_latmingue_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TF_latmingue_18.addFeatures(features_TF_latmingue_18);
var lyr_TF_latmingue_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TF_latmingue_18, 
                style: style_TF_latmingue_18,
                popuplayertitle: "TF_latmingue",
                interactive: true,
                title: '<img src="styles/legend/TF_latmingue_18.png" /> TF_latmingue'
            });
var format_INFRASTRUCTURES_19 = new ol.format.GeoJSON();
var features_INFRASTRUCTURES_19 = format_INFRASTRUCTURES_19.readFeatures(json_INFRASTRUCTURES_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUCTURES_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUCTURES_19.addFeatures(features_INFRASTRUCTURES_19);
var lyr_INFRASTRUCTURES_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUCTURES_19,
maxResolution:14.00223307613098,
 
                style: style_INFRASTRUCTURES_19,
                popuplayertitle: "INFRASTRUCTURES",
                interactive: true,
                title: '<img src="styles/legend/INFRASTRUCTURES_19.png" /> INFRASTRUCTURES'
            });
var format_Localit_20 = new ol.format.GeoJSON();
var features_Localit_20 = format_Localit_20.readFeatures(json_Localit_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_20.addFeatures(features_Localit_20);
var lyr_Localit_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_20, 
                style: style_Localit_20,
                popuplayertitle: "Localité",
                interactive: true,
                title: '<img src="styles/legend/Localit_20.png" /> Localité'
            });
var format_bornes_parcelles_latmingue_21 = new ol.format.GeoJSON();
var features_bornes_parcelles_latmingue_21 = format_bornes_parcelles_latmingue_21.readFeatures(json_bornes_parcelles_latmingue_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bornes_parcelles_latmingue_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bornes_parcelles_latmingue_21.addFeatures(features_bornes_parcelles_latmingue_21);
var lyr_bornes_parcelles_latmingue_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bornes_parcelles_latmingue_21,
maxResolution:1.4002233076130983,
 
                style: style_bornes_parcelles_latmingue_21,
                popuplayertitle: "bornes_parcelles_latmingue",
                interactive: true,
                title: '<img src="styles/legend/bornes_parcelles_latmingue_21.png" /> bornes_parcelles_latmingue'
            });
var format_Parcelles_latmingue_22 = new ol.format.GeoJSON();
var features_Parcelles_latmingue_22 = format_Parcelles_latmingue_22.readFeatures(json_Parcelles_latmingue_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_latmingue_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_latmingue_22.addFeatures(features_Parcelles_latmingue_22);
var lyr_Parcelles_latmingue_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelles_latmingue_22, 
                style: style_Parcelles_latmingue_22,
                popuplayertitle: "Parcelles_latmingue",
                interactive: true,
    title: 'Parcelles_latmingue<br />\
    <img src="styles/legend/Parcelles_latmingue_22_0.png" /> Aucun empiettement<br />\
    <img src="styles/legend/Parcelles_latmingue_22_1.png" /> Empiettement<br />'
        });
var group_Parcelles = new ol.layer.Group({
                                layers: [lyr_bornes_parcelles_latmingue_21,lyr_Parcelles_latmingue_22,],
                                fold: "open",
                                title: "Parcelles"});
var group_LATMINGUE = new ol.layer.Group({
                                layers: [lyr_INFRASTRUCTURES_19,lyr_Localit_20,],
                                fold: "open",
                                title: "LATMINGUE"});
var group_Statutdesterres = new ol.layer.Group({
                                layers: [lyr_Fort_classe_13,lyr_T100_eau_latmingue_14,lyr_EAU_15,lyr_Carrire_16,lyr_Rseau_Routier_17,lyr_TF_latmingue_18,],
                                fold: "open",
                                title: "Statut des terres"});
var group_Emprisereseauroutier = new ol.layer.Group({
                                layers: [lyr_T100_RouteNat_latmingue_10,lyr_T100_RouteReg_latmingue_11,lyr_T40_RouteDep_latmingue_12,],
                                fold: "open",
                                title: "Emprise reseau routier"});
var group_POAS = new ol.layer.Group({
                                layers: [lyr_Mare_0,lyr_T50_mare_latmingue_1,lyr_Piste_de_btail_2,lyr_T100_Piste_betails_latmingue_3,lyr_Piste_de_production_4,lyr_Zone_Habitation_ZH_5,lyr_Zone_pastorale_ZP_6,lyr_ZMD__Zone_de_mise_en_dfens__7,lyr_Zone_agro_pastorale_sans_priorit_ZAP_8,lyr_zonage_9,],
                                fold: "open",
                                title: "POAS"});
var group_Font = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Font"});
var group_SCADT = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SCADT"});
var group_OssatureSCADTHorizon2048INFSanitaires = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ossature SCADT Horizon 2048 INF Sanitaires"});
var group_OssatureSCADTHorizon2048INFScolaires = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ossature SCADT Horizon 2048 INF Scolaires"});
var group_OssatureSCADTHorizon2048INFReseauroutier = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ossature SCADT Horizon 2048 INF Reseau routier"});
var group_Occdusol = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Occ du sol"});
var group_Hydrographie = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Hydrographie"});

lyr_Mare_0.setVisible(true);lyr_T50_mare_latmingue_1.setVisible(true);lyr_Piste_de_btail_2.setVisible(true);lyr_T100_Piste_betails_latmingue_3.setVisible(true);lyr_Piste_de_production_4.setVisible(true);lyr_Zone_Habitation_ZH_5.setVisible(true);lyr_Zone_pastorale_ZP_6.setVisible(true);lyr_ZMD__Zone_de_mise_en_dfens__7.setVisible(true);lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.setVisible(true);lyr_zonage_9.setVisible(true);lyr_T100_RouteNat_latmingue_10.setVisible(true);lyr_T100_RouteReg_latmingue_11.setVisible(true);lyr_T40_RouteDep_latmingue_12.setVisible(true);lyr_Fort_classe_13.setVisible(true);lyr_T100_eau_latmingue_14.setVisible(true);lyr_EAU_15.setVisible(true);lyr_Carrire_16.setVisible(true);lyr_Rseau_Routier_17.setVisible(true);lyr_TF_latmingue_18.setVisible(true);lyr_INFRASTRUCTURES_19.setVisible(true);lyr_Localit_20.setVisible(true);lyr_bornes_parcelles_latmingue_21.setVisible(true);lyr_Parcelles_latmingue_22.setVisible(true);
var layersList = [group_POAS,group_Emprisereseauroutier,group_Statutdesterres,group_LATMINGUE,group_Parcelles];
lyr_Mare_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid': 'objectid', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'nom_mare': 'nom_mare', 'zonage': 'zonage', 'commune': 'commune', });
lyr_T50_mare_latmingue_1.set('fieldAliases', {'objectid': 'objectid', 'objectid_1': 'objectid_1', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'nom_mare': 'nom_mare', 'zonage': 'zonage', 'commune': 'commune', });
lyr_Piste_de_btail_2.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'descriptif': 'descriptif', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', });
lyr_T100_Piste_betails_latmingue_3.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'descriptif': 'descriptif', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', });
lyr_Piste_de_production_4.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'descriptif': 'descriptif', 'shape_leng': 'shape_leng', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', });
lyr_Zone_Habitation_ZH_5.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'descriptif': 'descriptif', });
lyr_Zone_pastorale_ZP_6.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'localisati': 'localisati', 'descriptif': 'descriptif', });
lyr_ZMD__Zone_de_mise_en_dfens__7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid': 'objectid', 'id': 'id', 'surface': 'surface', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'zonage': 'zonage', 'type': 'type', });
lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'descriptif': 'descriptif', });
lyr_zonage_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'zonage': 'zonage', });
lyr_T100_RouteNat_latmingue_10.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_T100_RouteReg_latmingue_11.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_T40_RouteDep_latmingue_12.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_Fort_classe_13.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'nom': 'nom', 'surface': 'surface', 'descriptif': 'descriptif', });
lyr_T100_eau_latmingue_14.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'surface_ha': 'surface_ha', });
lyr_EAU_15.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'surface_ha': 'surface_ha', });
lyr_Carrire_16.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'localisati': 'localisati', 'type': 'type', });
lyr_Rseau_Routier_17.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'code': 'code', 'classe': 'classe', 'revet': 'revet', 'repert': 'repert', 'numroute1': 'numroute1', 'numroute2': 'numroute2', 'datanum': 'datanum', 'theme': 'theme', 'pays': 'pays', 'iduu': 'iduu', 'shape_leng': 'shape_leng', 'nom_agerou': 'nom_agerou', 'type': 'type', 'shape_le_1': 'shape_le_1', 'descriptif': 'descriptif', 'toponymie': 'toponymie', 'shape_stle': 'shape_stle', 'shape_le_2': 'shape_le_2', });
lyr_TF_latmingue_18.set('fieldAliases', {'id': 'id', 'nomination': 'nomination', 'tf': 'tf', 'commune': 'commune', 'surface': 'surface', });
lyr_INFRASTRUCTURES_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'id': 'id', 'toponymie': 'toponymie', 'descriptif': 'descriptif', 'reg': 'reg', 'dept': 'dept', 'cav': 'cav', 'ccrca': 'ccrca', 'thematique': 'thematique', 'qrt_vlg_ha': 'qrt_vlg_ha', 'long_': 'long_', 'lat': 'lat', 'annee_ref': 'annee_ref', 'annee_maj': 'annee_maj', 'operation': 'operation', 'cod_reg': 'cod_reg', 'cod_dept': 'cod_dept', 'cod_cav': 'cod_cav', 'cod_ccrca': 'cod_ccrca', });
lyr_Localit_20.set('fieldAliases', {'id': 'id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'code': 'code', 'region': 'region', 'departemen': 'departemen', 'arrondisse': 'arrondisse', 'commune': 'commune', 'localite': 'localite', 'type': 'type', });
lyr_bornes_parcelles_latmingue_21.set('fieldAliases', {'id': 'id', 'points': 'POINTS', 'village': 'village', 'commune': 'commune', 'x': 'x', 'y': 'y', 'exclusion': 'exclusion', 'layer': 'layer', 'path': 'path', 'x_1': 'x_1', 'y_1': 'y_1', 'exclusio_1': 'exclusio_1', 'X': 'X', 'Y': 'Y', 'EXCLUSION': 'EXCLUSION', });
lyr_Parcelles_latmingue_22.set('fieldAliases', {'id': 'Numéro', 'village': 'VILLAGE', 'area': 'Superficie en ha', 'superficie': 'superficie', 'commune': 'COMMUNE', 'lignes_per': 'Périmètre', 'gie': 'Prénoms et nom', 'area ha': 'Superficie en ha', 'intersect': 'Vocation', 'demande': 'Plan', 'scan': 'Demande', 'date_deman': 'Date de la demande', 'auteur': 'auteur', 'zone': 'zone', 'plan': 'plan', 'niveau': 'niveau', 'test': 'validity', 'longueur': 'longueur', 'piste_beta': 'piste_beta', 'mare': 'mare', 'filtre': 'filtre', 'limitcom': 'limitcom', 'inoutlimit': 'inoutlimit', 'type_deman': 'type_deman', 'sexe': 'Sexe', 'adresse': 'adresse', 'nationalit': 'nationalit', 'id_deman': 'NICAD', 'usage': 'usage', 'code': 'NICAD PROVISOIRE', 'number': 'number', 'tf': 'TF', 'ap': 'ap', 'rd': 'rd', 'rn': 'rn', 'pv mission': 'pv mission', 'ordre de m': 'ordre de m', 'compte ren': 'compte ren', 'extrait de': 'extrait de', 'scan deman': 'scan deman', 'piste_be_1': 'piste_be_1', 'mare_1': 'mare_1', 'filtre_1': 'filtre_1', 'limitcom_1': 'limitcom_1', 'inoutlim_1': 'inoutlim_1', 'numzone': 'numzone', 'RR': 'RR', 'parc_emp': 'parc_emp', 'type_procedure': 'Procédure', 'type_demande': 'Type de demande', 'type_demandeur': 'Type de demandeur', 'nom_demandeur': 'Nom', 'date_naissance': 'Date de naissance', 'lieu_naissance': 'Lieu de naissance', 'cni': 'N° CNI', 'adresse_residence': 'Adresse de residence', 'telephone': 'Téléphone', 'email': 'E-mail', 'type_nom': 'Type / Nom', 'siege_social': 'Siège social', 'date_crea': 'Date de création', 'num_iden': 'N° identification', 'type_iden': 'Type N° identification', 'autre_type_iden': 'Autre Type N° identification', 'nom_rep': 'Nom représentant', 'titre_rep': 'rTitre eprésentant', 'adresse_reo': 'adresse_reo', 'telephone_rep': 'Téléphone représentant', 'email_rep': 'E-mail représentant', 'adresse_rep': 'Adresse représentant', 'Q_justificatif': 'Justificatif', 'Q_Personne': 'Personne', 'Q_prenom_nom': 'Prénom Nom', 'Q_date_naissance': 'Date de naissance', 'Q_lieu_naissance': 'Lieu de naissance', 'Q_sexe': 'Sexe', 'Q_cni': 'N° CNI', 'Q_nationalite': 'Nationalité', 'Q_lieu_residece': 'Lieu de résidence', 'Q_sit_matrimo': 'Situation matrimoniale', 'Q_nbre_enf': 'Nombre d\'enfants', 'Q_nbre_epouse': 'Nombre d\'épouses', 'Q_telephone': 'N° Téléphone', 'Q_gestion': 'Gestion', 'Q_dept': 'Département', 'Q_commune': 'Commune', 'Q_village': 'Village', 'Q_hameau': 'Hameau', 'Q_superficie_ha': 'Superficie (ha)', 'Q_Centoide': 'Centroïde', 'Q_Mode_acces': 'Mode d\'accès', 'Q_autremodeacces': 'Autre mode d\'accès', 'Q_decision': 'Décision', 'Q_img_decision': 'Photo décision', 'Q_delivrance_decision': 'Délivrance décision', 'Q_date_delivrance': 'Date de délivrance', 'Q_num_decision': 'N° décision', 'Q_sup_affectee_ha': 'Superficie (ha)', 'Q_installation': 'Installation', 'Q_date_install': 'Date d\'installation', 'Q_Frais_bornage': 'Frais de bornage', 'Q_montant_fbornage': 'Montant frais de bornage', 'Q_regular_cours': 'Régularisation en cours', 'Q_transact_fonciere': 'Transaction foncière', 'Q_date_transac': 'Date transaction foncière', 'Q_aqui_transac': 'Transaction avec qui', 'Q_cout_transac': 'Coût de la transaction', 'Q_usage_exploitant': 'Usage exploitant', 'Q_autre_usage': 'Autre usage exploitant', 'Q_mode_exp': 'Mode d\'exploitation', 'Q_sifairevaloirdirect': 'Si faire valoir direct', 'Q_autre_m6ode_exp': 'Autre mode exploitation', 'Q_amenagement': 'Amenagement', 'Q_Financement': 'Financement', 'Q_limit_mat': 'limite matérialisée', 'Q_conflit': 'Conflit', 'Q_resolution': 'Résolution', 'Q_mediation': 'Médiation', 'Q_comments_conflit': 'Commentaire conflit', 'Q_prenom_nom_exp': 'Prénom Nom Exploitant', 'Q_prenom_nom_rep_exp': 'Prénom nom représentant Exploitant', 'Q_lien_rep_exp': 'Lien entre Représentant et Exploitant', 'Q_partcom1': 'Participant 1 Commune (Prénom, nom et Fonction)', 'Q_partcom2': 'Participant 2 Commune (Prénom, nom et Fonction)', 'Q_partcom3': 'Participant 3 Commune (Prénom, nom et Fonction)', 'Q_partvillage1': 'Participant 1 Village (Prénom, nom et Fonction)', 'Q_partvillage2': 'Participant 2 Village (Prénom, nom et Fonction)', 'Q_partvillage3': 'Participant 3 Village (Prénom, nom et Fonction)', 'Q_partvillage4': 'Participant 4 Village (Prénom, nom et Fonction)', 'Q_autrepart1': 'Autre Participant 1 (Prénom, nom et Fonction)', 'Q_autrepart2': 'Autre Participant 2 (Prénom, nom et Fonction)', 'Q_autrepart3': 'Autre Participant 3 (Prénom, nom et Fonction)', 'Piste_beta': 'Piste de bétais', 'Mare': 'Mare', 'Filtre': 'Décision', 'LimitCom': 'LimitCom', 'InOutLimitCom': 'InOutLimitCom', 'NUMZONE': 'NUMZONE', });
lyr_Mare_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'nom_mare': 'TextEdit', 'zonage': 'TextEdit', 'commune': 'TextEdit', });
lyr_T50_mare_latmingue_1.set('fieldImages', {'objectid': 'TextEdit', 'objectid_1': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'nom_mare': 'TextEdit', 'zonage': 'TextEdit', 'commune': 'TextEdit', });
lyr_Piste_de_btail_2.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'descriptif': 'TextEdit', 'shape_leng': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', });
lyr_T100_Piste_betails_latmingue_3.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'descriptif': 'TextEdit', 'shape_leng': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', });
lyr_Piste_de_production_4.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'descriptif': 'TextEdit', 'shape_leng': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', });
lyr_Zone_Habitation_ZH_5.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_Zone_pastorale_ZP_6.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'localisati': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_ZMD__Zone_de_mise_en_dfens__7.set('fieldImages', {'OBJECTID': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'surface': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'zonage': 'TextEdit', 'type': 'TextEdit', });
lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_zonage_9.set('fieldImages', {'OBJECTID': 'Range', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'zonage': 'TextEdit', });
lyr_T100_RouteNat_latmingue_10.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_T100_RouteReg_latmingue_11.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_T40_RouteDep_latmingue_12.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_Fort_classe_13.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'nom': 'TextEdit', 'surface': 'TextEdit', 'descriptif': 'TextEdit', });
lyr_T100_eau_latmingue_14.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'surface_ha': 'TextEdit', });
lyr_EAU_15.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'surface_ha': 'TextEdit', });
lyr_Carrire_16.set('fieldImages', {'objectid': 'TextEdit', 'id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'localisati': 'TextEdit', 'type': 'TextEdit', });
lyr_Rseau_Routier_17.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'classe': 'TextEdit', 'revet': 'TextEdit', 'repert': 'TextEdit', 'numroute1': 'TextEdit', 'numroute2': 'TextEdit', 'datanum': 'TextEdit', 'theme': 'TextEdit', 'pays': 'TextEdit', 'iduu': 'TextEdit', 'shape_leng': 'TextEdit', 'nom_agerou': 'TextEdit', 'type': 'TextEdit', 'shape_le_1': 'TextEdit', 'descriptif': 'TextEdit', 'toponymie': 'TextEdit', 'shape_stle': 'TextEdit', 'shape_le_2': 'TextEdit', });
lyr_TF_latmingue_18.set('fieldImages', {'id': 'TextEdit', 'nomination': 'TextEdit', 'tf': 'TextEdit', 'commune': 'TextEdit', 'surface': 'TextEdit', });
lyr_INFRASTRUCTURES_19.set('fieldImages', {'OBJECTID': 'Range', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'toponymie': 'TextEdit', 'descriptif': 'TextEdit', 'reg': 'TextEdit', 'dept': 'TextEdit', 'cav': 'TextEdit', 'ccrca': 'TextEdit', 'thematique': 'TextEdit', 'qrt_vlg_ha': 'TextEdit', 'long_': 'TextEdit', 'lat': 'TextEdit', 'annee_ref': 'TextEdit', 'annee_maj': 'TextEdit', 'operation': 'TextEdit', 'cod_reg': 'TextEdit', 'cod_dept': 'TextEdit', 'cod_cav': 'TextEdit', 'cod_ccrca': 'TextEdit', });
lyr_Localit_20.set('fieldImages', {'id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'code': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'arrondisse': 'TextEdit', 'commune': 'TextEdit', 'localite': 'TextEdit', 'type': 'TextEdit', });
lyr_bornes_parcelles_latmingue_21.set('fieldImages', {'id': 'TextEdit', 'points': 'TextEdit', 'village': 'TextEdit', 'commune': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'exclusion': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'x_1': 'TextEdit', 'y_1': 'TextEdit', 'exclusio_1': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'EXCLUSION': 'TextEdit', });
lyr_Parcelles_latmingue_22.set('fieldImages', {'id': 'TextEdit', 'village': 'ValueMap', 'area': 'TextEdit', 'superficie': 'TextEdit', 'commune': 'TextEdit', 'lignes_per': 'TextEdit', 'gie': 'TextEdit', 'area ha': 'TextEdit', 'intersect': 'ValueRelation', 'demande': 'ExternalResource', 'scan': 'Hidden', 'date_deman': 'DateTime', 'auteur': 'TextEdit', 'zone': 'TextEdit', 'plan': 'TextEdit', 'niveau': 'TextEdit', 'test': 'ValueRelation', 'longueur': 'TextEdit', 'piste_beta': 'TextEdit', 'mare': 'TextEdit', 'filtre': 'TextEdit', 'limitcom': 'TextEdit', 'inoutlimit': 'TextEdit', 'type_deman': 'TextEdit', 'sexe': 'TextEdit', 'adresse': 'TextEdit', 'nationalit': 'TextEdit', 'id_deman': 'TextEdit', 'usage': 'ValueMap', 'code': 'TextEdit', 'number': 'Range', 'tf': 'TextEdit', 'ap': 'TextEdit', 'rd': 'TextEdit', 'rn': 'TextEdit', 'pv mission': 'TextEdit', 'ordre de m': 'TextEdit', 'compte ren': 'TextEdit', 'extrait de': 'TextEdit', 'scan deman': 'TextEdit', 'piste_be_1': 'TextEdit', 'mare_1': 'TextEdit', 'filtre_1': 'TextEdit', 'limitcom_1': 'TextEdit', 'inoutlim_1': 'TextEdit', 'numzone': 'TextEdit', 'RR': 'TextEdit', 'parc_emp': 'TextEdit', 'type_procedure': 'ValueMap', 'type_demande': 'ValueMap', 'type_demandeur': 'ValueMap', 'nom_demandeur': 'TextEdit', 'date_naissance': 'DateTime', 'lieu_naissance': 'TextEdit', 'cni': 'TextEdit', 'adresse_residence': 'TextEdit', 'telephone': 'TextEdit', 'email': 'TextEdit', 'type_nom': 'TextEdit', 'siege_social': 'TextEdit', 'date_crea': 'DateTime', 'num_iden': 'TextEdit', 'type_iden': 'TextEdit', 'autre_type_iden': 'TextEdit', 'nom_rep': 'TextEdit', 'titre_rep': 'TextEdit', 'adresse_reo': 'TextEdit', 'telephone_rep': 'TextEdit', 'email_rep': 'TextEdit', 'adresse_rep': 'TextEdit', 'Q_justificatif': 'TextEdit', 'Q_Personne': 'ValueMap', 'Q_prenom_nom': 'TextEdit', 'Q_date_naissance': 'DateTime', 'Q_lieu_naissance': 'TextEdit', 'Q_sexe': 'ValueMap', 'Q_cni': 'TextEdit', 'Q_nationalite': 'TextEdit', 'Q_lieu_residece': 'TextEdit', 'Q_sit_matrimo': 'ValueMap', 'Q_nbre_enf': 'Range', 'Q_nbre_epouse': 'Range', 'Q_telephone': 'Range', 'Q_gestion': 'ValueMap', 'Q_dept': 'Range', 'Q_commune': 'Range', 'Q_village': 'Range', 'Q_hameau': 'Range', 'Q_superficie_ha': 'TextEdit', 'Q_Centoide': 'Range', 'Q_Mode_acces': 'TextEdit', 'Q_autremodeacces': 'TextEdit', 'Q_decision': 'TextEdit', 'Q_img_decision': 'TextEdit', 'Q_delivrance_decision': 'TextEdit', 'Q_date_delivrance': 'DateTime', 'Q_num_decision': 'TextEdit', 'Q_sup_affectee_ha': 'TextEdit', 'Q_installation': 'CheckBox', 'Q_date_install': 'DateTime', 'Q_Frais_bornage': 'CheckBox', 'Q_montant_fbornage': 'Range', 'Q_regular_cours': 'ValueMap', 'Q_transact_fonciere': 'CheckBox', 'Q_date_transac': 'DateTime', 'Q_aqui_transac': 'TextEdit', 'Q_cout_transac': 'Range', 'Q_usage_exploitant': 'Range', 'Q_autre_usage': 'TextEdit', 'Q_mode_exp': 'TextEdit', 'Q_sifairevaloirdirect': 'CheckBox', 'Q_autre_m6ode_exp': 'TextEdit', 'Q_amenagement': 'CheckBox', 'Q_Financement': 'CheckBox', 'Q_limit_mat': 'CheckBox', 'Q_conflit': 'CheckBox', 'Q_resolution': 'CheckBox', 'Q_mediation': 'CheckBox', 'Q_comments_conflit': 'TextEdit', 'Q_prenom_nom_exp': 'TextEdit', 'Q_prenom_nom_rep_exp': 'TextEdit', 'Q_lien_rep_exp': 'TextEdit', 'Q_partcom1': 'TextEdit', 'Q_partcom2': 'TextEdit', 'Q_partcom3': 'TextEdit', 'Q_partvillage1': 'TextEdit', 'Q_partvillage2': 'TextEdit', 'Q_partvillage3': 'TextEdit', 'Q_partvillage4': 'TextEdit', 'Q_autrepart1': 'TextEdit', 'Q_autrepart2': 'TextEdit', 'Q_autrepart3': 'TextEdit', 'Piste_beta': 'TextEdit', 'Mare': 'TextEdit', 'Filtre': 'TextEdit', 'LimitCom': 'TextEdit', 'InOutLimitCom': 'TextEdit', 'NUMZONE': 'TextEdit', });
lyr_Mare_0.set('fieldLabels', {'OBJECTID': 'no label', 'objectid': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'nom_mare': 'no label', 'zonage': 'no label', 'commune': 'no label', });
lyr_T50_mare_latmingue_1.set('fieldLabels', {'objectid': 'no label', 'objectid_1': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'nom_mare': 'no label', 'zonage': 'no label', 'commune': 'no label', });
lyr_Piste_de_btail_2.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'descriptif': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', });
lyr_T100_Piste_betails_latmingue_3.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'descriptif': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', });
lyr_Piste_de_production_4.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'descriptif': 'no label', 'shape_leng': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', });
lyr_Zone_Habitation_ZH_5.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'descriptif': 'no label', });
lyr_Zone_pastorale_ZP_6.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'localisati': 'no label', 'descriptif': 'no label', });
lyr_ZMD__Zone_de_mise_en_dfens__7.set('fieldLabels', {'OBJECTID': 'no label', 'objectid': 'no label', 'id': 'no label', 'surface': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'zonage': 'no label', 'type': 'no label', });
lyr_Zone_agro_pastorale_sans_priorit_ZAP_8.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'descriptif': 'no label', });
lyr_zonage_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'objectid_1': 'hidden field', 'objectid': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'arrondisse': 'hidden field', 'commune': 'hidden field', 'zonage': 'header label - visible with data', });
lyr_T100_RouteNat_latmingue_10.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_T100_RouteReg_latmingue_11.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_T40_RouteDep_latmingue_12.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_Fort_classe_13.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'nom': 'no label', 'surface': 'no label', 'descriptif': 'no label', });
lyr_T100_eau_latmingue_14.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'surface_ha': 'no label', });
lyr_EAU_15.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'surface_ha': 'no label', });
lyr_Carrire_16.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'localisati': 'no label', 'type': 'no label', });
lyr_Rseau_Routier_17.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'code': 'no label', 'classe': 'no label', 'revet': 'no label', 'repert': 'no label', 'numroute1': 'no label', 'numroute2': 'no label', 'datanum': 'no label', 'theme': 'no label', 'pays': 'no label', 'iduu': 'no label', 'shape_leng': 'no label', 'nom_agerou': 'no label', 'type': 'no label', 'shape_le_1': 'no label', 'descriptif': 'no label', 'toponymie': 'no label', 'shape_stle': 'no label', 'shape_le_2': 'no label', });
lyr_TF_latmingue_18.set('fieldLabels', {'id': 'no label', 'nomination': 'no label', 'tf': 'no label', 'commune': 'no label', 'surface': 'no label', });
lyr_INFRASTRUCTURES_19.set('fieldLabels', {'OBJECTID': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'id': 'no label', 'toponymie': 'no label', 'descriptif': 'no label', 'reg': 'no label', 'dept': 'no label', 'cav': 'no label', 'ccrca': 'no label', 'thematique': 'no label', 'qrt_vlg_ha': 'no label', 'long_': 'no label', 'lat': 'no label', 'annee_ref': 'no label', 'annee_maj': 'no label', 'operation': 'no label', 'cod_reg': 'no label', 'cod_dept': 'no label', 'cod_cav': 'no label', 'cod_ccrca': 'no label', });
lyr_Localit_20.set('fieldLabels', {'id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'code': 'no label', 'region': 'no label', 'departemen': 'no label', 'arrondisse': 'no label', 'commune': 'no label', 'localite': 'no label', 'type': 'no label', });
lyr_bornes_parcelles_latmingue_21.set('fieldLabels', {'id': 'no label', 'points': 'no label', 'village': 'no label', 'commune': 'no label', 'x': 'no label', 'y': 'no label', 'exclusion': 'no label', 'layer': 'no label', 'path': 'no label', 'x_1': 'no label', 'y_1': 'no label', 'exclusio_1': 'no label', 'X': 'no label', 'Y': 'no label', 'EXCLUSION': 'no label', });
lyr_Parcelles_latmingue_22.set('fieldLabels', {'id': 'no label', 'village': 'no label', 'area': 'no label', 'superficie': 'no label', 'commune': 'no label', 'lignes_per': 'no label', 'gie': 'no label', 'area ha': 'no label', 'intersect': 'no label', 'demande': 'no label', 'date_deman': 'no label', 'auteur': 'no label', 'zone': 'no label', 'plan': 'no label', 'niveau': 'no label', 'test': 'no label', 'longueur': 'no label', 'piste_beta': 'no label', 'mare': 'no label', 'filtre': 'no label', 'limitcom': 'no label', 'inoutlimit': 'no label', 'type_deman': 'no label', 'sexe': 'no label', 'adresse': 'no label', 'nationalit': 'no label', 'id_deman': 'no label', 'usage': 'no label', 'code': 'no label', 'number': 'no label', 'tf': 'no label', 'ap': 'no label', 'rd': 'no label', 'rn': 'no label', 'pv mission': 'no label', 'ordre de m': 'no label', 'compte ren': 'no label', 'extrait de': 'no label', 'scan deman': 'no label', 'piste_be_1': 'no label', 'mare_1': 'no label', 'filtre_1': 'no label', 'limitcom_1': 'no label', 'inoutlim_1': 'no label', 'numzone': 'no label', 'RR': 'no label', 'parc_emp': 'no label', 'type_procedure': 'no label', 'type_demande': 'no label', 'type_demandeur': 'no label', 'nom_demandeur': 'no label', 'date_naissance': 'no label', 'lieu_naissance': 'no label', 'cni': 'no label', 'adresse_residence': 'no label', 'telephone': 'no label', 'email': 'no label', 'type_nom': 'no label', 'siege_social': 'no label', 'date_crea': 'no label', 'num_iden': 'no label', 'type_iden': 'no label', 'autre_type_iden': 'no label', 'nom_rep': 'no label', 'titre_rep': 'no label', 'adresse_reo': 'no label', 'telephone_rep': 'no label', 'email_rep': 'no label', 'adresse_rep': 'no label', 'Q_justificatif': 'no label', 'Q_Personne': 'no label', 'Q_prenom_nom': 'no label', 'Q_date_naissance': 'no label', 'Q_lieu_naissance': 'no label', 'Q_sexe': 'no label', 'Q_cni': 'no label', 'Q_nationalite': 'no label', 'Q_lieu_residece': 'no label', 'Q_sit_matrimo': 'no label', 'Q_nbre_enf': 'no label', 'Q_nbre_epouse': 'no label', 'Q_telephone': 'no label', 'Q_gestion': 'no label', 'Q_dept': 'no label', 'Q_commune': 'no label', 'Q_village': 'no label', 'Q_hameau': 'no label', 'Q_superficie_ha': 'no label', 'Q_Centoide': 'no label', 'Q_Mode_acces': 'no label', 'Q_autremodeacces': 'no label', 'Q_decision': 'no label', 'Q_img_decision': 'no label', 'Q_delivrance_decision': 'no label', 'Q_date_delivrance': 'no label', 'Q_num_decision': 'no label', 'Q_sup_affectee_ha': 'no label', 'Q_installation': 'no label', 'Q_date_install': 'no label', 'Q_Frais_bornage': 'no label', 'Q_montant_fbornage': 'no label', 'Q_regular_cours': 'no label', 'Q_transact_fonciere': 'no label', 'Q_date_transac': 'no label', 'Q_aqui_transac': 'no label', 'Q_cout_transac': 'no label', 'Q_usage_exploitant': 'no label', 'Q_autre_usage': 'no label', 'Q_mode_exp': 'no label', 'Q_sifairevaloirdirect': 'no label', 'Q_autre_m6ode_exp': 'no label', 'Q_amenagement': 'no label', 'Q_Financement': 'no label', 'Q_limit_mat': 'no label', 'Q_conflit': 'no label', 'Q_resolution': 'no label', 'Q_mediation': 'no label', 'Q_comments_conflit': 'no label', 'Q_prenom_nom_exp': 'no label', 'Q_prenom_nom_rep_exp': 'no label', 'Q_lien_rep_exp': 'no label', 'Q_partcom1': 'no label', 'Q_partcom2': 'no label', 'Q_partcom3': 'no label', 'Q_partvillage1': 'no label', 'Q_partvillage2': 'no label', 'Q_partvillage3': 'no label', 'Q_partvillage4': 'no label', 'Q_autrepart1': 'no label', 'Q_autrepart2': 'no label', 'Q_autrepart3': 'no label', 'Piste_beta': 'no label', 'Mare': 'no label', 'Filtre': 'no label', 'LimitCom': 'no label', 'InOutLimitCom': 'no label', 'NUMZONE': 'no label', });
lyr_Parcelles_latmingue_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});