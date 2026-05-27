const galleries = {
  "ratusz": {
    title: "Ratusz Staromiejski",
    description: "Ratusz w ujęciu dziennym, historycznym i z innej perspektywy.",
    images: [
      ["Ujęcie dzienne", "Old_town_hall_in_Torun_(6).jpg", "Wikimedia Commons, licencja przy pliku"],
      ["Inna perspektywa", "ToruńRatusz.JPG", "Edyp, domena publiczna"],
      ["Detal fasady", "Toruń, ratusz 180948.jpg", "Jan Łoziński, Wikimedia Commons, licencja przy pliku"]
    ]
  },
  "krzywa-wieza": {
    title: "Krzywa Wieża",
    description: "Trzy spojrzenia na jedną z najbardziej rozpoznawalnych toruńskich baszt.",
    images: [
      ["Ujęcie dzienne", "Krzywa_Wieza_in_Torun_(5).jpg", "Wikimedia Commons, licencja przy pliku"],
      ["Inna perspektywa", "Toruń_-_Krzywa_Wieża.jpg", "Spitfire303, Wikimedia Commons, CC BY-SA 3.0 PL"],
      ["Detal bryły", "Krzywa_Wieża_Toruń_PL.jpg", "Elmirka m, Wikimedia Commons, licencja przy pliku"]
    ]
  },
  "pomnik-kopernika": {
    title: "Pomnik Mikołaja Kopernika",
    description: "Pomnik Kopernika pokazany z rynku, z bliska i na tle miejskiej zabudowy.",
    images: [
      ["Ujęcie dzienne", "Nicolaus_Copernicus_Monument_in_Toruń_(Thorn).jpg", "Wikimedia Commons, licencja przy pliku"],
      ["Z bliska", "Pomnik_Mikołaja_Kopernika.JPG", "Ananas96, Wikimedia Commons, CC BY-SA 4.0"],
      ["Inna perspektywa", "Pomnik_Mikołaja_Kopernika_w_Toruniu_na_tle_wieży_zegarowej.jpg", "Stanislaw.bochnak, Wikimedia Commons, CC BY-SA 4.0"]
    ]
  },
  "zywe-muzeum-piernika": {
    title: "Żywe Muzeum Piernika",
    description: "Muzeum, przyprawy i piernikarskie detale związane z toruńską tradycją.",
    images: [
      ["Ujęcie główne", "Żywa_Muzeum_Piernika_w_Toruniu.jpg", "Mateuszgdynia, Wikimedia Commons, CC BY-SA 4.0"],
      ["Detal", "Toruń_gingerbread_seasonings.jpg", "Kpalion, Wikimedia Commons, CC BY-SA 4.0"],
      ["Toruński piernik", "PL_gingerbread_from_Torun.jpg", "Marcin Floryan, Wikimedia Commons, CC BY 2.5"]
    ]
  },
  "muzeum-piernika": {
    title: "Muzeum Toruńskiego Piernika",
    description: "Budynek muzeum oraz eksponaty związane z historią toruńskiego piernika.",
    images: [
      ["Ujęcie dzienne", "Muzeum_Toruńskiego_Piernika.jpg", "Mateuszgdynia, Wikimedia Commons, CC BY-SA 4.0"],
      ["Inna perspektywa", "Muzeum_Toruńskiego_Piernika_01.jpg", "Wikimedia Commons, CC0"],
      ["Detal ekspozycji", "Toruń_Gingerbread_baking_mould_with_a_lady.jpg", "Wikimedia Commons, CC0"]
    ]
  },
  "jan-olbracht": {
    title: "Jan Olbracht",
    description: "Wolne reprodukcje przedstawień króla Jana Olbrachta.",
    images: [
      ["Portret z Torunia", "Toruń_-_Jan_Olbracht.jpg", "Wikimedia Commons, domena publiczna"],
      ["Inny portret", "Johann_Albrecht_von_Polen.jpg", "Wikimedia Commons, domena publiczna"],
      ["Inna odsłona", "Jan_I_Olbracht_by_Bacciarelli.jpg", "Wikimedia Commons, domena publiczna"]
    ]
  },
  "dom-kopernika": {
    title: "Dom Mikołaja Kopernika",
    description: "Gotyckie kamienice przy ulicy Kopernika pokazane z kilku perspektyw.",
    images: [
      ["Ujęcie dzienne", "Dom_kopernika,_ul_kopernika.jpg", "Wikimedia Commons, CC BY-SA 3.0"],
      ["Inna perspektywa", "Dom_kopernika.jpg", "Pproblem, Wikimedia Commons, CC BY 3.0"],
      ["Detal fasady", "Torun_Dom_Kopernika.jpg", "Andrzej Otrębski, Wikimedia Commons, CC BY-SA 4.0"]
    ]
  },
  "planetarium": {
    title: "Planetarium w Toruniu",
    description: "Planetarium w ujęciu wieczornym, dziennym i z lotu ptaka.",
    images: [
      ["Ujęcie wieczorne", "Toruń_planetarium_head.jpg", "Wikimedia Commons, licencja przy pliku"],
      ["Ujęcie dzienne", "Planetarium_in_Toruń.jpg", "Darekm135, Wikimedia Commons, CC BY-SA 4.0"],
      ["Inna perspektywa", "Torun_planetarium.jpg", "Kapitel, Wikimedia Commons, CC BY-SA 4.0"]
    ]
  },
  "kepa-bazarowa": {
    title: "Kępa Bazarowa",
    description: "Panorama z tarasu widokowego oraz ujęcia wyspy i Wisły.",
    images: [
      ["Panorama dzienna", "Torun_panorama_zza_Wisly_3.jpg", "Andrzej Otrębski, Wikimedia Commons, CC BY-SA 4.0"],
      ["Szeroka panorama", "Torun_panorama_zza_Wisly_2_(cropped).jpg", "Andrzej Otrębski, Wikimedia Commons, CC BY-SA 4.0"],
      ["Wyspa", "Torun_Kepa_Bazarowa_5.jpg", "Pko, Wikimedia Commons, licencja przy pliku"]
    ]
  },
  "bulwar": {
    title: "Bulwar Filadelfijski",
    description: "Nabrzeże Wisły pokazane z poziomu spaceru i od strony rzeki.",
    images: [
      ["Ujęcie dzienne", "Bulwar_Filadelfijski_-_Toruń.JPG", "Ananas96, Wikimedia Commons, CC BY-SA 4.0"],
      ["Inna perspektywa", "Torun_Bulwar_Filadelfijski.jpg", "Andrzej Otrębski, Wikimedia Commons, CC BY-SA 4.0"],
      ["Pomost widokowy", "Torun_Bulwar_Filadelfijski_pomost.jpg", "Andrzej Otrębski, Wikimedia Commons, licencja przy pliku"]
    ]
  },
  "barbarka": {
    title: "Barbarka",
    description: "Kaplica św. Barbary i spokojne ujęcia leśnej części Torunia.",
    images: [
      ["Kaplica", "Torun_Barbarka_kaplica_i_cm.jpg", "Pko, Wikimedia Commons, CC BY 3.0"],
      ["Inna perspektywa", "Torun_Barbarka_kaplica_i_cm_2.jpg", "Pko, Wikimedia Commons, CC BY 3.0"],
      ["Detal miejsca", "Kaplica_św._Barbary_w_Toruniu5.jpg", "Mateuszgdynia, Wikimedia Commons, CC BY-SA 4.0"]
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const place = params.get("place");
const gallery = galleries[place] || galleries.ratusz;

const filePath = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
const sourcePath = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(" ", "_"))}`;

document.title = `${gallery.title} | Galeria zdjęć`;
document.getElementById("gallery-title").textContent = gallery.title;
document.getElementById("gallery-description").textContent = gallery.description;

document.getElementById("gallery-grid").innerHTML = gallery.images.map(([label, file, credit]) => `
  <article class="gallery-card">
    <a href="${sourcePath(file)}">
      <img src="${filePath(file)}" alt="${gallery.title}: ${label}" />
    </a>
    <div>
      <h2>${label}</h2>
      <p>${credit}</p>
      <a href="${sourcePath(file)}">Opis pliku i licencja</a>
    </div>
  </article>
`).join("");
