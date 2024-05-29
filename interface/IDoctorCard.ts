interface IDoctorCard {
    name: string;
    speciality: string;
    age: number;
    rating: number;
    imgUrl: string;
    onClickPromise: () => void;
    onClickChat: () => void;
}