import { useState } from 'react'
import MyButton from '../myButton/MyButton'
import styles from './genderReveal.module.css'
import { useFormik } from 'formik';
interface IGenderData{
    name: string,
    gender: string,
    probability: number,
  }
interface IName{
    name:string
}
export default function FormGender():JSX.Element {
      const [isLoading, setIsLoading] = useState(false);
      const [genderData, setGenderData] = useState<IGenderData| null>(null);
      const formik = useFormik({
              initialValues: {
              name:'',
              },
              onSubmit: async (values:IName , {resetForm}) => {
                setIsLoading(true);
                const response = await fetch(`https://api.genderize.io/?name=${values.name}`);
                const data:IGenderData = await response.json();
                setGenderData(data);
                setIsLoading(false);
                resetForm();
              }
          })
  return (
    <div>
      <h2>Lets guess your gender! Yalla! ⚡️</h2>
      <form  onSubmit={formik.handleSubmit} className={styles.form}>
        <input value={formik.values.name} onChange={formik.handleChange} name="name" type="text" placeholder="enter your name"></input>
        <MyButton text="submit"/>
        <p className={styles.text}>name:{genderData?.name}</p>
        <p className={styles.text}>gender:{genderData?.gender}</p>
        <p className={styles.text}>probability:{genderData?.probability}</p>
      </form>
    </div>
  )
}