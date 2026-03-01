import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { authSignup } from '../services/api';


export default function Signup(){
    const [form, setForm] = useState({ name:'', email:'', password:'' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
}


    async function submit(e){
        e.preventDefault();
        setError('');
        try{
            await authSignup(form);
            navigate('/login');
        }catch(err){
            setError(err?.response?.data?.message || 'Signup failed');
        }
    }


return (
    <div className="card">
        <h2>Signup</h2>
        <form onSubmit={submit}></form>
            <div className="form-row">
                <label className="small">Name</label>
                <input className="input" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            </div>
            <div className="form-row">
                <label className="small">Email</label>
                <input className="input" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            </div>
            <div className="form-row"></div>
    </div>
)