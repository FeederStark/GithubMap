import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as UsersActions } from '../../store/ducks/users';
import {
  Container, Card, Avatar, UserInfo, Name, Username, Xbutton,
} from './styles';
import xIcon from '../../images/x-button.svg';

const GithubModal = ({ users, removeUser }) => (
  <Container>
    {users.map(user => (
      <Card key={user.username}>
        <Avatar src={user.avatar} />
        <UserInfo>
          <Name>{user.name}</Name>
          <Username>{user.username}</Username>
        </UserInfo>
        <Xbutton
          src={xIcon}
          onClick={() => {
            removeUser(user.username);
          }}
        />
      </Card>
    ))}
  </Container>
);

GithubModal.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GithubModal);
