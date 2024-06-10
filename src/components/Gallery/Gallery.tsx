import classNames from 'classnames'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const cx = classNames.bind(require('./styles.scss'))


const Gallery = () => {
    const galleryText =
        'Каждое мероприятие - это отдельная история, с индивидуальным подходом, нестандартными решениями ' +
        'и высоким уровнем обслуживания! В процессе подготовки к мероприятию наша команда продумывает всё до ' +
        'мелочей. Индивидуальное меню с учётом Ваших пожеланий позволит выбрать самое лучшее, вкусное для ' +
        'вашего стола.'

    const galleryUrl = {
        video1: '/uploads/video_1.mp4',
        video2: '/uploads/video_2.mp4',
        video3: '/uploads/video_3.mp4',
        video4: '/uploads/video_4.mp4',
    }

    return (
        <section className={cx('gallery')}>
            <div className={cx('container')}>
                <p className={cx('galleryText')}>{galleryText}</p>
                <div className={cx('galleryGrid')}>
                    <AnimationOnScroll className={cx('video1')} animateIn='fadeInLeft'>
                        <video
                            src={galleryUrl.video1}
                            className={cx('video')}
                            autoPlay
                            muted
                            preload='metadata'
                            poster='/images/snapshot-1.jpg'
                        >
                        </video>
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('photo2')} animateIn='fadeInRight'>
                        <img src='/images/hot-platter.jpg' className='img' alt='photo' draggable='false'/>
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('photo3')} animateIn='fadeInRight' >
                        <img src='/images/bruschetta.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('video4')} animateIn='fadeInRight'>
                        <video
                            src={galleryUrl.video2}
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot-2.jpg'
                            preload='metadata'
                        />
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('photo5')} animateIn='fadeInRight'>
                        <img src='/images/set-of-dishes.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('photo6')} animateIn='fadeInRight'>
                        <img src='/images/bruschetta-with-fish.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('photo7')} animateIn='fadeInLeft'>
                        <img src='/images/pilaf.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('video8')} animateIn='fadeInRight'>
                        <video
                            src={galleryUrl.video3}
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot-3.jpg'
                            preload='metadata'
                        />
                    </AnimationOnScroll>
                    <AnimationOnScroll className={cx('video9')} animateIn='fadeInRight'>
                        <video
                            src={galleryUrl.video4}
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot-4.jpeg'
                            preload='metadata'
                        />
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
};

export default Gallery
