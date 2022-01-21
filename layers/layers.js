var wms_layers = [];


        var lyr_OSMHumanitarian_0 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile-b.openstreetmap.fr/hot/{z}/{x}/{y}.png, http://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png, http://tile-c.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMapmonochrome_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_Region__Togo_2 = new ol.format.GeoJSON();
var features_Region__Togo_2 = format_Region__Togo_2.readFeatures(json_Region__Togo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region__Togo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region__Togo_2.addFeatures(features_Region__Togo_2);
var lyr_Region__Togo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region__Togo_2, 
                style: style_Region__Togo_2,
                interactive: true,
                title: '<img src="styles/legend/Region__Togo_2.png" /> Region__Togo'
            });
var format_Region_kara_3 = new ol.format.GeoJSON();
var features_Region_kara_3 = format_Region_kara_3.readFeatures(json_Region_kara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_kara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_kara_3.addFeatures(features_Region_kara_3);
var lyr_Region_kara_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region_kara_3, 
                style: style_Region_kara_3,
                interactive: true,
                title: '<img src="styles/legend/Region_kara_3.png" /> Region_kara'
            });
var format_District_sanitaire_Kara_4 = new ol.format.GeoJSON();
var features_District_sanitaire_Kara_4 = format_District_sanitaire_Kara_4.readFeatures(json_District_sanitaire_Kara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_sanitaire_Kara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_sanitaire_Kara_4.addFeatures(features_District_sanitaire_Kara_4);
var lyr_District_sanitaire_Kara_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_sanitaire_Kara_4, 
                style: style_District_sanitaire_Kara_4,
                interactive: false,
                title: '<img src="styles/legend/District_sanitaire_Kara_4.png" /> District_sanitaire_Kara'
            });
var format_Routes_5 = new ol.format.GeoJSON();
var features_Routes_5 = format_Routes_5.readFeatures(json_Routes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routes_5.addFeatures(features_Routes_5);
var lyr_Routes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routes_5, 
                style: style_Routes_5,
                interactive: false,
    title: 'Routes<br />\
    <img src="styles/legend/Routes_5_0.png" /> Primaire<br />\
    <img src="styles/legend/Routes_5_1.png" /> Secondaire<br />\
    <img src="styles/legend/Routes_5_2.png" /> Tertiaire<br />'
        });
var format_USP_6 = new ol.format.GeoJSON();
var features_USP_6 = format_USP_6.readFeatures(json_USP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USP_6.addFeatures(features_USP_6);cluster_USP_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_USP_6
});
var lyr_USP_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_USP_6, 
                style: style_USP_6,
                interactive: true,
                title: '<img src="styles/legend/USP_6.png" /> USP'
            });

