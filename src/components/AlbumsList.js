import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import music from '../images/music.jpeg';
import { Link } from 'react-router-dom';

const AlbumsList = ({ albums, isDashboard }) => {
  const dashboard = isDashboard();
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem', cursor: 'pointer', display: 'flex', 'flex-direction': 'row', 'width': '500px' }} >
                  {dashboard ? (
                    <Link
                      to={{ pathname: '/classification/'+album.id }}
                      className="card-image-link"
                    >
                      {!_.isEmpty(album.album.images) ? (
                        <Card.Img
                          variant="top"
                          src={album.album.images[0].url}
                          alt=""
                        />
                      ) : (
                        <img src={music} alt="" />
                      )}
                    </Link>
                  ) : (
                    <Link
                      to={{ pathname: '/addDataset/'+album.id }}
                      className="card-image-link"
                    >
                      {!_.isEmpty(album.album.images) ? (
                        <Card.Img
                          variant="top"
                          src={album.album.images[0].url}
                          alt=""
                        />
                      ) : (
                        <img src={music} alt="" />
                      )}
                    </Link>
                  )}
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {album.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};


export default AlbumsList;
