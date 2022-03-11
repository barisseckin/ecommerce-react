import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import * as Yup from "yup"

export default function SignUp() {

    const initialValues = {
        userName: "",
        password: "",
        eMail: "",
    }

    const schema = Yup.object({
        userName: Yup.string().required("Kullanici adi alani bos birakilamaz!"),
        password: Yup.string().required("Sifre alani bos birakilamaz!"),
        eMail: Yup.string().required("E mail alani bos birakilamaz!")        
    })

    return (
        <div className='signup-form'>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit = {(values) => {
                axios.post("http://localhost:8080/api/users/add",{
                    "userName": values.userName,
                    "password": values.password,
                    "eMail": values.eMail
                })
            }}
            >

            </Formik>
            <Form>
                <Form.Group unstackable widths={1}>
                    <Form.Input label='Isim soyisim' placeholder='Isim' />
                    <Form.Input label='E Mail' placeholder='E mail' />
                    <Form.Input type='password' label='Sifre' placeholder='Sifre' />
                </Form.Group>
                <Form.Checkbox label='Uyelik sartlarini okudum kabul ediyorum' />
                <Button type='submit'>Uye Ol</Button>
                <Button type='submit'>Giris Yap</Button>
            </Form>
        </div>
    )
}