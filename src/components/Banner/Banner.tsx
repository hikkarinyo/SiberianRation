import React, { useState } from 'react'
import classNames from 'classnames'
import { ParallaxBanner } from 'react-scroll-parallax'
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types'
import { Button } from '../../common/Button/Button'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Modal from '../../common/Modal/Modal'
import Form from '../../common/Form/Form'
import { ToastContainer } from 'react-toastify'


const cx = classNames.bind(require('./styles.scss'))

interface BannerProps {
    id: string
}

const Banner = (props: BannerProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const background: BannerLayer = {
        image: '/images/banner.jpg',
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true
    }

    const headline: BannerLayer = {
        translateY: [0, 30],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: false,
        expanded: false,
        children: (
            <AnimationOnScroll animateIn={'fadeInUp'} className={cx('bannerWrapper')}>
                <h1 className={cx('bannerTitle')}>Выездное обслуживание<br/>мероприятия</h1>
                <ul className={cx('bannerList')}>
                    <li className={cx('bannerList-item')}>банкет</li>
                    <li className={cx('bannerList-item')}>кофе-брейк</li>
                    <li className={cx('bannerList-item')}>фуршет</li>
                    <li className={cx('bannerList-item')}>гриль-меню</li>
                </ul>
                <Button onClick={handleOpenModal}>Забронировать</Button>
            </AnimationOnScroll>
        )
    }

    return (
        < >
            <ParallaxBanner
                id={props.id}
                layers={[background, headline]}
                className={cx('banner')}
            />
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <Form onCloseModal={handleCloseModal}/>
            </Modal>
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default Banner
