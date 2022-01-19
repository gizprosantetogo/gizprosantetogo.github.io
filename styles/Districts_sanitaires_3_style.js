var size = 0;
var placement = 'point';

var style_Districts_sanitaires_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial Narrow\', sans-serif";
    var labelFill = "#0189f6";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("PRéFECTUR") !== null) {
        labelText = String(feature.get("PRéFECTUR"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(176,70,174,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
