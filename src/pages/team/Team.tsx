import React from "react";

import MemberCard from "../../components/member-card/MemberCard";

import './Team.scss';

function Team() {
  const members = [
    {
      img: '',
      name: 'Robin ekmen',
      email: 'rekmen@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/rekmen',
      role: 'Scrum Master, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Shayan mahtabi',
      email: 'smahtabi@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/smahtabi',
      role: 'Product Owner, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Niklas Bäumker',
      email: 'niba@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/niba',
      role: 'Quality Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Lukas Krämer',
      email: 'lukr@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/lukr',
      role: 'Quality Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Jakob Kramer',
      email: 'jkramer3@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/jkramer3',
      role: 'Test Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Leo Alexander Scheubel',
      email: 'lscheub@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/lscheub',
      role: 'Test Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Christoph Rode',
      email: 'rodec@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/rodec',
      role: 'Product Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Andreas Sittner',
      email: 'asittner@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/asittner',
      role: 'Tools Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Kai Zingler',
      email: 'kzingler@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/kzingler',
      role: 'Tools Representative, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Yitting Jiang',
      email: 'yitting@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/yitting',
      role: 'Documents Manager, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Charlie Legrand Donfack',
      email: 'donfack@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/donfack',
      role: 'Documents Representative, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Joel-Maurice Keßler',
      email: 'kessljo@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/kessljo',
      role: 'Comittee Member, Developer',
      motto: 'lorem ipsum'
    },
    {
      img: '',
      name: 'Ghaith Halima',
      email: 'ghalima@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/ghalima',
      role: 'Developer',
      motto: 'lorem ipsum'
    },
  ]

  return(
    <div className="teampage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Das (A) Team</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Corporis libero quia consequatur quae animi perferendis numquam, 
            accusamus dolores vel, quo sunt officia quas quisquam eius 
            ad nemo doloribus ipsum odio!
          </div>
        </div>
      </div>

      <div className="container members">
        {members.map((member) => {
          return(
            <MemberCard
              img={member.img}
              name={member.name}
              email={member.email}
              gitlab={member.gitlab}
              role={member.role}
              motto={member.motto}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Team;
