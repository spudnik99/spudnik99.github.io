mapmx.on("load", () => {
  /** Add Source for Layers */
  mapmx.addSource("MxCountry", {
    type: "geojson",
    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxCountry.geojson",
  });
  /*   mapmx.addSource("MxCountryEnt", {
    type: "geojson",
    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxCountryEnt.geojson",
  }); */
  mapmx.addSource("TropicCancerWest", {
    type: "geojson",
    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/TropicCancerWest.geojson",
  });
  mapmx.addSource("MxBoundingBox", {
    type: "geojson",
    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxBoundingBox.geojson",
  });
  mapmx.addSource("MxPacific", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxPacific.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });
  mapmx.addSource("MxGulf", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxGulf.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });
  mapmx.addSource("MxCaribbean", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxCaribbean.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });

  mapmx.addSource("MxVolcanic", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxLocArea.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });

  mapmx.addSource("MxLocArea", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxLocArea.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });

  mapmx.addSource("MxNeoVolcanic", {
    type: "geojson",

    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxNeoVolcanic.geojson",
    //data: "./GeoJSON/national/MxLocalities.geojson",
  });

  mapmx.addSource("MxVolcanoes", {
    type: "geojson",
    data: "https://github.com/spudnik99/MexicoGeoBriefer/raw/main/GeoJSON/MxVolcanoes.geojson",
  });
  /** Add Layers */
  mapmx.addLayer({
    id: "MxBoundingBox-layer",
    type: "fill",
    source: "MxBoundingBox",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#080808", // grey color fill
      "fill-opacity": 0.2,
    }, //,
    //filter: ["==", "$type", "Polygon"],
  });
  mapmx.addLayer({
    id: "MxCountryOutline-layer",
    type: "line",
    source: "MxCountry",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#000",
      "line-width": 4,
    },
  });
  mapmx.addLayer({
    id: "MxCountry-layer",
    type: "fill",
    source: "MxCountry",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#080808", // blue color fill
      "fill-opacity": 0.5,
    }, //,
    //'filter': ['==', '$type', 'Polygon']
  });

  mapmx.addLayer({
    id: "MxPacific-layer",
    type: "line",
    source: "MxPacific",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#4d4dFF",
      "line-width": 6,
    },
  });
  mapmx.addLayer({
    id: "MxGulf-layer",
    type: "line",
    source: "MxGulf",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#85f000",
      "line-width": 6,
    },
  });
  mapmx.addLayer({
    id: "MxCaribbean-layer",
    type: "line",
    source: "MxCaribbean",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#41fdfE",
      "line-width": 6,
    },
  });
  /*   mapmx.addLayer({
    id: "MxCountryEnt-layer",
    type: "fill",
    source: "MxCountryEnt",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#0080f0", // blue color fill
      "fill-opacity": 0.5,
    },
  });
  mapmx.addLayer({
    id: "MxCountryEntOutline-layer",
    type: "line",
    source: "MxCountryEnt",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#000000",
      "line-width": 2,
    },
  }); */
  mapmx.addLayer({
    id: "TropicCancer-layer",
    type: "line",
    source: "TropicCancerWest",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#FF0000",
      "line-width": 2,
    },
  });
  mapmx.addLayer({
    id: "MxNeoVolcanic-layer",
    type: "fill",
    source: "MxNeoVolcanic",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "green", // green color fill
      "fill-opacity": 0.4,
    },
  });
  mapmx.addLayer({
    id: "MxVolcanoes-layer",
    type: "circle",
    source: "MxVolcanoes",
    layout: {
      visibility: "none",
    },
    paint: {
      "circle-color": "hsl(355,86%,44%)",
      "circle-stroke-width": 2,
      "circle-radius": 2,
      "circle-stroke-color": "hsl(355,86%,44%)",
    },
  });

  /*   mapmx.addLayer({
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
  mapmx.addLayer({
    id: "MxLocArea-layer",
    type: "fill-extrusion",
    source: "MxLocArea",
    layout: { visibility: "none" },
    paint: {
      "fill-extrusion-color": "#00f", // blue color fill
      "fill-extrusion-height": ["get", "Pob_Total"],
      "fill-extrusion-base": 0,
      "fill-extrusion-opacity": 0.7,
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
    layer: ["MxCountry-layer", "MxBoundingBox-layer", "MxCountryOutline-layer"],
  },
  tropicalparadise: {
    duration: 5000,
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 5,
    pitch: 0,
    speed: 0.6,
    layer: [
      "TropicCancer-layer",
      //"MxCountryEntOutline-layer",
      "MxCountry-layer",

      "MxCountryOutline-layer",
    ],
  },
  leftcoast: {
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 4.3,
    pitch: 20,
    speed: 0.5,
    layer: ["MxCountry-layer", "MxPacific-layer", "MxCountryOutline-layer"],
    mapStyleID: "light-v10",
  },
  thegulf: {
    bearing: 0,
    center: [-93.499795, 21.123449],
    zoom: 4.3,
    pitch: 20,
    speed: 0.5,
    layer: ["MxCountry-layer", "MxGulf-layer", "MxCountryOutline-layer"],
    mapStyleID: "light-v10",
  },
  hyped: {
    bearing: 0,
    center: [-85.499795, 21.123449],
    zoom: 5.3,
    pitch: 20,
    speed: 0.5,
    layer: ["MxCountry-layer", "MxCaribbean-layer", "MxCountryOutline-layer"],
    mapStyleID: "dark-v10",
  },
  neovolcanicintro: {
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 5.3,
    pitch: 10,
    layer: ["MxNeoVolcanic-layer", "MxCountryOutline-layer"],
    mapStyleID: "dark-v10",
  },
  neovolcanic: {
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 5.3,
    pitch: 10,
    layer: ["MxLocArea-layer", "MxNeoVolcanic-layer", "MxCountryOutline-layer"],
    mapStyleID: "dark-v10",
  },
  volcanoes: {
    bearing: 0,
    center: [-101.499795, 21.123449],
    zoom: 5.3,
    pitch: 20,
    layer: [
      "MxLocArea-layer",
      "MxVolcanoes-layer",
      "MxNeoVolcanic-layer",
      "MxCountryOutline-layer",
    ],
    mapStyleID: "dark-v10",
  },
};

let activeChapterName = "intro";
function setLayerToggleVisible(value) {
  if (value != "") {
    mapmx.setLayoutProperty(value, "visibility", "visible");
  }
}
function setLayerToggleNone(value) {
  if (value != "") {
    mapmx.setLayoutProperty(value, "visibility", "none");
  }
}
function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  mapmx.flyTo(chapters[chapterName]);
  // if (chapters[chapterName].layer != "") {
  // mapmx.setStyle("mapbox://styles/mapbox/" + chapters[chapterName].mapStyleID);
  chapters[activeChapterName].layer.forEach(setLayerToggleNone);
  chapters[chapterName].layer.forEach(setLayerToggleVisible);

  // }
  // if (chapters[activeChapterName].layer != "") {

  /*  mapmx.setLayoutProperty(
      chapters[activeChapterName].layer,
      "visibility",
      "none"
    ); */
  //}
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
