import React, { useState, useMemo } from 'react'

import api from '../../services/api'

import camera from '../../assets/camera.svg'

import './styles.css'
import 'animate.css/animate.min.css'

export default function New({ history }) {
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState([])
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function handleSubmit(e) {
        e.preventDefault()

        const user_id = localStorage.getItem('user')
        const data = new FormData()

        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)
        
        await api.post('/spots', data, {
            headers: { user_id }
        })

        history.push('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit} className="animated fadeIn">
            <label 
                id="thumbnail" 
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
                <img src={camera} alt="Selecione uma imagem" />
            </label>

            <label htmlFor="campany">Empresa*</label>
            <input 
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />

            <label htmlFor="techs">Tecnologias* (separadas por vírgula)</label>
            <input 
                id="techs"
                placeholder="Quais as tecnologias usadas?"
                value={techs}
                onChange={e => setTechs(e.target.value)}
            />

            <label htmlFor="price">Valor da diária*</label>
            <input 
                id="price"
                placeholder="Se for gratuito, deixe em branco."
                value={price}
                onChange={e => setPrice(e.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}