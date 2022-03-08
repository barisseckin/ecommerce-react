import React from 'react';
import { Button, Form } from 'semantic-ui-react'

export default function SignUp() {
    return (
        <div className='signup-form'>
            <Form>
                <Form.Group unstackable widths={1}>
                    <Form.Input label='Isim' placeholder='Isim' />
                    <Form.Input label='Soyisim' placeholder='Soyisim' />
                    <Form.Input type='password' label='Sifre' placeholder='Sifre' />
                    <Form.Input type='password' label='Sifre' placeholder='Sifre Tekrar' />
                </Form.Group>
                <Form.Group widths={1}>
                    <Form.Input label='Email' placeholder='Email' />
                </Form.Group>
                <Form.Checkbox label='Uyelik sartlarini okudum kabul ediyorum' />
                <Button type='submit'>Uye Ol</Button>
                <Button type='submit'>Giris Yap</Button>
            </Form>
        </div>
    )
}