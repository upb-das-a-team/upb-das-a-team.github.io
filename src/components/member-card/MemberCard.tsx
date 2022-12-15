import React from "react";

import { AiOutlineMail } from '../../../node_modules/react-icons/ai';
import { FiGitlab } from '../../../node_modules/react-icons/fi';

import './MemberCard.scss';

function MemberCard(props: any) {
  return (
    <div className="container card member-card">
      <div className="row member-card--header">
        <div className="container">
          <div className="row">
            <div className="col-6 member-image">
              <img className="member-image__img" src={require('../../assets/identicons/' + props.img)} alt={props.name} />
            </div>
            <div className="col-6 member-socials">
              <div className="email">
                <a className="email-icon" href={"mailto: " + props.email}>
                  <AiOutlineMail />
                </a>
              </div>
              <div className="gitlab">
                <a className="gitlab-icon" href={props.gitlab} target={"_blank"}>
                  <FiGitlab />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row member-card--content">
        <h3 className="member-name mt-3">
          {props.name}
        </h3>
        <p className="member-role">
          {props.role}
        </p>
      </div>
      <hr />
      <div className="row member-card--footer">
        <p>
          {props.motto}
        </p>
      </div>
    </div>
  );
}

export default MemberCard;
