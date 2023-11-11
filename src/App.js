import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const toNewContributorAdded = (collaborator) => {
    debugger
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner imageAdress='/images/banner.png'/>
      <Form times={times.map(time => time.name)} toCollaboratorRegistered={collaborator => toNewContributorAdded(collaborator)}/>

      {times.map(time => <Time 
        key={time.name} 
        name={time.name} 
        primaryColor={time.primaryColor} 
        secondColor={time.secondColor} 
        collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
      />)}   

    </div>
  );
}

export default App;