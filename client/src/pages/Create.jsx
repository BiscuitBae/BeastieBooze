import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import { BoozeContext } from '../boozeContext'
import { UserContext } from '../userContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  drinkName: yup.string().required(),
  ingredients: yup.string().required(),
  instructions: yup.string().required(),
  alcoholic: yup.boolean().required()
})

const Create = () => {

  const { makeADrink } = useContext(BoozeContext);
  const { userInfo, addCreation } = useContext(UserContext);

  const {register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data, e) => {
    
    //for updating user 
    addCreation(data)
    makeADrink(data);
    e.target.reset();
  };

  return (
    <div className='form-group'>
      <h1 className="page-heading" style={{paddingBottom: '0px'}}>Let's make a drink!</h1>
      <form className='input-form ' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='create-form-heading'>Name Your Drink!</h4>
        <input className="form-control" {...register("drinkName")} />
        {errors.drinkName?.message ? <p className='required'>*{errors.drinkName?.message}</p> : null}
        <h4 className='create-form-heading'>What's in it?</h4>
        <textarea className='form-control' rows='3' {...register('ingredients')} placeholder={
          `Example: \n1tsp: honey \n1cup: booze`} />
        {errors.ingredients?.message ? <p className='required'>*{errors.ingredients?.message}</p> : null}
        <h4 className='create-form-heading'>How do you concoct this tasty beverage?</h4>
        <textarea className='form-control' rows='3'{...register("instructions")} placeholder="Be specific!" />
        {errors.instructions?.message ? <p className='required'>*{errors.instructions?.message}</p> : null}
        <h4 className='create-form-heading'>And is it boozy?</h4>
        <select className='form-control' {...register("alcoholic")}>
          <option value={true}>Why, yes it is</option>
          <option value={false}>It's a virgin drank</option>
        </select>
        <div className='create-button'>
        <button className="btn btn-dark" type="submit"> Submit </button>
        </div>
      </form>
    </div>
  )
}

export default Create