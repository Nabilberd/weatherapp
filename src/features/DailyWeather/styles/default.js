/**
 * Use a CSS-IN-JS approach to manage the appearance of components.
 */
export const styles = {
    navigation: {
        display: 'flex',
        marginBottom: '7vh',
        background: 'res',
        width: '100%',
        height: '10vh'
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
        lineHeight: '90px',
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
        width: '30%',
        marginTop: '16px',
        flexFlow: 'column',
        display: 'flex'
    },
    cityFontStyle: {
        color: 'black',
        fontSize: '24px',
        fontWeight: 550
    },
    weatherInfoBloc: {
        color: 'black',
        fontSize: '20px'
    },
    imageBloc: {
        marginTop: '5px',
        width: '40%'
    },
    currentWeatherBloc: {
        marginBottom: '4px'
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