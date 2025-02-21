import styles from './lesson13.module.css';
import * as Yup from 'yup';
import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

// * функции для валидации в Yup
// number() - проверка на число
// .typeError('message') - сообщение при ошибке типа
// .integer('message') проверка на целое число + сообщение об ошибке
// .required('message') - обязательно поле
// .min(100, 'message') - не меньше чем это число (для числа)
// .max(1500, 'message') - не больше чем это число (для числа)
// .email('incorrect email format') - проверка строки на формат email
// .min(100, 'message') - не меньше чем это кол-во символов (для строки)
// .max(1500, 'message') - не больше чем это кол-во символов (для строки)


// * создали схему для валидации
// подключать будем в formik
const schema = Yup.object().shape({
  model: Yup
    .number()
    .typeError('model is a number')
    .required('model is required')
    .integer('model is integer')
    .min(100, 'model number is more than 100')
    .max(1500, 'model number is less than 1500'),
  creator: Yup
    .string()
    .typeError('creator is a string')
    .required('creator is required'),
  email: Yup
    .string()
    .typeError('email is a string')
    .email('incorrect email format')
    .max(50, 'less than 50 symbols, please')
});

export default function Lesson13(): JSX.Element {

  const formik = useFormik({
    initialValues: {
      model: '500',
      creator: 'skynet',
      email: 'skynet@gmail.com'
    } as IFormValues,
    // подключаем Yup к Formik
    validationSchema:schema,
    validateOnChange:false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <div className={styles.formContainer}>
      <h2>Lesson 13: YUP validation 🔐</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input onChange={formik.handleChange} name="model" type="text" placeholder="model" value={formik.values.model} />
        <input onChange={formik.handleChange} name="creator" type="text" placeholder="creator" value={formik.values.creator} />
        <input onChange={formik.handleChange} name="email" type="text" placeholder="email" value={formik.values.email} />
        <MyButton />
      </form>
      {/* ошибки забираем из formik оп ключам */}
      <span>{formik.errors.model}</span>
      <span>{formik.errors.creator}</span>
      <span>{formik.errors.email}</span>
    </div>
  );
}
