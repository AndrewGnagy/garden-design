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
      growInfo["sow"] = _.find(growingZones, {"zone": zone }).lastFrostAvg;
      growInfo["germ"] = growInfo.sow + 1;
      return growInfo;
   }
}

const growingZones = [
   {
      "zone": 2,
      "lastFrostAvg": 6
   },
   {
      "zone": 3,
      "lastFrostAvg": 6
   },
   {
      "zone": 4,
      "lastFrostAvg": 5
   },
   {
      "zone": 5,
      "lastFrostAvg": 5
   },
   {
      "zone": 6,
      "lastFrostAvg": 4
   },
   {
      "zone": 7,
      "lastFrostAvg": 4
   },
   {
      "zone": 8,
      "lastFrostAvg": 3
   }
];

export const plantList = [
   {
      "tileColor": "#555555",
      "tilePattern": "rock",
      "name": "Rock",
      "id": 0,
      "class": "landscape",
      "properties": {}
   },
   {
      "tileColor": "#555555",
      "tilePattern": "rock",
      "name": "Big Rock",
      "id": 1,
      "class": "landscape",
      "stamp": {
         "x": 2,
         "y": 2
      },
      "properties": {}
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
      "tileColor": "#258968",
      "tilePattern": "stripes",
      "name": "Alyssum",
      "id": 5
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
      "id": 6
   },
   {
      "properties": {
         "height": 22,
         "spread": 9,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual"
      },
      "tileColor": "#19FA58",
      "name": "Amaryllis",
      "id": 7
   },
   {
      "properties": {
         "height": 42,
         "spread": 15,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#D34DB2",
      "name": "Ammi Majus",
      "id": 8
   },
   {
      "properties": {
         "height": 7,
         "spread": 16,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#F01B10",
      "name": "Angelonia",
      "id": 9
   },
   {
      "properties": {
         "height": 36,
         "spread": 12,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Borders",
         "Dried Flowers"
         ]
      },
      "tileColor": "#F78386",
      "name": "Asclepias",
      "id": 10
   },
   {
      "properties": {
         "height": 24,
         "spread": 12,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Cut Flowers"
         ]
      },
      "tileColor": "#270B5C",
      "name": "Aster",
      "id": 11
   },
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
      "id": 12
   },
   {
      "properties": {
         "height": 24,
         "spread": 11,
         "sun": "Full Shade, Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds"
         ]
      },
      "tileColor": "#6C80E5",
      "name": "Balsam",
      "id": 13
   },
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
      "id": 14
   },
   {
      "properties": {
         "height": 22,
         "spread": 10,
         "sun": "Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Dried Flowers"
         ]
      },
      "tileColor": "#0E12C0",
      "name": "Bells of Ireland",
      "id": 15
   },
   {
      "properties": {
         "height": 13,
         "spread": 13,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#FA4E32",
      "name": "Blue Eyed Daisies",
      "id": 16
   },
   {
      "properties": {
         "height": 15,
         "spread": 13,
         "sun": "Full Shade, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#88BCD4",
      "name": "Caladium",
      "id": 17
   },
   {
      "properties": {
         "height": 14,
         "spread": 14,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#239D67",
      "name": "Calendula",
      "id": 18
   },
   {
      "properties": {
         "height": 13,
         "spread": 13,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow"
      },
      "tileColor": "#80FD15",
      "name": "Calibrachoa",
      "id": 19
   },
   {
      "properties": {
         "height": 15,
         "spread": 10,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Cut Flowers"
         ]
      },
      "tileColor": "#57F045",
      "name": "Calla",
      "id": 20
   },
   {
      "properties": {
         "height": 30,
         "spread": 13,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#FC6F0A",
      "name": "Canna",
      "id": 21
   },
   {
      "properties": {
         "height": 12,
         "spread": 10,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Cut Flowers",
         "Dried Flowers"
         ]
      },
      "tileColor": "#6D8B93",
      "name": "Celosia",
      "id": 22
   },
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
      "id": 23
   },
   {
      "properties": {
         "height": 60,
         "spread": 15,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#DE4912",
      "name": "Cleome",
      "id": 24
   },
   {
      "properties": {
         "height": 24,
         "spread": 20,
         "sun": "Full Shade, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#1423AB",
      "name": "Coleus",
      "id": 25
   },
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
      "id": 28
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
      "id": 29
   },
   {
      "properties": {
         "height": 13,
         "spread": 11,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "tileColor": "#36BA47",
      "name": "Cuphea",
      "id": 30
   },
   {
      "properties": {
         "height": 180,
         "spread": 84,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Trellis or Lattice"
         ]
      },
      "tileColor": "#EF2C08",
      "name": "Cypress Vine",
      "id": 31
   },
   {
      "properties": {
         "height": 42,
         "spread": 22,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#DD4267",
      "name": "Dahlias",
      "id": 32
   },
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
      "id": 33
   },
   {
      "properties": {
         "height": 2,
         "spread": 42,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#34D6BB",
      "name": "Dichondra",
      "id": 34
   },
   {
      "properties": {
         "height": 7,
         "spread": 8,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Container",
         "Cut Flowers"
         ]
      },
      "tileColor": "#3AC342",
      "name": "Dusty Miller",
      "id": 35
   },
   {
      "properties": {
         "height": 42,
         "spread": 15,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#840F2E",
      "name": "Elephant Ears",
      "id": 36
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
      "tileColor": "#1D12A7",
      "name": "Flowers for Cutting",
      "id": 37
   },
   {
      "properties": {
         "height": 33,
         "spread": 14,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#A9083A",
      "name": "Four O'Clocks",
      "id": 38
   },
   {
      "properties": {
         "height": 9,
         "spread": 13,
         "sun": "Full Sun"
      },
      "tileColor": "#9ECF14",
      "name": "Gaillardia",
      "id": 39
   },
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
      "id": 40
   },
   {
      "properties": {
         "height": 16,
         "spread": 13,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Cut Flowers"
         ]
      },
      "tileColor": "#58871F",
      "name": "Gerbera",
      "id": 41
   },
   {
      "properties": {
         "height": 48,
         "spread": 6,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Beds",
         "Cut Flowers"
         ]
      },
      "tileColor": "#5C71A5",
      "name": "Gladiolus",
      "id": 42
   },
   {
      "properties": {
         "height": 42,
         "spread": 18,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Cut Flowers"
         ]
      },
      "tileColor": "#C531A6",
      "name": "Gomphrena",
      "id": 43
   },
   {
      "properties": {
         "height": 2,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds"
         ]
      },
      "tileColor": "#9456B0",
      "name": "Ice Plants",
      "id": 44
   },
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
      "id": 45
   },
   {
      "properties": {
         "height": 42,
         "spread": 7,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Borders"
         ]
      },
      "tileColor": "#025556",
      "name": "Ipomopsis",
      "id": 46
   },
   {
      "properties": {
         "height": 11,
         "spread": 11,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds"
         ]
      },
      "tileColor": "#8A1945",
      "name": "Laurentia",
      "id": 47
   },
   {
      "properties": {
         "height": 31,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Cut Flowers",
         "Decorative"
         ]
      },
      "tileColor": "#FB2983",
      "name": "Lisianthus",
      "id": 48
   },
   {
      "properties": {
         "height": 7,
         "spread": 6,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Container"
         ]
      },
      "tileColor": "#4FFD17",
      "name": "Lobelias",
      "id": 49
   },
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
      "id": 50
   },
   {
      "properties": {
         "height": 180,
         "spread": 108,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Trellis or Lattice"
         ]
      },
      "tileColor": "#E4CB31",
      "name": "Moonflowers",
      "id": 51
   },
   {
      "properties": {
         "height": 120,
         "spread": 84,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Trellis or Lattice"
         ]
      },
      "tileColor": "#C73FF1",
      "name": "Morning Glories",
      "id": 52
   },
   {
      "properties": {
         "height": 11,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#2B43D8",
      "name": "Nasturtium",
      "id": 53
   },
   {
      "properties": {
         "height": 6,
         "spread": 12,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Container"
         ]
      },
      "tileColor": "#456BB7",
      "name": "Nemophila",
      "id": 54
   },
   {
      "properties": {
         "height": 22,
         "spread": 10,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Borders"
         ]
      },
      "tileColor": "#145F76",
      "name": "Nicotiana",
      "id": 55
   },
   {
      "properties": {
         "height": 8,
         "spread": 8,
         "sun": "Full Sun, Part Sun",
         "sowMethod": "Direct Sow/Indoor Sow"
      },
      "tileColor": "#28AF4D",
      "name": "Ornamental Kales",
      "id": 56
   },
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
      "id": 57
   },
   {
      "properties": {
         "height": 36,
         "spread": 15,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Borders",
         "Container",
         "Dried Flowers",
         "Thriller"
         ]
      },
      "tileColor": "#E318F1",
      "name": "Pennisetum",
      "id": 58
   },
   {
      "properties": {
         "height": 17,
         "spread": 14,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "tileColor": "#A41229",
      "name": "Pentas",
      "id": 59
   },
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
      "id": 60
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
      "tileColor": "#EF8779",
      "name": "Phlox Flowers",
      "id": 61
   },
   {
      "properties": {
         "height": 33,
         "spread": 7,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers",
         "Dried Flowers"
         ]
      },
      "tileColor": "#45D914",
      "name": "Poppy",
      "id": 62
   },
   {
      "properties": {
         "height": 5,
         "spread": 7,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Container"
         ]
      },
      "tileColor": "#8B6744",
      "name": "Portulaca",
      "id": 63
   },
   {
      "properties": {
         "height": 39,
         "spread": 14,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Cut Flowers"
         ]
      },
      "tileColor": "#10C07D",
      "name": "Rudbeckias",
      "id": 64
   },
   {
      "properties": {
         "height": 30,
         "spread": 19,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Cut Flowers"
         ]
      },
      "tileColor": "#96A634",
      "name": "Salvia",
      "id": 65
   },
   {
      "properties": {
         "height": 27,
         "spread": 11,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Borders"
         ]
      },
      "tileColor": "#F4DE0C",
      "name": "Scabiosa",
      "id": 66
   },
   {
      "properties": {
         "height": 8,
         "spread": 13,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Beds",
         "Container",
         "Filler",
         "Spiller"
         ]
      },
      "tileColor": "#9CECA7",
      "name": "Scaevola",
      "id": 67
   },
   {
      "properties": {
         "height": 27,
         "spread": 15,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Cut Flowers"
         ]
      },
      "tileColor": "#ECC9E4",
      "name": "Snapdragons",
      "id": 68
   },
   {
      "properties": {
         "height": 27,
         "spread": 9,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Cut Flowers"
         ]
      },
      "tileColor": "#808B52",
      "name": "Statice",
      "id": 69
   },
   {
      "properties": {
         "height": 14,
         "spread": 5,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders",
         "Container",
         "Cut Flowers"
         ]
      },
      "tileColor": "#070350",
      "name": "Stock",
      "id": 70
   },
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
      "id": 71
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
      "tileColor": "#EE603F",
      "name": "Sunflowers",
      "id": 72
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
      "tileColor": "#150440",
      "name": "Sweet Peas",
      "id": 73
   },
   {
      "properties": {
         "height": 60,
         "spread": 84,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Indoor Sow",
         "use": [
         "Trellis or Lattice"
         ]
      },
      "tileColor": "#A2022E",
      "name": "Thunbergia",
      "id": 74
   },
   {
      "properties": {
         "height": 42,
         "spread": 21,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Borders"
         ]
      },
      "tileColor": "#8E7CEE",
      "name": "Tithonia",
      "id": 75
   },
   {
      "properties": {
         "height": 9,
         "spread": 21,
         "sun": "Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Borders",
         "Container"
         ]
      },
      "tileColor": "#9B7F41",
      "name": "Torenia",
      "id": 76
   },
   {
      "properties": {
         "height": 36,
         "spread": 7,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow",
         "use": [
         "Beds",
         "Cut Flowers"
         ]
      },
      "tileColor": "#03F5D0",
      "name": "Tuberose",
      "id": 77
   },
   {
      "properties": {
         "height": 13,
         "spread": 13,
         "sun": "Full Sun, Part Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "tileColor": "#61E790",
      "name": "Verbenas",
      "id": 78
   },
   {
      "properties": {
         "height": 5,
         "spread": 25,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "use": [
         "Beds",
         "Borders"
         ]
      },
      "tileColor": "#618FA0",
      "name": "Vincas",
      "id": 79
   },
   {
      "properties": {
         "height": 180,
         "spread": 108,
         "sun": "Full Sun",
         "lifeCycle": "Annual",
         "sowMethod": "Direct Sow/Indoor Sow",
         "use": [
         "Trellis or Lattice"
         ]
      },
      "tileColor": "#9D22AE",
      "name": "Vines and Climbers",
      "id": 80
   },
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
      "id": 81
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
      "id": 82
   }
];