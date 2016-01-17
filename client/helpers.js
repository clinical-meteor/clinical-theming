Template.registerHelper("getBackgroundColor", function (){
  return "background-color: " + Theme.getBackgroundColor() + "; ";
});
Template.registerHelper("getPaletteColor", function (color){
  return "color: " + Theme.getPaletteColor(color) + "; ";
});
Template.registerHelper("getLinkColor", function (color){
  return "color: " + Theme.getPaletteColor(color) + "; ";
});
Template.registerHelper("getBrandColor", function (color){
  return "color: " + Theme.getBrandColor(color) + "; ";
});
