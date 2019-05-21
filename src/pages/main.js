import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../store/ducks/modal';
import GithubModal from '../components/GithubModal';
import UsersList from '../components/UsersList';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  static propTypes = {
    openModal: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        avatar: PropTypes.string,
        username: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const { openModal } = this.props;
    const [longitude, latitude] = e.lngLat;
    const coordinates = { longitude, latitude };
    openModal(coordinates);
  };

  render() {
    const { viewport: viewportState } = this.state;
    const { users } = this.props;
    return (
      <Fragment>
        <UsersList />
        <MapGL
          {...viewportState}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZmVlZGVyIiwiYSI6ImNqdnZubXJ0MzJtN3I0MG8xaDFidzY1Y3oifQ.GnU01n4Vq0LYWl_kxKgc_Q"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {users.map(user => (
            <Marker
              key={user.username}
              latitude={user.latitude}
              longitude={user.longitude}
              captureClick
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                  border: '3px solid #7159c1',
                }}
                src={user.avatar}
                alt="Avatar"
              />
            </Marker>
          ))}
        </MapGL>
        <GithubModal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
