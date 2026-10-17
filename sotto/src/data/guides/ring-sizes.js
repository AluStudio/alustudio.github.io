// Ring size rows for the ring-size guide, shared by every language's pack.
// Mirrors sotto-ios UnitConversionService.ringSizeTable: each system shows the
// size nearest to the US size's circumference, as the app converts it.
// Columns: US, circumference (mm), inside diameter (mm), UK, EU, Japan, China.

export const RING_SIZE_ROWS = [
  ["4", "46.8", "14.9", "H½", "47", "7", "8"],
  ["5", "49.3", "15.7", "J½", "49", "9", "10"],
  ["6", "51.9", "16.5", "L½", "52", "11", "12"],
  ["7", "54.4", "17.3", "N½", "54", "14", "14"],
  ["8", "57.0", "18.1", "P½", "57", "16", "17"],
  ["9", "59.5", "18.9", "R½", "59", "18", "19"],
  ["10", "62.1", "19.8", "T½", "62", "20", "22"],
  ["11", "64.6", "20.6", "V½", "64", "23", "23"],
];
