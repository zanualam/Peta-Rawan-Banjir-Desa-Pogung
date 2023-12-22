var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_3 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_5 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Rawan_Banjir_6 = new ol.format.GeoJSON();
var features_Rawan_Banjir_6 = format_Rawan_Banjir_6.readFeatures(json_Rawan_Banjir_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rawan_Banjir_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rawan_Banjir_6.addFeatures(features_Rawan_Banjir_6);
var lyr_Rawan_Banjir_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rawan_Banjir_6, 
                style: style_Rawan_Banjir_6,
                interactive: true,
    title: 'Rawan_Banjir<br />\
    <img src="styles/legend/Rawan_Banjir_6_0.png" /> Rendah<br />\
    <img src="styles/legend/Rawan_Banjir_6_1.png" /> Sedang<br />\
    <img src="styles/legend/Rawan_Banjir_6_2.png" /> Tinggi<br />'
        });
var format_BatasDesaPogung_7 = new ol.format.GeoJSON();
var features_BatasDesaPogung_7 = format_BatasDesaPogung_7.readFeatures(json_BatasDesaPogung_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaPogung_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaPogung_7.addFeatures(features_BatasDesaPogung_7);
var lyr_BatasDesaPogung_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaPogung_7, 
                style: style_BatasDesaPogung_7,
                interactive: false,
                title: '<img src="styles/legend/BatasDesaPogung_7.png" /> Batas Desa Pogung'
            });

lyr_GoogleTraffic_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleRoad_3.setVisible(true);lyr_GoogleLabels_4.setVisible(true);lyr_GoogleHybrid_5.setVisible(true);lyr_Rawan_Banjir_6.setVisible(true);lyr_BatasDesaPogung_7.setVisible(true);
var layersList = [lyr_GoogleTraffic_0,lyr_GoogleTerrain_1,lyr_GoogleSatellite_2,lyr_GoogleRoad_3,lyr_GoogleLabels_4,lyr_GoogleHybrid_5,lyr_Rawan_Banjir_6,lyr_BatasDesaPogung_7];
lyr_Rawan_Banjir_6.set('fieldAliases', {'Legenda': 'Legenda', });
lyr_BatasDesaPogung_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rawan_Banjir_6.set('fieldImages', {'Legenda': 'TextEdit', });
lyr_BatasDesaPogung_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'KDPKAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Rawan_Banjir_6.set('fieldLabels', {'Legenda': 'header label', });
lyr_BatasDesaPogung_7.set('fieldLabels', {'OBJECTID': 'header label', 'KDPPUM': 'header label', 'NAMOBJ': 'header label', 'REMARK': 'header label', 'KDPBPS': 'header label', 'FCODE': 'header label', 'LUASWH': 'header label', 'UUPP': 'header label', 'SRS_ID': 'header label', 'METADATA': 'header label', 'KDEBPS': 'header label', 'KDEPUM': 'header label', 'KDCBPS': 'header label', 'KDCPUM': 'header label', 'KDBBPS': 'header label', 'WADMKD': 'header label', 'WIADKD': 'header label', 'WADMKC': 'header label', 'WIADKC': 'header label', 'WADMKK': 'header label', 'WIADKK': 'header label', 'WADMPR': 'header label', 'WIADPR': 'header label', 'TIPADM': 'header label', 'KDPKAB': 'header label', 'SHAPE_Leng': 'header label', 'SHAPE_Area': 'header label', });
lyr_BatasDesaPogung_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});