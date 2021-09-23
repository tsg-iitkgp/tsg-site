import Modal from "react-modal";
import { useState } from "react";

export default function FrModal(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };
    const styles = {
        imgContainer: {
            width: '80%',
            maxWidth: '300px',
            border: '2px solid red',
            borderRadius: '8px',
            margin: '40px auto',
            textAlign: 'center',
            padding: '30px 20px',
            boxShadow: '0 7px 30px -10px rgba(150,170,180,0.8)',
            cursor: 'pointer'
        },
        tableHeader: {
            fontSize: '14px'
        },
        p: {
            fontSize: '18px',
            margin: 0
        },
        h1: {
            fontSize: '34px',
            padding: '20px 0',
            textAlign: 'center',
            margin: '0'
        },
        leaderboardImg: {
            width: '40%',
            objectFit: 'contain',
            margin: '10px'
        }
    }

    return (
        <div className="image-container">
            <div
                style={styles.imgContainer}
                onClick={handleModalOpen}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/awards/person-placeholder.png";
                }}
            >
                <h1>
                    Freedom Run
                </h1>
                <p>
                    Click Here >
                </p>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Image description">

                <section style={{ overflowY: 'auto' }}>
                    <h1 style={styles.h1}>Freedom Run</h1>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/cf1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/cf2.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/cm1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/cm2.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/f1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/f2.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/m1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/m2.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/m3.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/s1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/fr/s2.png" />
                    </div>
                </section>

            </Modal>
        </div>
    );
}
