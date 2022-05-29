import React from 'react';
import { BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/sslancelot" target="_blank">
                <BsGithub />
            </a>
        </div>
        <div>
            <a href="https://www.youtube.com/channel/UC8AIHJ9VIIfIErwJg4-NaIQ" target="_blank">
                <BsYoutube />
            </a>
        </div>
        <div>
            <a href="https://instagram.com/lancelotunity" target="_blank">
                <BsInstagram />
            </a>
        </div>
    </div>
);

export default SocialMedia;