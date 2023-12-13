import MainButton from '../UI/MainButton/MainButton'
import classes from './MyHeader.module.css'

const MyHeader = () => {
    return (
        <div className={classes.MyHeader}>
            <div className="container">
                <div className={classes.MyHeader__wrapper}>
                    <div className={classes.MyHeader__buttons}>
                        <MainButton> Добавить </MainButton>
                        <MainButton disabled> Обновить </MainButton>
                    </div>

                    <div  className={classes.MyHeader__input}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;