// lib/mock-data.ts

// 1. Define the TypeScript interface so we have strict typing
export interface PartyResult {
  partyName: string;
  votes: number;
  percentage: number;
}

export interface VotingStation {
  id: string; // We will use this for the URL (e.g., /station/iec-12345)
  name: string;
  province: string;
  municipality: string;
  ward: string;
  address: string;
  totalVotes: number;
  validVotes: number;
  spoiltVotes: number;
  turnoutPercentage: number;
  verificationStatus: "Verified & Signed" | "Pending Audit" | "Captured";
  resultsSlipUrl: string; // Mock link to a PDF
  results: PartyResult[];
}

// 2. Create an array of mock voting stations
export const MOCK_STATIONS: VotingStation[] = [
  {
    id: "iec-ga-58-01",
    name: "Wits University - Great Hall",
    province: "Gauteng",
    municipality: "City of Johannesburg",
    ward: "Ward 58",
    address: "1 Jan Smuts Avenue, Braamfontein, Johannesburg",
    totalVotes: 1250,
    validVotes: 1235,
    spoiltVotes: 15,
    turnoutPercentage: 68.5,
    verificationStatus: "Verified & Signed",
    resultsSlipUrl: "#mock-pdf-link-1",
    results: [
      { partyName: "Party A", votes: 600, percentage: 48.5 },
      { partyName: "Party B", votes: 400, percentage: 32.3 },
      { partyName: "Party C", votes: 200, percentage: 16.1 },
      { partyName: "Others", votes: 35, percentage: 3.1 },
    ],
  },
  {
    id: "iec-wc-12-02",
    name: "Sea Point Primary School",
    province: "Western Cape",
    municipality: "City of Cape Town",
    ward: "Ward 12",
    address: "Main Road, Sea Point, Cape Town",
    totalVotes: 2100,
    validVotes: 2080,
    spoiltVotes: 20,
    turnoutPercentage: 72.1,
    verificationStatus: "Captured",
    resultsSlipUrl: "#mock-pdf-link-2",
    results: [
      { partyName: "Party B", votes: 1100, percentage: 52.8 },
      { partyName: "Party A", votes: 700, percentage: 33.6 },
      { partyName: "Party C", votes: 200, percentage: 9.6 },
      { partyName: "Others", votes: 80, percentage: 4.0 },
    ],
  },
  {
    id: "iec-kzn-45-03",
    name: "Durban City Hall",
    province: "KwaZulu-Natal",
    municipality: "eThekwini",
    ward: "Ward 45",
    address: "Anton Lembede St, Durban Central, Durban",
    totalVotes: 3400,
    validVotes: 3350,
    spoiltVotes: 50,
    turnoutPercentage: 65.0,
    verificationStatus: "Pending Audit",
    resultsSlipUrl: "#mock-pdf-link-3",
    results: [
      { partyName: "Party C", votes: 1500, percentage: 44.7 },
      { partyName: "Party A", votes: 1000, percentage: 29.8 },
      { partyName: "Party B", votes: 700, percentage: 20.8 },
      { partyName: "Others", votes: 150, percentage: 4.7 },
    ],
  },
];

// 3. A helper function to simulate searching the database
export function searchStations(query: string): VotingStation[] {
  const lowerCaseQuery = query.toLowerCase();
  return MOCK_STATIONS.filter(
    (station) =>
      station.name.toLowerCase().includes(lowerCaseQuery) ||
      station.ward.toLowerCase().includes(lowerCaseQuery) ||
      station.municipality.toLowerCase().includes(lowerCaseQuery) ||
      station.province.toLowerCase().includes(lowerCaseQuery)
  );
}

// 4. A helper function to get a single station by ID (for the results page)
export function getStationById(id: string): VotingStation | undefined {
  return MOCK_STATIONS.find((station) => station.id === id);
}