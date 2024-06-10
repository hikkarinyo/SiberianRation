import classNames from 'classnames'
import { SocialIcon } from '../../common/SocialIcon/SocialIcon'


const cx = classNames.bind(require('./styles.scss'))

interface FooterProps {
    id: string
}

const Footer = (props: FooterProps) => {
    return (
        <footer id={props.id} className={cx('footer')}>
            <div className={cx('footerWrapper', 'container')}>
                <div className={cx('footerContacts')}>
                    <h2 className={cx('footerTitle')}>Контакты</h2>
                    <p className={cx('footerText')}>
                        г. Томск, ул. Мокрушина 9 С.16
                    </p>
                    <p className={cx('footerText')}>
                        Тел:
                        <a className={cx('footerLink')} href='tel:+7(3822)33-06-03'>+7 (3822) 33-06-03</a>
                    </p>
                    <p className={cx('footerText')}>
                        Email:
                        <a className={cx('footerLink')} href='mailto:sibracion@mail.ru'>sibracion@mail.ru</a>
                    </p>
                </div>
                <SocialIcon width='43'/>
            </div>
        </footer>
    )
}

export default Footer
