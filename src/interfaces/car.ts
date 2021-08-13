export interface CarProfile {
  brand: string;
  model: string;
  fuel: string;
  regNo: string;
  chasisNo: string;
  engineNo: string;
  insuranceDate: string;
  insuranceComp: string;
  address: string;
  imageURL: string;
  documents: { name: string; category: string; url: string }[];
  notifications: string[];
  id: string;
}
