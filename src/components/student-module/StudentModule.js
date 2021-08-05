import React from 'react'

import Content from '../../contentFolder/content'

export default function StudentModule({language}) {

    let content
    if(language === 'English'){
        content = Content.English
        console.log(content)
    }else if(language === 'Deutsch'){
        content = Content.Deutsch
        console.log(content)
    }else if(language === 'French'){
        content = Content.French
        console.log(content)
    }else{
        content = Content.English
        console.log(content)
    }

    return (
        <div>
            <p>{content.dashboard}</p>
            <p>{content.dashboardContant}</p>
        </div>
    )
}


