import Modal from "react-modal";
import { useEffect, useState } from "react";
import { BarLoader } from 'react-spinners';
import { css } from "@emotion/react";
import Styles from '../../styles/css/InterHall/Cricket/scorecard.module.css';
import * as Icon from "react-feather";


const override = css`
  display: block;
  margin: auto;
`;

export default function CricketScoreCardModal({ matchData, onRequestClose, ...props }) {
    const [isLoading, setIsLoading] = useState(true);
    const [modalData, setModalData] = useState([]);

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbzBMcvAFVr5IVC3KWDusLdZP-ZiEQ16Ngnpqj9RWgmteasFtGGqL1XHVAOXOQKaEgs/exec?sheetName=${matchData.result_sheet}`)
            .then((response) => (response.json())).then((responseData) => {
                setModalData(responseData.data);
                console.log(responseData.data);
                setIsLoading(false);
            }).catch((err) => console.log(err));
    }, []);

    const filterData = (team, role, item) => {
        return (team === item.team && (role === item.role || 'all_rounder' === item.role))
    }

    return (
        <Modal onRequestClose={onRequestClose} className={Styles.modal} {...props} contentLabel="Event description">
            {

                <div className={Styles.container}>
                    <div className={Styles.header}>
                        <div>
                            {`${matchData.team1} vs ${matchData.team2}`}
                        </div>
                        <div onClick={onRequestClose}>
                            <Icon.X size={14} className={Styles.liIcon} />
                        </div>
                    </div>
                    <div className={Styles.body}>
                        {
                            isLoading ? (
                                <div className={Styles.loader}>
                                    <BarLoader color={'#b2c58c'} loading={isLoading} css={override} size={150} />
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <div className={Styles.resultLine}>
                                            {matchData.result_line}
                                        </div>
                                        <div className={Styles.scoreCard}>
                                            <div className={Styles.heading}>
                                                {matchData.team1} Innings
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Batsman
                                                        </td>
                                                        <td>
                                                            R
                                                        </td>
                                                        <td>
                                                            B
                                                        </td>
                                                        <td>
                                                            4s
                                                        </td>
                                                        <td>
                                                            6s
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        modalData.filter((...props) => filterData(matchData.team1, 'batsman', ...props))
                                                            .map((item) => (
                                                                <tr>
                                                                    <td className={Styles.batsman}>
                                                                        {item.player_name}
                                                                    </td>
                                                                    <td>
                                                                        {item.runs_taken}
                                                                    </td>
                                                                    <td>
                                                                        {item.balls}
                                                                    </td>
                                                                    <td>
                                                                        {item.fours}
                                                                    </td>
                                                                    <td>
                                                                        {item.sixes}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                    }
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Extras
                                                        </td>
                                                        <td>
                                                            {matchData.team1_extras}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Total
                                                        </td>
                                                        <td>
                                                            {matchData.team1_score}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br />
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Bowler
                                                        </td>
                                                        <td>
                                                            O
                                                        </td>
                                                        <td>
                                                            R
                                                        </td>
                                                        <td>
                                                            W
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        modalData.filter((...props) => filterData(matchData.team2, 'bowler', ...props))
                                                            .map((item) => (
                                                                <tr>
                                                                    <td className={Styles.batsman}>
                                                                        {item.player_name}
                                                                    </td>
                                                                    <td>
                                                                        {item.overs}
                                                                    </td>
                                                                    <td>
                                                                        {item.runs_given}
                                                                    </td>
                                                                    <td>
                                                                        {item.wickets}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <br/>
                                        <div className={Styles.scoreCard}>
                                            <div className={Styles.heading}>
                                                {matchData.team2} Innings
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Batsman
                                                        </td>
                                                        <td>
                                                            R
                                                        </td>
                                                        <td>
                                                            B
                                                        </td>
                                                        <td>
                                                            4s
                                                        </td>
                                                        <td>
                                                            6s
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        modalData.filter((...props) => filterData(matchData.team2, 'batsman', ...props))
                                                            .map((item) => (
                                                                <tr>
                                                                    <td className={Styles.batsman}>
                                                                        {item.player_name}
                                                                    </td>
                                                                    <td>
                                                                        {item.runs_taken}
                                                                    </td>
                                                                    <td>
                                                                        {item.balls}
                                                                    </td>
                                                                    <td>
                                                                        {item.fours}
                                                                    </td>
                                                                    <td>
                                                                        {item.sixes}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                    }
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Extras
                                                        </td>
                                                        <td>
                                                            {matchData.team2_extras}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Total
                                                        </td>
                                                        <td>
                                                            {matchData.team2_score}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br />
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className={Styles.batsman}>
                                                            Bowler
                                                        </td>
                                                        <td>
                                                            O
                                                        </td>
                                                        <td>
                                                            R
                                                        </td>
                                                        <td>
                                                            W
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        modalData.filter((...props) => filterData(matchData.team1, 'bowler', ...props))
                                                            .map((item) => (
                                                                <tr>
                                                                    <td className={Styles.batsman}>
                                                                        {item.player_name}
                                                                    </td>
                                                                    <td>
                                                                        {item.overs}
                                                                    </td>
                                                                    <td>
                                                                        {item.runs_given}
                                                                    </td>
                                                                    <td>
                                                                        {item.wickets}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>


                                    {/* <div className={Styles.footer}>
                            <a href={internshipData[6]} className={Styles.button}>
                                Apply
                            </a>
                        </div> */}
                                </>
                            )
                        }
                    </div>

                </div>

            }
        </Modal>
    )
}
