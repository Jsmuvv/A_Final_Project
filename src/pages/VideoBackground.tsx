import Card from 'react-bootstrap/Card';








const VideoBackground: React.FC = () => {
    return (
        <>
        <div>
        <Card className="text-center bg-dark text-light">
                    <Card.Body>
                        <Card.Title>MONCLER</Card.Title>
                        <Card.Text>
                        Welcome
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    <div className="video-background">
        <video autoPlay muted loop id="video-bg">
        <source src="video/MONCLER CLOTHING SHOOT.mp4" type="video/mp4" />
        </video>
    </div>
    </>
    );
};

export default VideoBackground;


