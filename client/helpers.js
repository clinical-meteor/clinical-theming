Template.registerHelper("getBackgroundColor", function (paletteColor){
  if (paletteColor) {
    return "background-color: " + Theme.getPaletteColor(paletteColor) + "; ";
  } else {
    return "background-color: " + Theme.getBackgroundColor() + "; ";
  }
});
Template.registerHelper("paletteColor", function (color){
  return "color: " + Theme.getPaletteColor(color) + "; ";
});
Template.registerHelper("getPaletteColor", function (color){
  return "color: " + Theme.getPaletteColor(color) + "; ";
});
Template.registerHelper("getLinkColor", function (color){
  if (color) {
    return "color: " + Theme.getPaletteColor(color) + "; ";
  } else {
    return "color: " + Theme.getPaletteColor("colorB") + "; ";
  }
});
Template.registerHelper("brandColor", function (color){
  return "color: " + Theme.getBrandColor(color) + "; ";
});
Template.registerHelper("getBrandColor", function (color){
  return "color: " + Theme.getBrandColor(color) + "; ";
});
Template.registerHelper("appTitle", function (color){
  return Theme.getAppTitle();
});
