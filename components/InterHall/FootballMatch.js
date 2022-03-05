import React from 'react';
import Styles from '../../styles/css/InterHall/football.module.css';

function FootballMatch({ data }) {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.header}>
        {data.time}, {data.location}
      </div>
      <div className={Styles.body}>
        <div className={Styles.eachTeamContainer}>
          <div className={Styles.eachTeam}>
            {data.team1}
          </div>
          <div className={Styles.teamScore}>
            {data.team1_score}
          </div>
        </div>
        <div className={Styles.vs}>
          vs
        </div>
        <div className={Styles.eachTeamContainer}>
          <div className={Styles.eachTeam}>
            {data.team2}
          </div>
          <div className={Styles.teamScore}>
            {data.team2_score}
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        {data.highlight_line}
      </div>
    </div>
  )
}


export default FootballMatch;