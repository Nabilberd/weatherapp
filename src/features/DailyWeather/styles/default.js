/**
 * Use a CSS-IN-JS approach to manage the appearance of components.
 */
export const styles = {
    navigation: {
        display: 'flex',
        marginBottom: '2vh',
        width: '100%',
    },
    arrowLeft: {
        //background: 'red',
        width: '20%',
        display: 'inline-block',
        height: '100%',
        textAlign: '-webkit-center'
    },
    middleArrow: {
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '20px',
        background: 'pink',
        display: 'inline-flex',
        width: '60%',
        height: '100%',
        borderRadius: '20px'
    },
    arrowRight: {
        display: 'inline-block',
        width: '20%',
        height: '100%',
        textAlign: '-webkit-center'
    },
    cityBloc: {
        marginLeft: '6px',
        width: '30%',
        marginTop: '9px',
        flexFlow: 'column',
        display: 'flex'
    },
    cityFontStyle: {
        color: 'black',
        fontSize: '16px',
        fontWeight: 550
    },
    weatherInfoBloc: {
        color: 'black',
        fontSize: '16px'
    },
    imageBloc: {
        marginLeft: '23px',
        marginTop: '5px',
        width: '40%'
    },
    currentWeatherStyle: {
        color: 'black',
        fontWeight: 550
    },
    descriptionBloc: {
        color: 'black',
        textTransform: 'capitalize'
    }
}