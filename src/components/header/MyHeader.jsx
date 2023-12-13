import MainButton from '../UI/MainButton/MainButton'
import MyInput from '../UI/MyInput/MyInput'
import classes from './MyHeader.module.css'

const MyHeader = () => {


    return (
        <div className={classes.MyHeader}>
            <div className="container">
                <div className={classes.MyHeader__wrapper}>
                    <div className={classes.MyHeader__buttons}>
                        <MainButton disabled> Добавить </MainButton>
                        <MainButton disabled> Обновить </MainButton>
                    </div>

                    <div className={classes.MyHeader__input}>
                        <MyInput
                            type="text"
                            invalid
                            placeholder="Placeholder"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;