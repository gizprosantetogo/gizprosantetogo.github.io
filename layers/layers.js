var wms_layers = [];


        var lyr_MapboxStreetsv10_0 = new ol.layer.Tile({
            'title': 'Mapbox Streets v10',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.mapbox.com/about/maps/">© Mapbox © OpenStreetMap</a>',
                url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
            })
        });

        var lyr_BingAerial_1 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ak.t0.tiles.virtualearth.net/tiles/a{q}.jpeg?n=z&g=5880'
            })
        });

        var lyr_OSMHumanitarian_2 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var format_Districts_sanitaires_3 = new ol.format.GeoJSON();
var features_Districts_sanitaires_3 = format_Districts_sanitaires_3.readFeatures(json_Districts_sanitaires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_sanitaires_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_sanitaires_3.addFeatures(features_Districts_sanitaires_3);
var lyr_Districts_sanitaires_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districts_sanitaires_3, 
                style: style_Districts_sanitaires_3,
                interactive: true,
                title: '<img src="styles/legend/Districts_sanitaires_3.png" /> Districts_sanitaires'
            });
var format_USP_Kara_Accouch_moyen_4 = new ol.format.GeoJSON();
var features_USP_Kara_Accouch_moyen_4 = format_USP_Kara_Accouch_moyen_4.readFeatures(json_USP_Kara_Accouch_moyen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USP_Kara_Accouch_moyen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USP_Kara_Accouch_moyen_4.addFeatures(features_USP_Kara_Accouch_moyen_4);cluster_USP_Kara_Accouch_moyen_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_USP_Kara_Accouch_moyen_4
});
var lyr_USP_Kara_Accouch_moyen_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_USP_Kara_Accouch_moyen_4, 
                style: style_USP_Kara_Accouch_moyen_4,
                interactive: true,
                title: '<img src="styles/legend/USP_Kara_Accouch_moyen_4.png" /> USP_Kara_Accouch_moyen'
            });

lyr_MapboxStreetsv10_0.setVisible(true);lyr_BingAerial_1.setVisible(true);lyr_OSMHumanitarian_2.setVisible(true);lyr_Districts_sanitaires_3.setVisible(true);lyr_USP_Kara_Accouch_moyen_4.setVisible(true);
var layersList = [lyr_MapboxStreetsv10_0,lyr_BingAerial_1,lyr_OSMHumanitarian_2,lyr_Districts_sanitaires_3,lyr_USP_Kara_Accouch_moyen_4];
lyr_Districts_sanitaires_3.set('fieldAliases', {'PAYS': 'PAYS', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'PRéFECTUR': 'PRéFECTUR', });
lyr_USP_Kara_Accouch_moyen_4.set('fieldAliases', {'Code': 'Code', 'prefecture': 'District', 'Type': 'Type', 'Nom': 'Nom', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Denomminat': 'Centre de Santé', '2019': 'Moyenne_Accouchement en 2019', '2020': 'Moyenne_Accouchement en 2020', '2021': 'Moyenne_Accouchement en 2021', });
lyr_Districts_sanitaires_3.set('fieldImages', {'PAYS': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'PERIMETER': 'TextEdit', 'PRéFECTUR': 'TextEdit', });
lyr_USP_Kara_Accouch_moyen_4.set('fieldImages', {'Code': 'Hidden', 'prefecture': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Denomminat': 'Hidden', '2019': 'TextEdit', '2020': 'TextEdit', '2021': 'TextEdit', });
lyr_Districts_sanitaires_3.set('fieldLabels', {'PAYS': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'PERIMETER': 'no label', 'PRéFECTUR': 'inline label', });
lyr_USP_Kara_Accouch_moyen_4.set('fieldLabels', {'Code': 'no label', 'prefecture': 'inline label', 'Type': 'inline label', 'Nom': 'inline label', 'Latitude': 'no label', 'Longitude': 'no label', 'Denomminat': 'no label', '2019': 'inline label', '2020': 'inline label', '2021': 'inline label', });
lyr_USP_Kara_Accouch_moyen_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});