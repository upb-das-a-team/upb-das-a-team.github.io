import React, { useState } from "react";
import { AiOutlineCopyrightCircle, AiOutlineGitlab } from "react-icons/ai";
import { ImSection } from "react-icons/im";
import { Link } from "react-router-dom";

import { nanoid } from 'nanoid';

import MemberCard from "../../components/member-card/MemberCard";

import './Team.scss';

function Team() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const members01 = [
    {
      img: 'RobinEkmen.png',
      name: 'R. Ekmen',
      email: 'rekmen@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/rekmen',
      role: 'Scrum Master, Developer',
      motto: 'If you tell the truth, you don\'t have to remember anything.'
    },
    {
      img: 'ShayanMahtabi.png',
      name: 'S. Mahtabi',
      email: 'smahtabi@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/smahtabi',
      role: 'Product Owner, Developer',
      motto: 'Courage is grace under pressure.'
    },
    {
      img: 'NiklasBäumker.png',
      name: 'N. Bäumker',
      email: 'niba@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/niba',
      role: 'Quality Manager, Developer',
      motto: 'Life is what happens to you while you\'re busy making other plans.'
    }
  ]

  const members02 = [
    {
      img: 'LukasKrämer.png',
      name: 'L. Krämer',
      email: 'lukr@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/lukr',
      role: 'Quality Manager, Developer',
      motto: 'Work as intensely as you play and play as intensely as you work.'
    },
    {
      img: 'JakobKramer.png',
      name: 'J. Kramer',
      email: 'jkramer3@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/jkramer3',
      role: 'Test Manager, Developer',
      motto: 'Do not accept anything because it comes from the mouth of a respected person.'
    },
    {
      img: 'AlexanderScheubel.png',
      name: 'L. A. Scheubel',
      email: 'lscheub@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/lscheub',
      role: 'Test Manager, Developer',
      motto: 'The important thing is not to stop questioning.'
    }
  ]

  const members03 = [
    {
      img: 'ChristophRode.png',
      name: 'C. Rode',
      email: 'rodec@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/rodec',
      role: 'Product Manager, Developer',
      motto: 'Give up control. You never really had it anyway.'
    },
    {
      img: 'AndreasSittner.png',
      name: 'A. Sittner',
      email: 'asittner@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/asittner',
      role: 'Tools Manager, Developer',
      motto: 'Never do the impossible. People will expect you to do it forever after.'
    },
    {
      img: 'KaiZingler.png',
      name: 'K. Zingler',
      email: 'kzingler@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/kzingler',
      role: 'Tools Representative, Developer',
      motto: 'An investment in knowledge always pays the best interest.'
    }
  ]

  const members04 = [
    {
      img: 'YittingJiang.png',
      name: 'Y. Jiang',
      email: 'yitting@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/yitting',
      role: 'Documents Manager, Developer',
      motto: 'The greatest of all weaknesses is the fear of appearing weak.'
    },
    {
      img: 'CharlieLegrandDonfack.png',
      name: 'C. L. Donfack',
      email: 'donfack@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/donfack',
      role: 'Documents Representative, Developer',
      motto: 'Luck is where preparation meets opportunity.'
    },
    {
      img: 'Joel-MauriceKessler.png',
      name: 'J. M. Keßler',
      email: 'kessljo@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/kessljo',
      role: 'Comittee Member, Developer',
      motto: 'No one is all evil. Everybody has a good side. If you keep waiting, it will comme up.'
    }
  ]

  const members05 = [
    {
      img: 'GhaithHalima.png',
      name: 'G. Halima',
      email: 'ghalima@mail.uni-paderborn.de',
      gitlab: 'https://git.cs.uni-paderborn.de/ghalima',
      role: 'Developer',
      motto: 'Perpetual optimism is a force multiplier.'
    }
  ]

  return(
    <div className="teampage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="teampage-header">Das A Team</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 teampage-description">
            Unser Team besteht aus qualifizierte Entwickler und Manager, die in einer flache Hierarchie
            arbeiten. Sie sind fähig jeden Wunsch des Kunden zu erfüllen. Hier finden Sie die Mitglieder
            unseres Teams
          </div>
        </div>
      </div>

      <div className="container">
        <div className="members">
          <div className="card-group">
            {members01.map((member) => {
              return(
                <MemberCard
                  key={nanoid()}
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
          <div className="empty-space"></div>
          <div className="card-group">
            {members02.map((member) => {
              return(
                <MemberCard
                  key={nanoid()}
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
          <div className="empty-space"></div>
          <div className="card-group">
            {members03.map((member) => {
              return(
                <MemberCard
                  key={nanoid()}
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
          <div className="empty-space"></div>
          <div className="card-group">
            {members04.map((member) => {
              return(
                <MemberCard
                  key={nanoid()}
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
          <div className="empty-space"></div>
          <div className="card-group">
            {members05.map((member) => {
              return(
                <MemberCard
                  key={nanoid()}
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
      </div>

      <div className="teampage-footer">
        <div className="teampage-footer-left">
          <Link className="custom-link section-symbol" to={'/impressum'}>
            <ImSection />
          </Link>
        </div>
        <div className="teampage-footer-center">
          <div className="footer-copyright-icon"><AiOutlineCopyrightCircle /></div>
          <div className="footer-current-year">{currentDate.getFullYear()}</div>
          <div className="footer-team-name">Das A Team</div>
        </div>
        <div className="teampage-footer-right">
          <a className= "custom-link" href="https://git.cs.uni-paderborn.de/swtpra2223/gruppe11/" target={'_blank'}>
            <div className="footer-gitlab-icon">
              <AiOutlineGitlab />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Team;
