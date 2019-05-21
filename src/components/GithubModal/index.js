import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';
import './styles.css';

class GithubModal extends Component {
  state = {
    githubInput: '',
  };

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      open: PropTypes.bool,
    }).isRequired,
  };

  addUser = async (e) => {
    e.preventDefault();
    const { githubInput } = this.state;
    const { addUserRequest, modal, closeModal } = this.props;
    const { coordinates } = modal;
    await addUserRequest(githubInput, coordinates);
    this.setState({ githubInput: '' });
    closeModal();
  };

  render() {
    const { modal, closeModal } = this.props;
    const { githubInput } = this.state;
    return (
      <Modal
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        ariaHideApp={false}
        isOpen={modal.open}
        contentLabel="Github User Add Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Add new user</h2>
        <form onSubmit={this.addUser}>
          <input
            placeholder="Github User"
            value={githubInput}
            onChange={e => this.setState({ githubInput: e.target.value })}
          />
          <div className="buttons">
            <button type="button" className="cancel" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ModalActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GithubModal);
