import Modal from "react-modal";
import { useState } from "react";
import TileStyles from '../../styles/css/events.module.css';
import ModalStyles from '../../styles/css/event_modal.module.css';

export default function EventModal({ data: event }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    let ModalContent;

    if (event.modalContent) {
        ModalContent = require(event.modalContent);
    }


    return (
        <>
            <div className={TileStyles.card}
                onClick={handleModalOpen}
            >
                <div className={TileStyles.header}>
                    <h1>
                        {event.title}
                    </h1>
                    <div>
                        <span className={TileStyles.date}>
                            {event.date}
                        </span>
                    </div>
                </div>
                <div className={TileStyles.body}>
                    <p>
                        {event.description}
                    </p>
                </div>
                <div className={TileStyles.footer}>

                </div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Event description">
                {ModalContent ? <ModalContent /> : (
                    <div className={ModalStyles.modalContent}>
                        <h1>
                            {event.title}
                        </h1>
                        <div className={ModalStyles.imageWrapper}>
                            <img src={event.poster} />
                        </div>
                        {event.links.map((link) => {
                            return (
                                <div style={{ textAlign: 'center' }}>
                                    <br />
                                    {link.description}{" "}
                                    <a href={link.href}>{link.content || link.href}</a>
                                </div>
                            )
                        })}
                        {
                            event.content.map((item) => (
                                <p className={ModalStyles.eventContent}>
                                    {item}
                                </p>
                            )
                            )
                        }
                    </div>
                )}
            </Modal>
        </>
    );
}
