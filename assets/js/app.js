var loadContent, rgb2hex;

$(function() {
  window.primary_color = rgb2hex($("#primary-color").css('color'));
  return loadContent();
});

rgb2hex = function(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
};

loadContent = function() {
  return $.get("/stats", function(data) {
    return renderCommitsByDateChart(data.commits_by_date);
  });
};
