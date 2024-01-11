import PropTypes from 'prop-types'

const Character = ({ family, fullName, imageUrl, title }) => {
    return (
        <div className="card-container">
            <img src={ imageUrl } alt={ fullName } />
            <div className="card-body">
                <h2>{ title }</h2>
                <h3>{ fullName } of { family }</h3>
            </div>
        </div>
    );
};

Character.propTypes = {
    family: PropTypes.string,
    fullName: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
}

export default Character;