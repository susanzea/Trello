import React from 'react';

const LangMenu = (props) => {
    return(
        <select>
            <option value="čeština">Čeština</option>
            <option value="deutsch">Deutsch</option>
            <option value="english">English</option>
            <option value="english-au">English (AU)</option>
            <option value="english-us" selected="true">English (US)</option>
            <option value="español">Español</option>
            <option value="français">Français</option>
            <option value="italiano">Italiano</option>
            <option value="Magyar">Magyar</option>
            <option value="Nederlands">Nederlands</option>
            <option value="Norsk">Norsk (bokmål)</option>
            <option value="polski">Polski</option>
            <option value="português">Português (Brasil)</option>
            <option value="suomi">Suomi</option>
            <option value="svenska">Svenska</option>
            <option value="tiếng">Tiếng</option>
            <option value="pyccknñ">Pyccknñ</option>
            <option value="Українська">Українська</option>
            <option value="ภาษาไทย">ภาษาไทย</option>
            <option value="中文 (简体)">中文 (简体)</option>
            <option value="中文 (繁體)">中文 (繁體)</option>
            <option value="日本語">日本語</option>
        </select>
    )
}

export default LangMenu;