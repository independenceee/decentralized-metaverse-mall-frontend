"use client";

import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import Image from "next/image";
import images from "@/assets/images";
import Button from "@/components/Button";
import { StakeContextType } from "@/types/contexts/StakeContextType";
import StakeContext from "@/contexts/components/StakeContext";
import { LucidContextType } from "@/types/contexts/LucidContextType";
import LucidContext from "@/contexts/components/LucidContext";

const cx = classNames.bind(styles);

function Banner() {
    const { lucid } = useContext<LucidContextType>(LucidContext);
    const { registerStakeKey, withdrawRewards, deregisterStakeKey } = useContext<StakeContextType>(StakeContext);

    const handleRegisterStakeKey = async function () {
        if (lucid) {
            const txHash = await deregisterStakeKey(lucid);

            console.log(txHash);
        }
    };

    return (
        <section className={cx("banner")}>
            <Image src={images.bannerBackground} alt="cryptoz-background" className={cx("branner-background")} />
            <div className={cx("wrapper")}>
                <div className={cx("banner-inner")}>
                    <div data-aos="fade-left" className={cx("banner-content")}>
                        <h1 className={cx("banner-title")}>
                            <div className={cx("banner-title-up")}>Platform for</div>
                            <div className={cx("banner-title-down")}>The crypto Industry</div>
                        </h1>
                        <div className={cx("banner-intro")}>
                            At vero eos et accusamus et iusto odio ignissimos ducimus qui blanditiis praesentium um deleniti atque corrupti.
                        </div>
                        {/* Button goes here */}
                        <Button onClick={handleRegisterStakeKey} className={cx("banner-button")}>
                            Get started
                        </Button>
                    </div>
                    <div data-aos="fade-right" className={cx("banner-image-wrapper")}>
                        <div className={cx("banner-image-container")}>
                            <Image src={images.bannerImage} alt="cryptoz-image" className={cx("branner-image")} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
