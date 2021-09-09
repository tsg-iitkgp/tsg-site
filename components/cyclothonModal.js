import Modal from "react-modal";
import { useState } from "react";

export default function CyclothonModal(props) {
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
                    Cyclothon
                </h1>
                <p>
                    Click Here >
                </p>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Image description">

                <section style={{ overflowY: 'auto' }}>
                    <h1 style={styles.h1}>Cyclothon</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '15px 0px'
                    }}>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '15px 0px'
                        }}>
                            <p style={{ ...styles.p, textAlign: 'center', display: 'block' }}>
                                Greetings from IIT KGP Sports, Technology Students Gymkhana! <br /> <br />

                                “Your bike is a discovery; your bike is freedom. It doesn’t matter where you are when you’re
                                on the saddle, you’re taken away.” <br /> <br />

                                If you are reminiscing about getting on your bikes and cycling frivolously, then your wait is
                                over! <br /><br />
                                In our pursuit to elude the monotony of classes and keep you active and fit, Technology
                                Students' Gymkhana is back with <b>“CYCLOTHON”</b>, to challenge you all for an electrifying
                                ride. <br /><br />

                                Registration form:
                                <a href="https://forms.gle/uaju8N5HbjfgJBgUA">
                                    https://forms.gle/uaju8N5HbjfgJBgUA
                                </a>
                                <br /><br />

                            </p>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <img src="/upcomingEvents/cyclothon/cyclothon-modal.jpg" style={{
                                    objectFit: 'contain',
                                    width: '50%'
                                }} />
                            </div>
                            <div>
                                <br /><center><b>Event Details</b></center> <br />
                                <b>Event Duration</b>: 28th August to 19th September <br />
                                <b>Time Slot for Cycling</b>: 5:00 AM to 10:00 PM <br />
                                <b>Maximum allowed Cycling Duration</b>: 90 minutes <br />

                                (This 90 minutes duration is only under the club, you can carry out your cycling exceeding the
                                mentioned time too, but it will not be included in the competition )

                                <b>Maximum Attempts allowed</b>: 1 <br />
                                <b>Online Platform</b>: STRAVA <br /> <br />

                                <center><b>Some Important Points</b></center>
                                <ul>
                                    <li>
                                        Download STRAVA on your smartphones
                                        <ol>
                                            <li>
                                                Link for the app for Android Devices: <br />
                                                <a href="https://play.google.com/store/apps/details?id=com.strava">https://play.google.com/store/apps/details?id=com.strava</a>
                                            </li>
                                            <li>
                                                Link for the app for Apple Devices: <br />
                                                <a href="https://apps.apple.com/in/app/strava-run-ride-training/id426826309">https://apps.apple.com/in/app/strava-run-ride-training/id426826309</a>
                                            </li>
                                        </ol>
                                    </li>
                                </ul>

                                <br /><center><b>Prizes</b></center> <br />
                                <div>
                                    In this 23 days long event <b>top 10 performances(distances)</b> will be considered for the prizes. <br />
                                    It means in this 23 days long event you're free to cycle any <b>10 days</b> which we will eventually
                                    count to decide the winner! <br />
                                    First Prize - SmartWatch <br />
                                    Second Prize - Airdopes <br />
                                    Third Prize - Bluetooth Speaker <br /> <br />
                                    Show your dedication and stand a chance to win <b>Official KGP merchandise</b>. <br />
                                </div>
                            </div>

                        </div>
                    </div>


                    <h3 style={{ textAlign: 'center' }}>
                        <a href="https://m.facebook.com/story.php?story_fbid=2851308285091653&id=1375511306004699&sfnsn=wiwspwa">
                            Leaderboards
                        </a>
                    </h3>
                    <div style={{ textAlign: 'center' }}>
                        <img style={styles.leaderboardImg} src="/upcomingEvents/cyclothon/cf1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/cyclothon/cf2.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/cyclothon/cm1.png" />
                        <img style={styles.leaderboardImg} src="/upcomingEvents/cyclothon/cm2.png" />
                    </div>

                    <h3>
                        Important Links
                    </h3>
                    <u>
                        <li>
                            <a href="/upcomingEvents/cyclothon/cyclothon_instructions.pdf" target="_blank">Instruction Manual</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1wXD_fMq4oHKB82uyVkwg0lDiR8f6uNwI/view?usp=sharing" target="_blank">Video Guide</a>
                        </li>
                        <li>
                            <a href="/upcomingEvents/cyclothon/cyclothon_rules_and_regulations.pdf" target="_blank">Rules and Regulations</a>
                        </li>
                    </u>
                </section>

            </Modal>
        </div>
    );
}
