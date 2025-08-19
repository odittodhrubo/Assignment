import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

const Profile = () => {
  const user = {
    name: "Eiichiro Oda",
    email: "oda.eiichiro@shueisha.jp",
    joinDate: "October 1992",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Eiichiro_Oda_%282016%29.jpg/440px-Eiichiro_oda_%282016%29.jpg",
    bio: "Eiichiro Oda (尾田 栄一郎, Oda Eiichirō) is a Japanese manga artist and the creator of the series One Piece. With more than 516 million copies sold, One Piece is both the best-selling manga and the best-selling comic series of all time.",
    stats: {
      published: 106,
      drafts: 5,
      totalViews: "516M+"
    }
  };

  return (
    <div>
      <h2 className="heading-text">EIICHIRO ODA PROFILE</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 stats-card">
            <Card.Body className="text-center">
              <img 
                src={user.profilePic} 
                alt="Eiichiro Oda" 
                className="profile-img mb-3"
              />
              <h4>{user.name}</h4>
              <p className="text-muted">{user.email}</p>
              <p>Joined Shueisha: {user.joinDate}</p>
              <div className="mt-3">
                <span className="skill-badge">Storytelling</span>
                <span className="skill-badge">Character Design</span>
                <span className="skill-badge">World Building</span>
              </div>
            </Card.Body>
          </Card>
          
          <Card className="stats-card">
            <Card.Header>
              <h5>Manga Statistics</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Volumes Released:</span>
                <span className="stats-number">{user.stats.published}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Draft Chapters:</span>
                <span className="stats-number">{user.stats.drafts}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Copies Sold:</span>
                <span className="stats-number">{user.stats.totalViews}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <div className="content-section">
            <h3>About the Mangaka</h3>
            <p>{user.bio}</p>
            <p>Born on January 1, 1975 in Kumamoto, Japan, Oda began drawing at age 4 and created his first manga at age 17. He worked as an assistant to several manga artists before launching One Piece in 1997.</p>
            <p>His favorite manga series include Dragon Ball and Vicky the Viking, which have influenced his work. Oda is known for his intricate storytelling, creative character designs, and ability to maintain a long-running series while keeping it engaging.</p>
          </div>
          
          <div className="content-section">
            <h3>Recent Activity</h3>
            <div className="activity-item">
              <i className="bi bi-pencil-fill me-2" style={{color: '#F8C300'}}></i>
              <span>Working on Chapter 1107 of One Piece</span>
            </div>
            <div className="activity-item">
              <i className="bi bi-book-half me-2" style={{color: '#F8C300'}}></i>
              <span>Volume 106 released - December 2023</span>
            </div>
            <div className="activity-item">
              <i className="bi bi-mic-fill me-2" style={{color: '#F8C300'}}></i>
              <span>Participated in Jump Festa 2024</span>
            </div>
            <div className="activity-item">
              <i className="bi bi-film me-2" style={{color: '#F8C300'}}></i>
              <span>One Piece Film: Red surpassed 20 billion yen at box office</span>
            </div>
          </div>
          
          <div className="content-section">
            <h3>Notable Awards</h3>
            <ul>
              <li>Guinness World Record for "Most copies published for the same comic book series by a single author"</li>
              <li>Japan Media Arts Festival Award (2001)</li>
              <li>Tezuka Osamu Cultural Prize (2012)</li>
              <li>Sanda Kyōdō Award (2018)</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;