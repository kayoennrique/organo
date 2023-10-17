import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      nome: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      primaryColor: '#D86EBF',
      secondColor: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      primaryColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const toNewContributorAdded = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} toRegisteredCollaborator={colaborador => toNewContributorAdded(colaborador)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} primaryColor={time.primaryColor} secondColor={time.secondColor}/>)}
    </div>
  );
}

export default App;
