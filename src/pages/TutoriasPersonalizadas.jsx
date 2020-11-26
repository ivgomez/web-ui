import React from 'react'
import { connect } from 'react-redux'
import { getTutoriasPersonalizadasAction } from '../redux/actions/tutoriasAction'

const TutoriasPersonalizadas = (props) => {
    console.log("props ", props)
    return (
        <div>
            TutoriasPersonalizadas
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tutorias: state.tutoriasPersonalizadas,
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = {
    getTutoriasPersonalizadasAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TutoriasPersonalizadas)
