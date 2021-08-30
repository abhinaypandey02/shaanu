export interface BookedSession {
  id: string;
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  fullname: string;
  phone: number;
  location: string;
  token: number;
  dateTime: number;
  freeServices: { group: string; service: { id: string; name: string } }[];
}
