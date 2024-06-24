// pages/appointments.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

type AppointmentInputs = {
  date: string;
  time: string;
  doctor: string;
};

const Appointments = () => {
  const { register, handleSubmit, reset } = useForm<AppointmentInputs>();

  const onSubmit: SubmitHandler<AppointmentInputs> = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "Janji_Ahli"), {
        ...data,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="date" {...register("date", { required: true })} />
      <input type="time" {...register("time", { required: true })} />
      <input
        type="text"
        {...register("doctor", { required: true })}
        placeholder="Doctor's Name"
      />
      <button type="submit">Buat Janji</button>
    </form>
  );
};

export default Appointments;
