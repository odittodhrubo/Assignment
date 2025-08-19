import React from 'react';

const Profile = () => {
  const user = {
    name: "Eiichiro Oda",
    email: "oda.eiichiro@example.com",
    joinDate: "October 1992",
    profilePic: "c:\Users\dhrub\OneDrive\Pictures\Screenshots\oda.png",
    bio: "Eiichiro Oda is a Japanese manga artist and the creator of the series One Piece. With more than 516 million copies sold, One Piece is both the best-selling manga and the best-selling comic series of all time.",
    stats: {
      volumes: 106,
      drafts: 5,
      chapters: 1100,
      copies: "516M+"
    }
  };

  return (
    <div>
      <h2 className="heading-text">EIICHIRO ODA PROFILE</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="profile-card mb-4">
            <div className="card-body text-center white-text">
              <img 
                src={user.profilePic} 
                alt="Eiichiro Oda" 
                className="profile-img mb-3"
              />
              <h4 className="white-text mb-2">{user.name}</h4>
              <p className="white-text mb-2">{user.email}</p>
              <p className="white-text mb-3">Joined: {user.joinDate}</p>
              <div className="mt-3">
                <span className="skill-badge">Storytelling</span>
                <span className="skill-badge">Character Design</span>
                <span className="skill-badge">World Building</span>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="card-header">
              <h5>Manga Statistics</h5>
            </div>
            <div className="card-body white-text mb-2">
              <div className="stats-item">
                <span className="stats-label">Volumes Released:</span>
                <span className="stats-number">{user.stats.volumes}</span>
              </div>
              <div className="stats-item">
                <span className="stats-label">Draft Chapters:</span>
                <span className="stats-number">{user.stats.drafts}</span>
              </div>
              <div className="stats-item">
                <span className="stats-label">Total Chapters:</span>
                <span className="stats-number">{user.stats.chapters}</span>
              </div>
              <div className="stats-item">
                <span className="stats-label">Copies Sold:</span>
                <span className="stats-number">{user.stats.copies}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;