lyr_OSMHumanitarian_0.setVisible(true);lyr_OpenStreetMapmonochrome_1.setVisible(true);lyr_Region__Togo_2.setVisible(true);lyr_Region_kara_3.setVisible(true);lyr_District_sanitaire_Kara_4.setVisible(true);lyr_Routes_5.setVisible(true);lyr_USP_6.setVisible(true);
var layersList = [lyr_OSMHumanitarian_0,lyr_OpenStreetMapmonochrome_1,lyr_Region__Togo_2,lyr_Region_kara_3,lyr_District_sanitaire_Kara_4,lyr_Routes_5,lyr_USP_6];
lyr_Region__Togo_2.set('fieldAliases', {'REGION': 'REGION', 'CHEF_LIEU': 'CHEF_LIEU', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'NEWFIELD1': 'NEWFIELD1', 'datecov': 'datecov', 'id': 'id', });
lyr_Region_kara_3.set('fieldAliases', {'REGION': 'REGION', 'CHEF_LIEU': 'CHEF_LIEU', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'NEWFIELD1': 'NEWFIELD1', 'datecov': 'datecov', 'id': 'id', });
lyr_District_sanitaire_Kara_4.set('fieldAliases', {'PAYS': 'PAYS', 'AREA': 'AREA', 'ACRES': 'ACRES', 'PERIMETER': 'PERIMETER', 'PRéFECTUR': 'PRéFECTUR', });
lyr_Routes_5.set('fieldAliases', {'osm_id': 'osm_id', 'oneway': 'oneway', 'blockage': 'blockage', 'amenity': 'amenity', 'public_tra': 'public_tra', 'social_fac': 'social_fac', 'railway': 'railway', 'waterway': 'waterway', 'diameter': 'diameter', 'barrier': 'barrier', 'depth': 'depth', 'bridge': 'bridge', 'highway': 'highway', 'name': 'name', 'capacity': 'capacity', 'water': 'water', 'aeroway': 'aeroway', 'natural': 'natural', 'covered': 'covered', 'wheelchair': 'wheelchair', 'man_made': 'man_made', 'building': 'building', 'tunnel': 'tunnel', 'surface': 'surface', 'landuse': 'landuse', 'pump': 'pump', 'smoothness': 'smoothness', 'operator': 'operator', 'parking': 'parking', 'layer': 'layer', 'industrial': 'industrial', 'width': 'width', });
lyr_USP_6.set('fieldAliases', {'Code': 'Code', 'prefecture': 'prefecture', 'Type': 'Type', 'Nom': 'Nom', 'Population': 'Population', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Region__Togo_2.set('fieldImages', {'REGION': 'TextEdit', 'CHEF_LIEU': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'PERIMETER': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'datecov': 'DateTime', 'id': 'Range', });
lyr_Region_kara_3.set('fieldImages', {'REGION': 'TextEdit', 'CHEF_LIEU': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'PERIMETER': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'datecov': 'DateTime', 'id': 'Range', });
lyr_District_sanitaire_Kara_4.set('fieldImages', {'PAYS': 'TextEdit', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'PERIMETER': 'TextEdit', 'PRéFECTUR': 'TextEdit', });
lyr_Routes_5.set('fieldImages', {'osm_id': 'TextEdit', 'oneway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'public_tra': 'TextEdit', 'social_fac': 'TextEdit', 'railway': 'TextEdit', 'waterway': 'TextEdit', 'diameter': 'TextEdit', 'barrier': 'TextEdit', 'depth': 'TextEdit', 'bridge': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'capacity': 'TextEdit', 'water': 'TextEdit', 'aeroway': 'TextEdit', 'natural': 'TextEdit', 'covered': 'TextEdit', 'wheelchair': 'TextEdit', 'man_made': 'TextEdit', 'building': 'TextEdit', 'tunnel': 'TextEdit', 'surface': 'TextEdit', 'landuse': 'TextEdit', 'pump': 'TextEdit', 'smoothness': 'TextEdit', 'operator': 'TextEdit', 'parking': 'TextEdit', 'layer': 'TextEdit', 'industrial': 'TextEdit', 'width': 'TextEdit', });
lyr_USP_6.set('fieldImages', {'Code': 'TextEdit', 'prefecture': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'TextEdit', 'Population': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Region__Togo_2.set('fieldLabels', {'REGION': 'no label', 'CHEF_LIEU': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'PERIMETER': 'no label', 'NEWFIELD1': 'no label', 'datecov': 'no label', 'id': 'no label', });
lyr_Region_kara_3.set('fieldLabels', {'REGION': 'no label', 'CHEF_LIEU': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'PERIMETER': 'no label', 'NEWFIELD1': 'no label', 'datecov': 'no label', 'id': 'no label', });
lyr_District_sanitaire_Kara_4.set('fieldLabels', {'PAYS': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'PERIMETER': 'no label', 'PRéFECTUR': 'no label', });
lyr_Routes_5.set('fieldLabels', {'osm_id': 'no label', 'oneway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'public_tra': 'no label', 'social_fac': 'no label', 'railway': 'no label', 'waterway': 'no label', 'diameter': 'no label', 'barrier': 'no label', 'depth': 'no label', 'bridge': 'no label', 'highway': 'no label', 'name': 'no label', 'capacity': 'no label', 'water': 'no label', 'aeroway': 'no label', 'natural': 'no label', 'covered': 'no label', 'wheelchair': 'no label', 'man_made': 'no label', 'building': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'landuse': 'no label', 'pump': 'no label', 'smoothness': 'no label', 'operator': 'no label', 'parking': 'no label', 'layer': 'no label', 'industrial': 'no label', 'width': 'no label', });
lyr_USP_6.set('fieldLabels', {'Code': 'no label', 'prefecture': 'no label', 'Type': 'no label', 'Nom': 'header label', 'Population': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_USP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});