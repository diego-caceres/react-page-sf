import React from 'react';
import TeamItem from './TeamItem';
import {TeamItemHiring, TeamItemSocialMedias, TeamItemContact} from './TeamItemSpecials';

const TeamArray = [
  { id: 1, name: 'Jesús Portillo', role: 'Co-Founder & CTO', image: require('../../images/team/team-j-portillo.png') },
  { id: 2, name: 'Marcelo Blanco', role: 'Co-Founder & CEO', image: require('../../images/team/team-m-blanco.png') },
  { id: 3, name: 'Andres Goyen', role: 'COO - CIO', image: require('../../images/team/team-a-goyen.jpg') },
  { id: 4, name: 'Diego Cáceres', role: 'Technical Leader', image: require('../../images/team/team-d-caceres.png') },
  { id: 5, name: 'Federico Sobral', role: 'Technical Leader', image: require('../../images/team/team-f-sobral.png') },
  { id: 6, name: 'Nicolás Romeou', role: 'Web Developer', image: require('../../images/team/team-n-romeou.png') },
  { id: 7, name: 'Matías Emiliano "El Mago" Piñeiro', role: 'Web & Mobile Developer', image: require('../../images/team/team-m.pineiro.png') }, 
  { id: 8, name: 'Natalia Calle', role: 'Mobile Developer', image: require('../../images/team/team-n-calle.png') },
  { id: 80, name: 'Hiring' },
  { id: 9, name: 'Joaquin Mut', role: 'CFO', image: require('../../images/team/team-j-mut.jpg') },
  { id: 10, name: 'Dayana Bakerdjian', role: 'Technical Leader', image: require('../../images/team/team-d-b.png') },
  { id: 11, name: 'Luis Moreno', role: 'Customer Service Analyst', image: require('../../images/team/team-l-moreno.png') },
  { id: 120, name: 'Hiring' },
  { id: 12, name: 'Fiorella Ichkhanian', role: 'International Sales Manager', image: require('../../images/team/team-f-ich.jpg') },
  { id: 13, name: 'Gastón Rafael "Sin Manos" Legnani', role: 'Technical Leader', image: require('../../images/team/team-g-legnani.png') },
  { id: 14, name: 'Pablo Corso', role: 'Web Developer', image: require('../../images/team/team-pablo-c.jpg') },
  { id: 15, name: 'Gabriela Flores', role: 'Sales Executive', image: require('../../images/team/team-g-flores.jpg') },
  { id: 16, name: 'Matías Corso', role: 'Web Developer', image: require('../../images/team/team-m-corso.jpg') },
  { id: 17, name: 'Gonzalo Castro', role: 'Banking and Finance Developer', image: require('../../images/team/team-g-castro.jpg') },
  { id: 18, name: 'Santiago Rivero', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/team-n-pereira.png') },
  { id: 180, name: 'Hiring' },
  { id: 19, name: 'Pablo Revetria', role: 'Web & Mobile Designer UX-UI', image: require('../../images/team/team-p-revetria.png') },
  { id: 20, name: 'Federico Sendra', role: 'Mobile Developer', image: require('../../images/team/team-f-sendra.png') }

];

const TeamContent = () => (
    <div>
        <div className="flex-container">
        	{TeamArray.map((item, index) => {
        		if(index === 8)
        			return <TeamItemHiring key={item.id} {...item} />
        		else if (index === 12) 
        			return <TeamItemSocialMedias key={item.id} {...item} />
        		else if (index === 20)
        			return <TeamItemContact key={item.id} {...item} />
        		else 
        			return <TeamItem key={item.id} {...item} />
        	})}		  
		</div>
    </div>
)

export default TeamContent;