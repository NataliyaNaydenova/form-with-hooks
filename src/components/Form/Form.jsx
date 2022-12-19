import React, { useEffect } from 'react';
import styles from './Form.module.scss';
import { useForm, useController } from 'react-hook-form';
import { useState } from 'react';

const Form = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [results, setResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const onSubmit = (data) => setResults(data);

  useEffect(() => {
    console.log(results);
  }, [results])

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fieldWrapper}>
        <label className={styles.inputLabel} htmlFor="first-name">First Name*</label>
        <input className={styles.input} type="text" placeholder='First Name' id="first-name" {...register("firstName", {required: true})}></input>
        {errors?.firstName?.type === 'required' && <p className={styles.alert} role="alert">First name is required</p>}
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.inputLabel} htmlFor='last-name'>Last Name*</label>
        <input className={styles.input} type="text" placeholder='Last Name' id='last-name' {...register("lastName", {required: true})}></input>
        {errors?.lastName?.type === 'required' && <p className={styles.alert} role="alert">Last name is required</p>}
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.inputLabel} htmlFor='email'>Email*</label>
        <input className={styles.input} type="email" placeholder='Email' id='email' {...register("email", {required: true, pattern: /^\S+@\S+$/i})}></input>
        {errors?.email?.type === 'required' && <p className={styles.alert} role="alert">Email is required</p>}
      </div>

      <div className={styles.fieldWrapper}>
        <label className={styles.inputLabel} htmlFor='age'>Age</label>
        <input className={styles.input} type="text" placeholder='Age' id='age' {...register("age", {required: false})}></input>
      </div>
      <div className={styles.fieldWrapper}>
        <label className={styles.selectLabel} htmlFor='hair-color'>Hair Color</label>
        <select className={styles.select} id='hair-color' {...register("hairColor", { required: false })}>
          <option value="blond">Blond</option>
          <option value="brown">Brown</option>
          <option value="red">Red</option>
        </select>
      </div>

      <div className={styles.fieldWrapper}>
        <strong>Select outfit Size</strong>
        <div className={styles.radioWrapper}>
          <input className={styles.radio} type="radio" id="size-s" value='S' {...register("selectSize", { required: false })}></input>
          <label className={styles.inputLabel} htmlFor='size-s'>S</label>
        </div>

        <div className={styles.radioWrapper}>
          <input className={styles.radio} type="radio" id="size-m" value='M' {...register("selectSize", { required: false })}></input>
          <label className={styles.inputLabel} htmlFor='size-m'>M</label>
        </div>

        <div className={styles.radioWrapper}>
          <input className={styles.radio} type="radio" id="size-l" value='L' {...register("selectSize", { required: false })}></input>
          <label className={styles.inputLabel} htmlFor='size-l'>L</label>
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <strong>Terms</strong>
        <div className={styles.checkbox}>
          <input className={styles.checkboxInput} type="checkbox" id='terms' value='terms' {...register("terms", { required: true })}></input>
          <label className={styles.checkboxLabel} htmlFor='terms'>Terms</label>
        </div>

        <div className={styles.checkbox}>
          <input className={styles.checkboxInput} type="checkbox" id='receive-emails' value='receieve emails' {...register("terms", { required: true })}></input>
          <label className={styles.checkboxLabel} htmlFor='receive-emails'>Receive Emails</label>
        </div>

        <div className={styles.checkbox}>
          <input className={styles.checkboxInput} type="checkbox" id='join-team' value='join teams' {...register("terms", { required: true })}></input>
          <label className={styles.checkboxLabel} htmlFor='join-team'>Join Team</label>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={() => setVisible(!visible)}>Submit</button>
        </div>

        <strong>All fields Marked with * are requierd</strong>
      </div>
      {visible && <div className={styles.successMessage}>
        <p>Successfully sent!</p>
      </div>}
      {visible && <div className={styles.resultsWrapper}>
          <p className={styles.result}>First Name: {results.firstName}</p>
          <p className={styles.result}>Last Name: {results.lastName}</p>
          <p className={styles.result}>Email: {results.email}</p>
          <p className={styles.result}>Age: {results.age}</p>
          <p className={styles.result}>Hair Color: {results.hairColor}</p>
          <p className={styles.result}>Size: {results.selectSize}</p>
          <p className={styles.result}>Terms: {results.terms}</p>
      </div>}
    </form>
  )
}

export default Form