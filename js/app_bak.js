map.on("load", () => {
  map.addSource("TropicCancerWest", {
    type: "geojson",
    /*
     * Each feature in this GeoJSON file contains values for
     * `properties.height`, `properties.base_height`,
     * and `properties.color`.
     * In `addLayer` you will use expressions to set the new
     * layer's paint properties based on these values.
     */

    //   /*'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'*/

    data: "./GeoJSON/general/TropicCancerWest.geojson",
    // 'data':  'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/query?f=pgeojson&where=1=1'
  });
  map.addSource("MxBoundingBox", {
    type: "geojson",
    data: "./GeoJSON/general/MxBoundingBox.geojson",
  });
  map.addSource("MxCountry", {
    type: "geojson",
    data: "./GeoJSON/national/MxCountry.geojson",
  });
  map.addSource("MxCountryEnt", {
    type: "geojson",
    data: "./GeoJSON/national/MxCountryEnt.geojson",
  });
  map.addSource("MxVolcanic", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxLocArea.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });

  map.addSource("MxVolcanoes", {
    type: "geojson",
    data: "./GeoJSON/national/MxVolcanoes.geojson",
  });

  map.addLayer({
    id: "MxBoundingBox-layer",
    type: "fill",
    source: "MxBoundingBox",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": 0.5,
    }, //,
    //filter: ["==", "$type", "Polygon"],
  });

  map.addLayer({
    id: "MxCountry-layer",
    type: "fill",
    source: "MxCountry",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": 0.5,
    }, //,
    //'filter': ['==', '$type', 'Polygon']
  });

  map.addLayer({
    id: "MxCountryEnt-layer",
    type: "fill",
    source: "MxCountryEnt",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080f0", // blue color fill
      "fill-opacity": 0.5,
    },
  });
  map.addLayer({
    id: "MxCountryEntOutline-layer",
    type: "line",
    source: "MxCountryEnt",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#000000",
      "line-width": 2,
    },
  });
  map.addLayer({
    id: "TropicCancer-layer",
    type: "line",
    source: "TropicCancerWest",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#FF0000",
      "line-width": 2,
    },
  });
  map.addLayer({
    id: "MxVolcanoes-layer",
    type: "circle",
    source: "MxVolcanoes",
    layout: {
      visibility: "none",
    },
    paint: {
      "circle-color": "hsla(355,86%,44%,0.5)",
      "circle-stroke-width": 2,
      "circle-radius": 2,
      "circle-stroke-color": "hsl(355,86%,44%)",
    },
  });

  /*   map.addLayer({
    id: "MxVolcanic-layer",
    type: "circle",
    source: "MxVolcanic",
    layout: {
      visibility: "none",
    },
    paint: {
      "circle-color": "hsla(355,86%,44%,0.5)",
      "circle-stroke-width": 2,
      "circle-radius": 2,
      "circle-stroke-color": "hsl(355,86%,44%)",
    },
  }); */
  map.addLayer({
    id: "MxVolcanic-layer",
    type: "fill-extrusion",
    source: "MxVolcanic",
    layout: { visibility: "none" },
    paint: {
      "fill-extrusion-color": "#FFFF00", // yellow color fill
      "fill-extrusion-height": ["get", "Pob_Total"],
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.5,
    },
  });
});
const chapters = {
  intro: {
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 1,
    pitch: 0,
    speed: 0.6,
    layer: [""],
  },
  whereisitlocated: {
    duration: 5000,
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 4,
    pitch: 40,
    speed: 0.6,
    layer: ["MxBoundingBox-layer"],
  },
  tropicalparadise: {
    duration: 5000,
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 5,
    pitch: 40,
    speed: 0.6,
    layer: ["TropicCancer-layer"],
  },
  leftcoast: {
    bearing: 90,
    center: [-101.499795, 21.123449],
    zoom: 12.3,
    speed: 0.6,
    layer: ["MxBoundingBox-layer"],
  },
  thegulf: {
    bearing: 45,
    center: [-101.499795, 21.123449],
    zoom: 15.3,
    pitch: 20,
    speed: 0.5,
    layer: ["MxBoundingBox-layer"],
  },
  hyped: {
    bearing: 180,
    center: [-101.499795, 21.123449],
    zoom: 12.3,
    layer: ["MxBoundingBox-layer"],
  },
  neovolcanic: {
    bearing: 90,
    center: [-101.499795, 21.123449],
    zoom: 17.3,
    pitch: 40,
    layer: ["MxVolcanic-layer", "MxVolcanoes-layer"],
  },
  volcanoes: {
    bearing: 90,
    center: [-101.499795, 21.123449],
    zoom: 14.3,
    pitch: 20,
    layer: ["MxVolcanoes-layer"],
  },
};

let activeChapterName = "intro";
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);
  if (chapters[chapterName].layer != "") {
    chapters[chapterName].layer.forEach(
      map.setLayoutProperty(chapters[chapterName], "visibility", "visible")
    );
  }
  if (chapters[activeChapterName].layer != "") {
    map.setLayoutProperty(
      chapters[activeChapterName].layer,
      "visibility",
      "none"
    );
  }
  document.getElementById(chapterName).classList.add("active");
  document.getElementById(activeChapterName).classList.remove("active");

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  const element = document.getElementById(id);
  const bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// On every scroll event, check which element is on screen
window.onscroll = () => {
  for (const chapterName in chapters) {
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};
