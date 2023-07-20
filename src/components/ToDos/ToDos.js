import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table } from 'react-bootstrap';
import SingleToDo from './SingleToDo';

export default function ToDos() {

const [toDos, setToDos] = useState();


const getToDos = () => {
  axios.get(`https://localhost:7192/api/ToDos`).then(response => {
    console.log(response)
    setToDos(response.data)
  })
}

useEffect(() => {
  getToDos()
}, []);

  return (
    <section className="toDos">
      <article className="bg-info p-5">
        <h1 className="text-center">ToDos</h1>
      </article>

      
      <Container className='p-2'>

        <Table className="table bg-info table-dark my-3">
          <thead className="table-secondary text-uppercase">
            <tr>
              <th>Name</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map(t =>
              <SingleToDo key={t.toDoId} toDos={t} getToDos={getToDos} />    
            )}
          </tbody>
        </Table>

      </Container>
    </section>
  )
}
