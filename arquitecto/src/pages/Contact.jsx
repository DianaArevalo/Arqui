import React from 'react'
import background from '../assets/photography/urban/rogelio3.png'
import { useFormContact } from '../hooks/useFormContact'
//motion
import { motion } from "framer-motion"
import { fadeIn } from '../constants/variants'
//import BocaNegra from "../assets/photography/nature/dog.png"

const Contact = () => {

    const contactForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    const onValidate = (formState) => {
        let errors = {}
        let regexComments = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,250}$/
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        let regexPhone = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/

        if (!formState.name.trim()) {
            errors.name = 'This field is required'
        } else if (!regexName.test(formState.name)) {
            errors.name = 'This field accepts only letters and spaces '
        }

        if (!formState.email.trim()) {
            errors.email = 'This field is required'
        } else if (!emailRegex.test(formState.email)) {
            errors.email = 'The "Email" field contains an invalid format. '
        }

        if (!formState.phone.trim()) {
            errors.phone = 'This field is required'
        } else if (!regexPhone.test(formState.phone)) {
            errors.phone = 'Debe ser un numero valido'
        }

        if (!formState.message.trim()) {
            errors.message = 'This field is required'
        } else if (!regexComments.test(formState.message)) {
            errors.message = 'Cannot exceed 250 characters'
        }

        return errors


    }

    const { formState, handleSubmit, onInputChange, error, loading } = useFormContact(contactForm, onValidate)

    return (
        <section className='max-container bg-gray-default dark:bg-corbeau-default justify-center items-center'>
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}

            >


                <div className=" group relative overflow-hidden rounded-xl ">
                    {/*img*/}

                    <div
                        className=' flex bg-no-repeat bg-cover bg-rigth-bottom object-center  px-8 py-8 justify-around items-center hover:bg-black/70 '
                        style={{ backgroundImage: `url(${background})` }}
                    >
                        <div className='max-container md:w-1/3 lg:w-2/5'>
                            <form
                                onSubmit={handleSubmit}
                                action=""
                                className='bg-orange-default/55 dark:bg-corbeau-default/85 dark:ring dark:ring-blue-default dark:ring-offset-0 text-black dark:text-white ring ring-orange-default ring-offset-0 shadow-2xl p-10 rounded-2xl '
                            >
                                <h1 className='block text-%xl font-bold justify-center head-text capitalize'>Get in Touch...</h1>



                                <div className='my-10'>
                                    <div>
                                        <label htmlFor="" className='font-bold'>Name</label>
                                        <input
                                            type="text"
                                            placeholder='Jhon Perez'
                                            className='input'
                                            name='name'
                                            onChange={onInputChange}
                                            value={formState.name}
                                        />

                                        {error.name && <div className='bg-orange-default dark:bg-blue-default alert alert-danger rounded-md p-1'>
                                            {error.name}
                                        </div>}
                                    </div>

                                    <div>
                                        <label htmlFor="" className='font-bold'>Email</label>
                                        <input
                                            type="email"
                                            placeholder='jhonPerez@gmail.com'
                                            className='input'
                                            name='email'
                                            onChange={onInputChange}
                                            value={formState.email}
                                        />
                                        {error.email && <div className='bg-orange-default dark:bg-blue-default alert alert-danger rounded-md p-1'>
                                            {error.email}
                                        </div>}
                                    </div>

                                    <div>
                                        <label htmlFor="" className='font-bold'>Phone</label>
                                        <input
                                            type="number"
                                            placeholder='3202002233'
                                            className='input'
                                            name='phone'
                                            onChange={onInputChange}
                                            value={formState.phone}
                                        />
                                        {error.phone && <div className='bg-orange-default dark:bg-blue-default alert alert-danger rounded-md p-1'>
                                            {error.phone}
                                        </div>}
                                    </div>

                                    <div>
                                        <label htmlFor="" className='font-bold'>Send a message...</label>
                                        <textarea
                                            name="message"
                                            id=""
                                            cols="30"
                                            rows="5"
                                            className='textarea'
                                            onChange={onInputChange}
                                            value={formState.message}


                                        ></textarea>
                                        {error.message && <div className='bg-orange-default dark:bg-blue-default alert alert-danger rounded-md p-1'>
                                            {error.message}
                                        </div>}
                                    </div>

                                    <button
                                        className='btn my-5 py-3'
                                        type='submit'
                                        disabled={loading}
                                    >
                                        {loading ? "Sending" : "Send"}
                                    </button>

                                </div>
                            </form>
                        </div>


                    </div>

                </div>



            </motion.div>


        </section>
    )
}

export default Contact