export function Plant(plantItem) {
   let self = this;
   if (typeof plantItem === "number") {
      self.plantItem = _.find(plantList, {"id": plantItem });
   } else if (plantItem) {
      self.plantItem = plantItem;
   }

   this.getGrowInfo = function(zone) {
      let growInfo = {};
      //Defaults (no plant info)
      growInfo["sow"] = moment(_.find(growingZones, {"zone": zone }).lastFrostAvg);
      growInfo["germ"] = growInfo.sow.add({days: 10});
      return growInfo;
   }
}

const growingZones = [
   {
      "zone": 2,
      "lastFrostAvg": 1589846400000
   },
   {
      "zone": 3,
      "lastFrostAvg": 1589241600000
   },
   {
      "zone": 4,
      "lastFrostAvg": 1588636800000
   },
   {
      "zone": 5,
      "lastFrostAvg": 1587772800000
   },
   {
      "zone": 6,
      "lastFrostAvg": 1587168000000
   },
   {
      "zone": 7,
      "lastFrostAvg": 1585526400000
   },
   {
      "zone": 8,
      "lastFrostAvg": 1585008000000
   }
];

export const plantList = [
   {
      "tileColor": "#964b00",
      "tilePattern": "solid",
      "draw": "border",
      "name": "Wood border",
      "id": 3,
      "class": "landscape",
      "description": "Wooden garden border",
      "properties": {}
   },
   {
      "tileColor": "#555555",
      "tilePattern": "solid",
      "draw": "rock",
      "name": "Rock",
      "id": 0,
      "class": "landscape",
      "description": "A small rock",
      "properties": {}
   },
   {
      "tileColor": "#555555",
      "tilePattern": "solid",
      "draw": "rock",
      "name": "Big Rock",
      "id": 1,
      "class": "landscape",
      "description": "A large rock",
      "stamp": {
         "x": 2,
         "y": 2
      },
      "properties": {}
   },
   {
      "properties": {
         "height": 60,
         "spread": 12,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
      },
      "draw": "vine",
      "tileColor": "#199557",
      "tilePattern": "stripes",
      "name": "Green Beans",
      "description": "Green beans are a staple of every vegetable garden because they are so easy to grow—even in limited space—and incredibly productive!",
      "id": 201,
      "class": "vegetable"
   },
   {
      "properties": {
         "height": 4,
         "spread": 6,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Beds",
         "Container"
         ]
      },
      "draw": "groundCover",
      "tileColor": "#258968",
      "tilePattern": "stripes",
      "name": "Alyssum",
      "description": " Lobularia maritima is an annual plant (rarely a short-lived perennial plant) growing to 5–30 cm (2–12 in) tall by 20–30 cm (8–12 in) broad. The stem is very branched, with dense clusters of small flowers. The leaves are 1–4 mm long and 3–5 mm, broad, alternate, sessile, quite hairy, oval to lanceolate, with an entire margin. The flowers are about 5 millimetres (0.20 in) in diameter, sweet-smelling, with an aroma similar to that of honey, with four white rounded petals (or pink, rose-red, violet and lilac) and four sepals. The six stamens have yellow anthers. The flowers are produced throughout the growing season, or year-round in areas free of frost. They are pollinated by insects. The fruits are numerous elongated seedpods rather hairy, oval to rounded, each containing two seeds. The dispersal of seed is effected by the wind",
      "id": 5,
      "class": "flower"
   },
   {
      "properties": {
         "height": 48,
         "spread": 15,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Borders",
         "Dried Flowers"
         ]
      },
      "tileColor": "#0AC8F6",
      "name": "Amaranthus",
      "description": "Amaranthus, collectively known as amaranth, is a cosmopolitan genus of annual or short-lived perennial plants. Some amaranth species are cultivated as leaf vegetables, pseudocereals, and ornamental plants. Most of the Amaranthus species are summer annual weeds and are commonly referred to as pigweed.",
      "id": 6,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 22,
   //       "spread": 9,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual"
   //    },
   //    "tileColor": "#19FA58",
   //    "name": "Amaryllis",
   //    "id": 7,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 42,
   //       "spread": 15,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#D34DB2",
   //    "name": "Ammi Majus",
   //    "id": 8,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 7,
   //       "spread": 16,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#F01B10",
   //    "name": "Angelonia",
   //    "id": 9,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 36,
   //       "spread": 12,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Borders",
   //       "Dried Flowers"
   //       ]
   //    },
   //    "tileColor": "#F78386",
   //    "name": "Asclepias",
   //    "id": 10,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 24,
   //       "spread": 12,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#270B5C",
   //    "name": "Aster",
   //    "id": 11,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 36,
         "spread": 36,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Borders",
         "Cut Flowers",
         "Dried Flowers"
         ]
      },
      "tileColor": "#9D709E",
      "name": "Baby's Breath",
      "id": 12,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 24,
   //       "spread": 11,
   //       "sun": "Full Shade, Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds"
   //       ]
   //    },
   //    "tileColor": "#6C80E5",
   //    "name": "Balsam",
   //    "id": 13,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 13,
         "spread": 14,
         "sun": "Full Shade, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Container"
         ]
      },
      "tileColor": "#4FA9F8",
      "name": "Begonia",
      "id": 14,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 22,
   //       "spread": 10,
   //       "sun": "Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Dried Flowers"
   //       ]
   //    },
   //    "tileColor": "#0E12C0",
   //    "name": "Bells of Ireland",
   //    "id": 15,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 13,
   //       "spread": 13,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#FA4E32",
   //    "name": "Blue Eyed Daisies",
   //    "id": 16,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 15,
   //       "spread": 13,
   //       "sun": "Full Shade, Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#88BCD4",
   //    "name": "Caladium",
   //    "id": 17,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 14,
   //       "spread": 14,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#239D67",
   //    "name": "Calendula",
   //    "id": 18,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 13,
   //       "spread": 13,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow"
   //    },
   //    "tileColor": "#80FD15",
   //    "name": "Calibrachoa",
   //    "id": 19,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 15,
   //       "spread": 10,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#57F045",
   //    "name": "Calla",
   //    "id": 20,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 30,
   //       "spread": 13,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#FC6F0A",
   //    "name": "Canna",
   //    "id": 21,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 12,
   //       "spread": 10,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container",
   //       "Cut Flowers",
   //       "Dried Flowers"
   //       ]
   //    },
   //    "tileColor": "#6D8B93",
   //    "name": "Celosia",
   //    "id": 22,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 24,
         "spread": 8,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Cut Flowers"
         ]
      },
      "tileColor": "#385457",
      "name": "Chrysanthemum",
      "id": 23,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 60,
   //       "spread": 15,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#DE4912",
   //    "name": "Cleome",
   //    "id": 24,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 24,
   //       "spread": 20,
   //       "sun": "Full Shade, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#1423AB",
   //    "name": "Coleus",
   //    "id": 25,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 30,
         "spread": 11,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Borders",
         "Cut Flowers",
         "Dried Flowers"
         ]
      },
      "tileColor": "#890A17",
      "name": "Cornflower",
      "id": 28,
      "class": "flower"
   },
   {
      "properties": {
         "height": 11,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "tileColor": "#156D30",
      "name": "Cosmos",
      "id": 29,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 13,
   //       "spread": 11,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#36BA47",
   //    "name": "Cuphea",
   //    "id": 30,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 180,
   //       "spread": 84,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Trellis or Lattice"
   //       ]
   //    },
   //    "tileColor": "#EF2C08",
   //    "name": "Cypress Vine",
   //    "id": 31,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 42,
   //       "spread": 22,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Borders",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#DD4267",
   //    "name": "Dahlias",
   //    "id": 32,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 9,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "tileColor": "#C5F775",
      "name": "Dianthus",
      "id": 33,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 2,
   //       "spread": 42,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#34D6BB",
   //    "name": "Dichondra",
   //    "id": 34,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 7,
   //       "spread": 8,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Container",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#3AC342",
   //    "name": "Dusty Miller",
   //    "id": 35,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 42,
   //       "spread": 15,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#840F2E",
   //    "name": "Elephant Ears",
   //    "id": 36,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 33,
   //       "spread": 14,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#A9083A",
   //    "name": "Four O'Clocks",
   //    "id": 38,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 9,
   //       "spread": 13,
   //       "sun": "Full Sun"
   //    },
   //    "tileColor": "#9ECF14",
   //    "name": "Gaillardia",
   //    "id": 39,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 21,
         "spread": 18,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Container",
         "Decorative"
         ]
      },
      "tileColor": "#905EBF",
      "name": "Geraniums",
      "id": 40,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 16,
   //       "spread": 13,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#58871F",
   //    "name": "Gerbera",
   //    "id": 41,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 48,
   //       "spread": 6,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Beds",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#5C71A5",
   //    "name": "Gladiolus",
   //    "id": 42,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 42,
   //       "spread": 18,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#C531A6",
   //    "name": "Gomphrena",
   //    "id": 43,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 14,
         "spread": 11,
         "sun": "Full Shade, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Filler"
         ]
      },
      "tileColor": "#396FD9",
      "name": "Impatiens",
      "id": 45,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 42,
   //       "spread": 7,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#025556",
   //    "name": "Ipomopsis",
   //    "id": 46,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 11,
   //       "spread": 11,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds"
   //       ]
   //    },
   //    "tileColor": "#8A1945",
   //    "name": "Laurentia",
   //    "id": 47,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 31,
   //       "spread": 9,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Cut Flowers",
   //       "Decorative"
   //       ]
   //    },
   //    "tileColor": "#FB2983",
   //    "name": "Lisianthus",
   //    "id": 48,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 7,
   //       "spread": 6,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#4FFD17",
   //    "name": "Lobelias",
   //    "id": 49,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 10,
         "spread": 12,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#A92640",
      "name": "Marigolds",
      "id": 50,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 180,
   //       "spread": 108,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Trellis or Lattice"
   //       ]
   //    },
   //    "tileColor": "#E4CB31",
   //    "name": "Moonflowers",
   //    "id": 51,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 120,
   //       "spread": 84,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Trellis or Lattice"
   //       ]
   //    },
   //    "tileColor": "#C73FF1",
   //    "name": "Morning Glories",
   //    "id": 52,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 11,
   //       "spread": 9,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#2B43D8",
   //    "name": "Nasturtium",
   //    "id": 53,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 6,
   //       "spread": 12,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#456BB7",
   //    "name": "Nemophila",
   //    "id": 54,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 22,
   //       "spread": 10,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#145F76",
   //    "name": "Nicotiana",
   //    "id": 55,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 8,
   //       "spread": 8,
   //       "sun": "Full Sun, Part Sun",
   //       "sowMethod": "Direct Sow/Indoor Sow"
   //    },
   //    "tileColor": "#28AF4D",
   //    "name": "Ornamental Kales",
   //    "id": 56,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 8,
         "spread": 9,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#EEFDB3",
      "name": "Pansies",
      "id": 57,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 36,
   //       "spread": 15,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Borders",
   //       "Container",
   //       "Dried Flowers",
   //       "Thriller"
   //       ]
   //    },
   //    "tileColor": "#E318F1",
   //    "name": "Pennisetum",
   //    "id": 58,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 17,
   //       "spread": 14,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#A41229",
   //    "name": "Pentas",
   //    "id": 59,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 11,
         "spread": 17,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#E45413",
      "name": "Petunias",
      "id": 60,
      "class": "flower"
   },
   {
      "properties": {
         "height": 9,
         "spread": 10,
         "sun": "Full Sun",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "draw": "groundCover",
      "tileColor": "#EF8779",
      "name": "Phlox",
      "id": 61,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 33,
   //       "spread": 7,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Cut Flowers",
   //       "Dried Flowers"
   //       ]
   //    },
   //    "tileColor": "#45D914",
   //    "name": "Poppy",
   //    "id": 62,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 5,
   //       "spread": 7,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#8B6744",
   //    "name": "Portulaca",
   //    "id": 63,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 39,
   //       "spread": 14,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow/Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Container",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#10C07D",
   //    "name": "Rudbeckias",
   //    "id": 64,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 30,
   //       "spread": 19,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#96A634",
   //    "name": "Salvia",
   //    "id": 65,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 27,
   //       "spread": 11,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#F4DE0C",
   //    "name": "Scabiosa",
   //    "id": 66,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 8,
   //       "spread": 13,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Beds",
   //       "Container",
   //       "Filler",
   //       "Spiller"
   //       ]
   //    },
   //    "tileColor": "#9CECA7",
   //    "name": "Scaevola",
   //    "id": 67,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 27,
   //       "spread": 15,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#ECC9E4",
   //    "name": "Snapdragons",
   //    "id": 68,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 27,
   //       "spread": 9,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#808B52",
   //    "name": "Statice",
   //    "id": 69,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 30,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#7FEF1D",
      "name": "Strawflowers",
      "id": 71,
      "class": "flower"
   },
   {
      "properties": {
         "height": 36,
         "spread": 14,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Borders",
         "Cut Flowers"
         ]
      },
      "draw": "sunflower",
      "tileColor": "#EE603F",
      "name": "Sunflowers",
      "id": 72,
      "class": "flower"
   },
   {
      "properties": {
         "height": 54,
         "spread": 30,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Borders",
         "Cut Flowers",
         "Trellis or Lattice"
         ]
      },
      "draw": "vine",
      "tileColor": "#150440",
      "name": "Sweet Peas",
      "id": 73,
      "class": "flower"
   },
   // {
   //    "properties": {
   //       "height": 60,
   //       "spread": 84,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Indoor Sow",
   //       "use": [
   //       "Trellis or Lattice"
   //       ]
   //    },
   //    "tileColor": "#A2022E",
   //    "name": "Thunbergia",
   //    "id": 74,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 42,
   //       "spread": 21,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#8E7CEE",
   //    "name": "Tithonia",
   //    "id": 75,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 9,
   //       "spread": 21,
   //       "sun": "Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Borders",
   //       "Container"
   //       ]
   //    },
   //    "tileColor": "#9B7F41",
   //    "name": "Torenia",
   //    "id": 76,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 36,
   //       "spread": 7,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "sowMethod": "Direct Sow",
   //       "use": [
   //       "Beds",
   //       "Cut Flowers"
   //       ]
   //    },
   //    "tileColor": "#03F5D0",
   //    "name": "Tuberose",
   //    "id": 77,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 13,
   //       "spread": 13,
   //       "sun": "Full Sun, Part Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#61E790",
   //    "name": "Verbenas",
   //    "id": 78,
   //    "class": "flower"
   // },
   // {
   //    "properties": {
   //       "height": 5,
   //       "spread": 25,
   //       "sun": "Full Sun",
   //       "lifeCycle": "Annual",
   //       "use": [
   //       "Beds",
   //       "Borders"
   //       ]
   //    },
   //    "tileColor": "#618FA0",
   //    "name": "Vincas",
   //    "id": 79,
   //    "class": "flower"
   // },
   {
      "properties": {
         "height": 10,
         "spread": 6,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Container"
         ]
      },
      "tileColor": "#21D9B8",
      "name": "Violas",
      "id": 81,
      "class": "flower"
   },
   {
      "properties": {
         "height": 32,
         "spread": 22,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Cut Flowers"
         ]
      },
      "tileColor": "#E7C499",
      "name": "Zinnias",
      "id": 82,
      "class": "flower"
   }
];