import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'

export default function SignUp() {
    return (
        <div>
            <Form>
                <Form.Group unstackable widths={1}>
                    <Form.Input label='Isim' placeholder='Isim' />
                    <Form.Input label='Soyisim' placeholder='Soyisim' />
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