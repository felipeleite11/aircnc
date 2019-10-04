import React, { useState } from 'react'
import api from '../../services/api'

import 'animate.css/animate.min.css'

export default function Login({ history }) {
    const [email, setEmail] = useState('adozindo@robot.rio.br')

    async function handleSubmit(e) {
        e.preventDefault()

        const session = await api.post('/sessions', { email })

        localStorage.setItem('user', session.data._id)

        history.push('/dashboard')
    }

    return (
        <>
            <p>Ofereça <b>spots</b> para programadores e encontre talentos.</p>

            <form onSubmit={handleSubmit} className="animated fadeIn">
                <label htmlFor="email">
                    E-mail *
                </label>

                <input 
                    type="email" 
                    id="email" 
                    placeholder="Seu melhor e-mail" 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <button type="submit" className="btn">
                    Entrar
                </button>
            </form>
        </>
    )
}