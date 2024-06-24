export interface IAhli {
  userId: string;
  id: string;
  name: string;
  speciality: string;
  age: number;
  rating: number;
  img: string;
  onClickPromise: () => void;
  onClickChat: () => void;
}
