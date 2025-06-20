export interface ChartDataList1Types {
  year: number;
  count: number;
  remaining_count: string;
  total_count: string;
}

export interface ChartDataList2Types {
  quantity: number;
  sell_quantity: number;
  remaining_quantity: number;
  year: number;
  city: string;
}

export const ChartDataList1: ChartDataList1Types[] = [
  { year: 2010, count: 10, remaining_count: "40", total_count: "50" },
  { year: 2011, count: 20, remaining_count: "30", total_count: "50" },
  { year: 2012, count: 15, remaining_count: "35", total_count: "50" },
  { year: 2013, count: 25, remaining_count: "25", total_count: "50" },
  { year: 2014, count: 22, remaining_count: "28", total_count: "50" },
  { year: 2015, count: 30, remaining_count: "20", total_count: "50" },
  { year: 2016, count: 28, remaining_count: "22", total_count: "50" },
];

export const ChartDataList2: ChartDataList2Types[] = [
  {
    quantity: 150,
    sell_quantity: 5,
    remaining_quantity: 145,
    year: 2014,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 36,
    remaining_quantity: 114,
    year: 2015,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 77,
    remaining_quantity: 123,
    year: 2016,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 18,
    remaining_quantity: 132,
    year: 2017,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 90,
    remaining_quantity: 60,
    year: 2018,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 10,
    remaining_quantity: 140,
    year: 2019,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 111,
    remaining_quantity: 139,
    year: 2020,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 20,
    remaining_quantity: 130,
    year: 2021,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 33,
    remaining_quantity: 117,
    year: 2022,
    city: "Baroda",
  },
  {
    quantity: 150,
    sell_quantity: 145,
    remaining_quantity: 5,
    year: 2023,
    city: "Baroda",
  },
];
