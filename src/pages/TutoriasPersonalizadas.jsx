import React from 'react'
import { connect } from 'react-redux'
import { getTutoriasPersonalizadasAction } from '../redux/actions/tutoriasAction'
import { Button } from '@material-ui/core';

const TutoriasPersonalizadas = (props) => {
    return (
        <div class="col-md">
            <h3>Tutorías Personalizadas</h3>
            <p class="grey-text pt-3">Selecciona el espacio académico y luego una fecha para solicitar una tutoría personalizada</p>
            <div class="container-fluid">
                <div class="col-sm">
                    <Button color="secondary">Solicitar tutoría personalizada</Button>
                </div>
            </div>
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
