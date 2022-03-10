import Modal from "react-modal";
import { useState } from "react";
import Styles from '../../styles/css/internships.module.css';
import * as Icon from "react-feather";


export default function InternshipModal({ data: internshipData, onRequestClose, ...props }) {
    return (
        <Modal onRequestClose={onRequestClose} className={Styles.internshipModal} {...props} contentLabel="Event description">
            {
                internshipData && (
                    <div className={Styles.container}>
                        <div className={Styles.header}>
                            <div>
                                {internshipData[1]} Internship
                            </div>
                            <div onClick={onRequestClose}>
                                <Icon.X size={14} className={Styles.liIcon} />
                            </div>
                        </div>
                        <div className={Styles.body}>
                            <div>
                                <h2>
                                    {internshipData[0]}
                                </h2>
                                <p>
                                    {internshipData[4]}
                                </p>
                            </div>
                            <div>
                                <h4>
                                    Deadline
                                </h4>
                                <div>
                                    {internshipData[6]}
                                </div>
                            </div>
                            <div>
                                <h4>
                                    How To Apply?
                                </h4>
                                <div>
                                    {
                                        internshipData[5].split('\n').map((item) => (<div>{item}</div>))
                                    }
                                </div>
                            </div>

                        </div>
                        <div className={Styles.footer}>
                            <a href={internshipData[7]} className={Styles.button}>
                                Apply
                            </a>
                        </div>
                    </div>
                )
            }
        </Modal>
    )
}
