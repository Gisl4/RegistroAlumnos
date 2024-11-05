import {Router} from 'express';
import pool from '../database.js';

const router = Router();

router.get('/add', (req,res)=>{
    res.render('alumnos/add');
});

router.post('/add', async(req, res)=>{
    try {
        const {name, lastname, address, phone, email, birthdate} = req.body;
        const newAlumno = {
            name, lastname, address, phone, email, birthdate
        }
        await pool.query('INSERT INTO alumnos SET ?', [newAlumno]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.get('/list', async(req, res)=>{
    try {
        const [result] = await pool.query('SELECT id ,name, lastname, address, phone, email, DATE_FORMAT(birthdate, "%d-%m-%Y") as birthdate FROM alumnos');
        res.render('alumnos/list', {alumnos: result});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.get('/edit/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const [alumno] = await pool.query('SELECT id ,name, lastname, address, phone, email, DATE_FORMAT(birthdate, "%Y-%m-%d") as birthdate FROM alumnos WHERE id = ?', [id]);
        const alumnoEdit = alumno[0];
        res.render('alumnos/edit', {alumno: alumnoEdit});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.post('/edit/:id', async(req, res)=>{
    try {
        const {name, lastname, address, phone, email, birthdate} = req.body;
        const {id} = req.params;
        const editAlumno = {name, lastname, address, phone, email, birthdate};
        await pool.query('UPDATE alumnos SET ? WHERE id = ?', [editAlumno, id]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.get('/delete/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM alumnos WHERE id = ?', [id]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

export default router;